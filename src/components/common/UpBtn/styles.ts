import styled from '@emotion/styled';

export const UpButtonContainer = styled.div`
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  cursor: pointer;
  width: 40px;
  height: 40px;
  background-color: #2e2e30;
  color: #f2f2f2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.4rem;
  transition: background-color 0.3s ease;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 99;
`;
