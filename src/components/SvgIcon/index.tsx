import React, { FC } from 'react';
import { IconProps } from './interface';

const importAll = (requireContext: any) => requireContext.keys().forEach(requireContext);

try {
  importAll(require.context('../../assets/icons', true, /\.svg$/));
} catch (error) {
  console.log(error);
}

const Icon: FC<IconProps> = ({ name, width, height, style }) => {
  return (
    <svg style={{ width, height, ...style }}>
      <use xlinkHref={'#' + name} />
    </svg>
  );
};

export default Icon;
