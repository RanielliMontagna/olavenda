import { TextField } from '@mui/material';
import styled from '@emotion/styled';

//Login
export const DivLogin = styled.div`
  width: 50%;
  height: 100vh;
  background-color: ${({ theme }) => theme.palette.background.default};
  overflow: auto;

  ::-webkit-scrollbar {
    width: 0px;
  }

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 16px;

  > img {
    padding: 16px 0px 0px 0px;
  }

  @media (max-width: 950px) {
    width: 100%;
    overflow: auto;
  }

  @media (max-height: 600px) {
    justify-content: unset;
  }
`;

export const Field = styled(TextField)`
  width: 80%;

  @media (min-width: 1500px) {
    width: 60%;
  }
`;

export const ForgotPassword = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 80%;
  font-weight: 100;
  color: ${({ theme }) => theme.palette.grey[300]};
  font-size: ${({ theme }) => `${theme.typography.body1}`};
  cursor: pointer;

  @media (min-width: 1500px) {
    width: 60%;
  }
`;

export const ButtonEnter = styled.button`
  margin: 16px 0px;
  padding: 10px 0px;
  width: 80%;
  height: 44px;
  background-color: ${({ theme }) => theme?.palette.primary.main};
  border: none;
  border-radius: 4px;
  color: ${({ theme }) => theme.palette.common.white};
  font-size: ${({ theme }) => `${theme.typography.body1}`};
  font-weight: 500;
  cursor: pointer;
  transition: 0.5s;

  @media (min-width: 1500px) {
    width: 60%;
  }

  &:hover {
    background-color: ${({ theme }) => theme?.palette.primary.main}90;
  }
`;

//Layout
export const DivLayout = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme?.palette.primary.main};

  @media (max-width: 950px) {
    display: none;
  }

  h1 {
    color: ${({ theme }) => theme.palette.common.white};
    font-weight: 600;
    margin-bottom: 8px;
    margin-top: 32px;

    @media (max-height: 350px) {
      margin-top: 0px;
    }
  }

  h2 {
    color: ${({ theme }) => theme.palette.common.white};
    font-weight: 300;
    text-align: center;
    padding: 0px 10px;
    font-size: 20px;
  }
`;

export const DivIlustracao = styled.div`
  > img {
    width: 50vh;
  }

  @media (max-height: 350px) {
    display: none;
  }
`;

export const VoltarHome = styled.div`
  padding-bottom: 16px;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.grey[300]};
  &:hover {
    transition: 0.5s;
    color: ${({ theme }) => theme.palette.grey[700]};
  }
  @media (max-width: 576px) {
    cursor: none;
  }
`;
