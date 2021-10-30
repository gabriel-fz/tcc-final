import React from 'react';

import { ContainerDefault } from './styles';

const Container: React.FC = ({ children }) => {
  return <ContainerDefault>{children}</ContainerDefault>;
};

export default Container;
