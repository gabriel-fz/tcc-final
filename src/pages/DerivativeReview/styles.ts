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

  &:hover {
    transform: translateX(10px);
    transition: transform 0.4s;
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

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: #fff;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.gray};
  }
`;
