import React from 'react';

import Img1 from '../../assets/derivada1.png';
import Img2 from '../../assets/derivada2.png';
import Img3 from '../../assets/derivada3.png';
import Img4 from '../../assets/derivada4.png';

import NavbarVertical from '../../components/NavbarVertical';
import ContainerDefault from '../../components/ContainerDefault';

import { Content, ButtonLink, ButtonLinkAlternative } from './styles';

const TableOfDerivatives: React.FC = () => {
  return (
    <ContainerDefault>
      <NavbarVertical title="Tabela de derivadas" />

      <Content>
        <ButtonLink to="/derivada-1">
          <img src={Img1} alt="formula de detivada" />
        </ButtonLink>

        <ButtonLink to="/derivada-2">
          <img src={Img2} alt="formula de detivada" />
        </ButtonLink>

        <ButtonLink to="/derivada-3">
          <img src={Img3} alt="formula de detivada" />
        </ButtonLink>

        <ButtonLink to="/derivada-4">
          <img src={Img4} alt="formula de detivada" />
        </ButtonLink>

        <ButtonLinkAlternative to="/derivada-teste">
          Teste gráfico
        </ButtonLinkAlternative>
      </Content>
    </ContainerDefault>
  );
};

export default TableOfDerivatives;
