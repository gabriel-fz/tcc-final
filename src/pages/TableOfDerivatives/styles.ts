import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 70px 70px 70px;
  gap: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallHeight}) {
    grid-template-columns: 100%;
    grid-template-rows: repeat(5, 70px);
  }
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
  padding: 0 15px;
  border: 2px solid #fff;

  :hover {
    border: 2px solid ${({ theme }) => theme.colors.primary3};
  }

  img {
    width: 100%;
  }
`;

export const ButtonLinkAlternative = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  border-radius: 10px;
  font-weight: bold;
  font-size: 24px;
  text-decoration: none;
  background: ${({ theme }) => theme.colors.primary3};
  color: #fff;
  padding: 0 15px;
  border: 2px solid ${({ theme }) => theme.colors.primary3};
`;
