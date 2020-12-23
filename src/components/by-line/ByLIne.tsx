import React from 'react';

import { get } from 'lodash';
import Image from 'gatsby-image';

import { useAvatar } from '../../hooks/useAvatar';

type ByLineProps = {
  author: string;
};

export const ByLine: React.FC<ByLineProps> = ({ author }) => {
  const avatarCollection = useAvatar();

  const avatar = get(avatarCollection, author, null);

  return (
    <div className="flex items-center text-sm font-extralight">
      {avatar?.sm && <Image className="mr-2" fixed={avatar.sm} alt={author} />}{' '}
      {author}
    </div>
  );
};
