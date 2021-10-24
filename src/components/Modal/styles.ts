import styled, { keyframes } from 'styled-components';

interface ContentProps {
  maxWidth: number;
}

const animateModal = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);

  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 10;
  overflow: auto;
  padding: 0 10px;
`;

export const Content = styled.div<ContentProps>`
  background: #fff;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  padding: 40px;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth}px;
  margin: 80px 20px;
  border-radius: 10px;

  animation: ${animateModal} 1s;
`;
