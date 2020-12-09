import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type FeatureCardProps = {
  icon: IconProp;
  title: string;
};

export const FeatureCard: React.FC<FeatureCardProps> = ({
  children,
  title,
  icon,
}) => (
  <div className="mx-4 mb-4 lg:flex-1 lg:mb-0">
    <FontAwesomeIcon className="text-4xl text-lochmara-600" icon={icon} />
    <br />
    <span className="inline-block mb-4 text-xl uppercase">{title}</span>
    <p className="text-sm">{children}</p>
  </div>
);
