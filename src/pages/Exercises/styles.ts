import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  /* width: 100%; */
  background: #fff;
  border-radius: 10px;
  padding: 30px;
  width: 100%;
  min-height: 400px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumWidth}) {
    padding: 15px;
  }
`;

export const NavItem = styled.div`
  display: flex;
  align-items: flex-end;

  color: ${({ theme }) => theme.colors.gray};

  strong {
    font-weight: bold;
    margin-right: 10px;
  }

  & + div {
    margin-top: 5px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumWidth}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ButtonReload = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background: transparent;
  border: none;
  color: #fff;

  strong {
    font-weight: bold;
    margin-left: 5px;
  }

  &:hover {
    svg {
      transform: rotate(-360deg);
      transition: transform 1s;
    }
  }
`;
