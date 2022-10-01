import styled from '@emotion/styled';

export const PrivateWrapperContainer = styled.div`
  flex: 1;

  background-color: ${({ theme }) => theme.palette.background.default};
  transition: background-color 0.3s ease-in-out;
`;
