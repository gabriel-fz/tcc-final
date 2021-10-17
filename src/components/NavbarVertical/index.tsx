import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

import { Container, Content, ButtonBack } from './styles';

interface NavbarVerticalProps {
  title: string;
}

const NavbarVertical: React.FC<NavbarVerticalProps> = ({ title, children }) => {
  const history = useHistory();

  return (
    <Container>
      <Content>
        <h3>{title}</h3>

        {children && <hr />}

        {children}
      </Content>

      <ButtonBack type="button" onClick={() => history.goBack()}>
        <FaArrowLeft size={20} />
        <span>Voltar</span>
      </ButtonBack>
    </Container>
  );
};

export default NavbarVertical;
