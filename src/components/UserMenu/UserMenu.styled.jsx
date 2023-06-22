import styled from '@emotion/styled';

export const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;

  p {
    font-weight: 400;
    font-size: 16px;
    color: #570966;
  }

  button {
    min-height: 30px;
    background-color: #ff8f8f;
    text-transform: uppercase;
    border-radius: 10px;
    border: 1px solid #851111;
    cursor: pointer;
    padding: 10px 16px;
  }
`;
