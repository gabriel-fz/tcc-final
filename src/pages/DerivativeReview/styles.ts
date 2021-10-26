import styled from 'styled-components';

interface NavItemProps {
  isActive: boolean;
}

export const NavItem = styled.button<NavItemProps>`
  color: ${({ isActive, theme }) => (isActive ? '#fff' : theme.colors.gray)};
  background: transparent;
  border: none;
  text-align: left;

  & + button {
    margin-top: 10px;
  }
`;

export const Content = styled.div`
  display: flex;

  background: #fff;
  border-radius: 10px;
  padding: 30px;
  width: 100%;
  height: 100%;
  min-height: 400px;
  overflow-y: auto;
`;
