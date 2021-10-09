import React from 'react';

import { ButtonLinkProps, Container } from './styles';

const ButtonLink: React.FC<ButtonLinkProps> = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export default ButtonLink;
