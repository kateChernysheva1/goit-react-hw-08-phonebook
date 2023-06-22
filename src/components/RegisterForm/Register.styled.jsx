import styled from '@emotion/styled';

export const Form = styled.form`
  background-color: #ceecfb;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #7171ab;
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 900px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 16px;

  input {
    padding: 8px 12px;
    border: 1px solid #a033ad;
    border-radius: 15px;
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
