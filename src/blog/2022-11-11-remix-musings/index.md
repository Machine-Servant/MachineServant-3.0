---
date: '2022-11-11'
title: 'Remix Musings'
author: 'Evan Stern'
featuredImage: ./featured.jpg
imageAlt: 'Snow capped mountain range at early sunset with the moon visible'
imageCredits: 'Photo by eberhard grossgasteiger from Pexels'
tags: ['React', 'Remix', 'Web Development', 'Tech']
keywords: ['Remix', 'Remix.run', 'React', 'ReactJS']
published: true
---

About a year ago, a little project by the team that brought us [React Router](https://reactrouter.com/) was made open source. The project, [Remix](https://remix.run/), had been gathering a lot of buzz in the ReactJS community; particularly when ReactJS evangelist [Kent C. Dodds](https://kentcdodds.com/) (Creator of the [Testing Library](https://testing-library.com/) suite of test tools) got involved as a co-founder.

## So, What is Remix?

Remix is yet another React framework _(YARF?)_. But wait, Remix isn't **just** another React framework _(JARF?)_. It has some truly special design philosophies and features that make it a little unique and might appeal to some of us who are languishing in SPA purgatory.

From the ground up, Remix is designed to feel like you're working with the underlying web technologies (Browsers, HTTP, HTML, Client-Server model, etc) rather than against them. You feel like you're working with a framework that embraces the web as it is and tries its best to do things that just work without trying to make the web something it isn't naturally.

In practical terms, this means that Remix is a server side rendered (SSR) framework with a client-server model that relies heavily on HTTP based requests to build your website. It feels a little more like what building a website felt like in the pre SPA days but with React as the view layer and state management handled in a very intuitive and elegant way.

## Enough talk, show me some code!

Okay, sure!

```tsx
import type { LoaderArgs } from '@remix-run/node';
import { json, useLoaderData } from '@remix-run/node';
import { getPosts } from '~/models/posts';

export const loader = async ({ request }: LoaderArgs) => {
  const posts = await getPosts(request);

  return json({ posts });
};

export default function PostsPage() {
  const { posts } = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li>
            <h2>{post.title}</h2>
            <span>{post.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

Yeah. There you go you impatient straw man.

In that example, we created a very simple list of posts. The `loader` is run server side and the data fed to the `PostsPage` function and server side rendered for us. Pretty simple and very easy to work with.

I'm not going to go over every single feature here. I'll direct you to the [official tutorial](https://remix.run/docs/en/v1/tutorials/jokes) for a much more detailed walk-through of all the features. But I do want to point out one of the biggest design features of Remix: it's built directly on top of React Router V6.

Given a directory structure like this:

```
/app
  posts/
    index.tsx
    $postId.tsx
  posts.tsx
```

We can create something like this:

```tsx
// app/routes/posts.tsx
export default function PostsPage() {
  return (
    <div>
      <h1>Posts</h1>
      <Outlet />
    </div>
  );
}

// app/routes/posts/index.ts
export const loader = async ({ request }: LoaderArgs) => {
  const posts = await getPosts(request);

  return json({ posts });
};

export default function PostsIndexPage() {
  const { posts } = useLoaderData<typeof loader>();

  return (
    <ul>
      {posts.map((post) => (
        <div key={post.id}>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </div>
      ))}
    </ul>
  );
}

// app/routes/posts/$postId.tsx
export const loader = async ({ request, params }: LoaderArgs) => {
  const post = await getPost(params.postId);

  return json({ post });
};

export default function PostDetailsPage() {
  const { post } = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>{post.title}</h1>
      <h2>{post.description}</h2>
      <article>{post.body}</article>
    </div>
  );
}
```

We just created a series of post pages including a parent "layout" route (`posts.tsx`), a list of posts (`posts/index.ts`) and a parameterized "post details" page (`posts/$postId.tsx`) that shows an individual post.

Remix handles the data fetching and rendering for you. And each route along the chain is only rendered when it's necessary to do so.

## What I like

There's a lot to like.

### Remix is intuitive.

If you have a strong foundation in HTTP and HTML, you won't have to stretch to understand what's going on in this framework.

### State just works.

You may find yourself trying to work around some classically difficult state management problems that are present in SPAs such as dealing with page transitions, or passing data down complicated nested components. In Remix, this kind of thing just generally works without you needing to do much. Even when you think you need to do some clever trick to get the data from a parent route, it turns out to just work the way you want it to, no tricks necessary.

### Form based

Remix relies heavily on using HTML forms to handle the flow of your application. It's a little different than how one might be used to doing things in a SPA app. You don't need a lot of `onClick` handlers or complicated state management. Just wrap your action UI elements inside a `<Form>` and let Remix handle it for you.

### Optimistic UI

One of my favorite features is the "optimistic ui" that is enabled through the `useTransition` hook.

Since you generally know what the next page is about to look like after a form submission or a link click, you can scaffold out the next page while the load is occurring just by listening to the current state of page transitions and conditionally rendering the correct components.

Using my above example as a template:

```tsx
// app/routes/posts/index.ts
export default function PostsIndexPage() {
  const { posts } = useLoaderData<typeof loader>();
  const transition = useTransition();

  // When the `Link` is clicked, and while the `PostDetailsPage` route is
  // loading, this `transition.state` property will be set to 'loading'.
  if (transition.state === 'loading') {
    // For the purposes of this example, we assume we have a `PostDetails`
    // component to render.
    return <PostDetails data={null} />;
  }

  return (
    <ul>
      {posts.map((post) => (
        <div key={post.id}>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </div>
      ))}
    </ul>
  );
}

// app/routes/posts/$postId.tsx
export const loader = async ({ request, params }) => {
  const post = await getPost(params.postId);

  return json({ post });
};

export default function PostDetailsPage() {
  const { post } = useLoaderData<typeof loader>();

  return <PostDetails data={post} />;
}
```

When the `Link` is clicked, the `PostDetails` component will be rendered with no data. You can show a skeleton loader, a loading spinner, or anything you want inside `PostDetails` when there's no data. As soon as the loader is done loading the data, the SSR will return the actual page. The end result is a SSR page that looks and feels like a SPA app.

### So much more

I'll do some more posts about individual features in the future.

## What can be improved

Generally speaking, the biggest issue with Remix right now is that it's young.

You will most likely run into some issues that are **actual** bugs or design flaws. The framework is open source, so you are encouraged to chip in and make improvements, but if your risk tolerance is low then you might want to wait some time for the project to mature before committing to it for an enterprise project.

I'm sure I'll be doing some more posts about specific issues I've run into and workarounds I've discovered. So stay tuned for that.

## My thoughts

Short summary: I like it.

Remix kind of feels like coming home after a long trip abroad. I've spent many years working with SPAs and Remix has the feel of what the web was like in the before times, in the long, long ago. But without ajax and IE7. It took the good parts of that era (simplicity, elegance) and added powerful features of the new era (state management, React).

I'm using Remix for a few enterprise projects right now and I'm fully bought in. I can't say that I haven't run into a few bugs. I'm confident that over time these rough edges will be smoothed out. But, as I said above, your risk tolerance may differ from mine.
