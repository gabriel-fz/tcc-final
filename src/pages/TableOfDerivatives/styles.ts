import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 70px 70px;
  gap: 30px;
`;

export const ButtonLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  border-radius: 10px;
  font-weight: bold;
  font-size: 24px;
  text-decoration: none;
  background: #fff;
  color: ${({ theme }) => theme.colors.primary3};

  :hover {
    border: 2px solid ${({ theme }) => theme.colors.primary3};
  }

  img {
    height: 50px;
  }
`;
