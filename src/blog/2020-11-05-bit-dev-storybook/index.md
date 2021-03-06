---
date: '2020-11-05'
title: 'How We Use bit and Storybook'
author: 'Evan Stern'
featuredImage: ./featured.jpg
tags:
  [
    'bit',
    'Web Development',
    'Library',
    'React',
    '3rd Party',
    'Storybook',
    'MachineServant',
    'Tech',
  ]
keywords:
  [
    'Storybook',
    'StorybookJS',
    'Component',
    'Component Library',
    'storybook.js',
    'React',
    'ReactJS',
    'bit.dev',
    'machineservant',
    'bit',
  ]
published: true
---

If you haven't already read [my post about
_Storybook_](https://machineservant.com/blog/2020-11-02-storybook), then go ahead
and read it if you aren't sure what _Storybook_ is.

Ready? Great!

# Storybook Recap

Since you've already read my other blog post, I'll be brief:

_Storybook_ is a tool that lets you create and manage your component library
in an isolated environment. It's a great way to build such a library because
it makes you start thinking about developing modular and descriptive
components while providing a fantastic playground and documentation site.

# What Storybook is Missing

While _Storybook_ is very good at what it does, and it performs with
distinction when you add it to a single project as a way to create that
project's library of components, if you want to share that library among
multiple projects then you'll need to augment its capabilities where it
falls short.

## Versioning

If you are keeping a component library completely separate from any other
project then you may want a way to keep track of the versions of each of your
components. With Storybook there's not really a way to do that out of the
box. You have to manage package.json files manually and it's very easy for
package interdependencies to become complex and for things to slip.

## Package Management

Hand in hand with versioning is package management. Obviously, if you're
creating a component library to share between projects then you'll need a way
to package your components up and deliver them to your projects. _Storybook_
does not do this for you.

# Enter "Bit"

_Bit_ is a system that allows you to create collections of components
(libraries) and share them between teams. Think of it as a combination of
`git` and the `npm` registry.

## Bit Basics

Using _Bit_ is pretty easy. You just install a CLI and start adding
components to your collection. You can do this inline with your project and
essentially create `npm` packages out of your components that can then be
shared between all your other projects.

Classically, you'd add your components from wherever they were originally
created. This is fine but at _MachineServant_ we have created a specialized
project to house all our shared components just to keep everything in one
place.

The point is, _Bit_ doesn't really care where you define your components, it
will store your collection just fine if you keep the code in one place or
distribute it across multiple projects.

## Dependency Tracking

When you add a component to _Bit_ and build it, _Bit_ will automatically
determine the dependencies of that component and manage them via a
`package.json` file.

What's really nice is that if you have inter-dependencies between your own
components, those dependencies are tracked as well and any change to a
dependency you control will cascade down to any components that use it.

## Versioning

Every time you make a change to a component tracked by _Bit_ you can
automatically bump the version of that component. _Bit_ keeps track of each
version and you can easily view the different versions through its UI.

Also, as mentioned above, if you bump the version of a component, then any
other components that depend upon it will be bumped as well! There's no need
to manually update the dependant packages.

## Package Management

When you add a component, build it, tag it, and export it to your collection,
you have just created a package tracked by and available from _Bit_.

You can then import that component into any project you like via `npm`.

For example, one of _MachineServant_'s components, `timed-carousel` is
available from _Bit_ by installing it with an `npm i @bit/machineservant.ms-components.timed-carousel` command.

# Bringing it All Together

If you read the previous post about _Storybook_ then you're familiar with
_MachineServant_'s component library project. Adding _Bit_ to the mix is as
simple as adding each component in that project to _Bit_ via their CLI and
then tracking and tagging any changes.

Essentially, with _Storybook_ you can develop your components in isolation,
manage your library, and document their functionality. With _Bit_ you can
manage versioning and distribute those components across projects.

You can see _MachineServant_'s _Bit_ component collection
[here](https://bit.dev/machineservant/ms-components).
