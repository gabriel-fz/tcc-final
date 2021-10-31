import React from 'react';

import { Container, ContainerProps as ImageProps } from './styles';

const Image: React.FC<ImageProps> = ({ ...rest }) => {
  return <Container {...rest} />;
};

export default Image;
