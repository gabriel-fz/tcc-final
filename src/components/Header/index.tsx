import React from 'react';
import { Link } from 'react-router-dom';

import imgLogo from '../../assets/logo.svg';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <div>
        <Link to="/">
          <img src={imgLogo} alt="logo" />
        </Link>
      </div>
    </Container>
  );
};

export default Header;
