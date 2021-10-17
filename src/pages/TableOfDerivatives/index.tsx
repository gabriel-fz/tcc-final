import React from 'react';

import Img1 from '../../assets/derivada1.png';
import Img2 from '../../assets/derivada2.png';

import { Container, ButtonLink } from './styles';

const TableOfDerivatives: React.FC = () => {
  return (
    <Container>
      <ButtonLink color="play" to="/derivada-1">
        <img src={Img1} alt="formula de detivada" />
      </ButtonLink>

      <ButtonLink color="play" to="/derivada-2">
        <img src={Img2} alt="formula de detivada" />
      </ButtonLink>
    </Container>
  );
};

export default TableOfDerivatives;
