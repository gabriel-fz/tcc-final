import styled, { css } from 'styled-components';

interface EmblemProps {
  isActive: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    width: 100%;
    height: 100%;
    padding: 0 70px;

    & + div {
      margin-left: 15px;
    }
  }

  p {
    text-align: center;
  }
`;

export const Emblem = styled.div<EmblemProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 60px;
  width: 60px;
  border: 2px solid
    ${({ isActive, theme }) =>
      isActive ? theme.colors.primary3 : theme.colors.gray};
  border-radius: 6px;
  padding: 5px;
  position: relative;

  img {
    height: 100%;

    ${({ isActive }) =>
      !isActive &&
      css`
        filter: grayscale(100%);
        opacity: 60%;
      `};
  }

  > div {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s;
  }

  &:hover {
    transform: scale(1.1);
    transition: transform 0.4s;

    div {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const TooltipEmblem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 200px;
  background: #fff;
  padding: 10px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.4s;
  text-align: center;
  position: absolute;
  bottom: calc(100% + 12px);
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  color: #000;

  strong {
    font-weight: bold;
    margin-bottom: 5px;
  }

  &::before {
    content: '';
    border-style: solid;
    border-color: #fff transparent;
    border-width: 6px 6px 0 6px;
    top: 100%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;
