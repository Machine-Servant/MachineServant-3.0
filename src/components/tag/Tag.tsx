import React from 'react';

import { kebabCase } from 'lodash';
import { Link } from 'gatsby';

type TagProps = {
  value: string;
  count?: number;
};

export const Tag: React.FC<TagProps> = ({ value, count }) => (
  <Link to={`/tag/${kebabCase(value)}`}>
    <div className="px-4 py-2 mx-4 mb-4 text-xs text-white bg-lochmara-400">
      <span className="mr-2 font-medium">#{value}</span>
      {count && <span className="ml-2 text-gray-200">({count})</span>}
    </div>
  </Link>
);
