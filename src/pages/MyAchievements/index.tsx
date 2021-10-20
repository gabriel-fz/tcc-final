import React from 'react';

import NavbarVertical from '../../components/NavbarVertical';
import ContainerDefault from '../../components/ContainerDefault';
import Card from '../../components/Card';

import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';

import { Content } from './styles';

const MyAchievements: React.FC = () => {
  return (
    <ContainerDefault>
      <NavbarVertical title="Conquistas" />

      <Content>
        <Card grid="card1" title="Nível">
          <Card1 />
        </Card>

        <Card grid="card2" title="Frequência de estudos">
          <Card2 />
        </Card>

        <Card grid="card3" title="Emblemas">
          <Card3 />
        </Card>
      </Content>
    </ContainerDefault>
  );
};

export default MyAchievements;
