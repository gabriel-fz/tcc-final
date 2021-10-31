import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 250px;
  margin-right: 20px;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumWidth}) {
    background: ${({ theme }) => theme.colors.primary3};
    height: 100%;
    border-radius: 0 10px 10px 0;
    max-width: 200px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme.colors.primary3};
  border-radius: 10px;
  padding: 20px;

  h3 {
    color: #fff;
    text-align: center;
  }

  hr {
    color: #fff;
    margin: 10px 0 20px;
  }
`;

export const ButtonBack = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 50px;
  width: 100%;
  background: ${({ theme }) => theme.colors.primary3};
  border-radius: 10px;
  border: none;
  margin-top: 20px;
  color: #fff;

  span {
    font-weight: bold;
    margin-left: 10px;
  }
`;

export const ShowNavbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 60px;
  margin-right: 20px;
  background: ${({ theme }) => theme.colors.primary3};
  height: 100%;
  border-radius: 0 10px 10px 0;

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 40px;
    width: 40px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary4};
    border: none;
  }
`;

export const ButtonHideNavbar = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 40px;
  border-radius: 50px;
  background: ${({ theme }) => theme.colors.primary4};
  border: none;
  margin: auto 15px 30px;

  strong {
    color: #fff;
    margin-left: 10px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.mediumWidth}) {
    display: none;
  }
`;
