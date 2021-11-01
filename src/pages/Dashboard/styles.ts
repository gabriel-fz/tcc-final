import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 0 0 20px;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 30px;

  height: 100%;
  width: 100%;
  max-height: 600px;
  max-width: 600px;
`;

export const ButtonLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  border-radius: 10px;

  text-decoration: none;
  background: #fff;
  color: ${({ theme }) => theme.colors.primary3};

  :hover {
    border: 2px solid ${({ theme }) => theme.colors.primary3};
  }

  img {
    height: 130px;
  }

  strong {
    font-size: 24px;
    font-weight: bold;
    margin-top: 20px;
  }
`;
