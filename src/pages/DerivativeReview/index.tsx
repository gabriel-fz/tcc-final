import React, { useState } from 'react';

import NavbarVertical from '../../components/NavbarVertical';
import ContainerDefault from '../../components/ContainerDefault';

import Slope from './screens/Slope';

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
  const contentData: ContentData[] = [
    {
      key: 'content1',
      element: <Slope />,
      isActive: true,
      title: 'Coeficiente angular',
    },
    {
      key: 'content2',
      element: 'teste',
      isActive: false,
      title: 'Coeficiente angular de reta tangente',
    },
  ];

  const [selectedContent, setSelectedContent] = useState<ContentData>(
    contentData[0],
  );

  function handleSelectContent(selected: ContentType): void {
    const newSelectedContent = contentData.find(item => item.key === selected);

    if (newSelectedContent) {
      setSelectedContent(newSelectedContent);
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
