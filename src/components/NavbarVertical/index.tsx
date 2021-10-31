import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { CgMenuGridO } from 'react-icons/cg';

import {
  Container,
  Content,
  ButtonBack,
  ShowNavbar,
  ButtonHideNavbar,
} from './styles';

interface NavbarVerticalProps {
  title: string;
}

const NavbarVertical: React.FC<NavbarVerticalProps> = ({ title, children }) => {
  const history = useHistory();

  const [showNavbar, setShowNavbar] = useState(() => window.innerWidth > 1000);

  return (
    <>
      {!showNavbar ? (
        <ShowNavbar>
          <button type="button" onClick={() => setShowNavbar(true)}>
            <CgMenuGridO size={25} color="#fff" />
          </button>
        </ShowNavbar>
      ) : (
        <Container>
          <Content>
            <h3>{title}</h3>

            {children && <hr />}

            {children}
          </Content>

          <ButtonBack type="button" onClick={() => history.goBack()}>
            <FaArrowLeft size={15} />
            <span>Voltar</span>
          </ButtonBack>

          <ButtonHideNavbar type="button" onClick={() => setShowNavbar(false)}>
            <CgMenuGridO size={25} color="#fff" />
            <strong>Esconder</strong>
          </ButtonHideNavbar>
        </Container>
      )}
    </>
  );
};

export default NavbarVertical;
