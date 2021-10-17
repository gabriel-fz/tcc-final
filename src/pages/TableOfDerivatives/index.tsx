import React from 'react';

import Img1 from '../../assets/derivada1.png';
import Img2 from '../../assets/derivada2.png';

import NavbarVertical from '../../components/NavbarVertical';
import ContainerDefault from '../../components/ContainerDefault';

import { Content, ButtonLink } from './styles';

const TableOfDerivatives: React.FC = () => {
  return (
    <ContainerDefault>
      <NavbarVertical title="Teste" />

      <Content>
        <ButtonLink color="play" to="/derivada-1">
          <img src={Img1} alt="formula de detivada" />
        </ButtonLink>

        <ButtonLink color="play" to="/derivada-2">
          <img src={Img2} alt="formula de detivada" />
        </ButtonLink>
      </Content>
    </ContainerDefault>
  );
};

export default TableOfDerivatives;
