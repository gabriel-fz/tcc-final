import React, { useState } from 'react';

import NavbarVertical from '../../components/NavbarVertical';
import ContainerDefault from '../../components/ContainerDefault';

import Slope from './screens/Slope';
import AverageRate from './screens/AverageRate';

import { NavItem, Content } from './styles';

type ContentType = 'content1' | 'content2';

type ContentData = {
  key: ContentType;
  title: string;
  isActive: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  element: any;
};

const DerivativeReview: React.FC = () => {
  const [contentData, setContentData] = useState<ContentData[]>([
    {
      key: 'content1',
      element: <Slope />,
      isActive: true,
      title: 'Coeficiente angular',
    },
    {
      key: 'content2',
      element: <AverageRate />,
      isActive: false,
      title: 'Taxa variacional',
    },
  ]);
  const [selectedContent, setSelectedContent] = useState<ContentData>(
    contentData[0],
  );

  function handleSelectContent(selected: ContentType): void {
    const newSelectedContent = contentData.find(item => item.key === selected);

    if (newSelectedContent) {
      setSelectedContent(newSelectedContent);

      setContentData(state =>
        state.map(item => ({ ...item, isActive: selected === item.key })),
      );
    }
  }

  return (
    <ContainerDefault>
      <NavbarVertical title="Revisão de derivadas">
        {contentData.map(item => (
          <NavItem
            key={item.key}
            isActive={item.isActive}
            onClick={() => handleSelectContent(item.key)}
          >
            {item.title}
          </NavItem>
        ))}
      </NavbarVertical>

      <Content>{selectedContent.element}</Content>
    </ContainerDefault>
  );
};

export default DerivativeReview;
