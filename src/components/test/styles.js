import styled from 'styled-components';

export const TestBox = styled.div`
  display: inline-block;
  width: 200px;
  height: 200px;
  border: 1px solid #000;
  margin: 20px;
  box-sizing: border-box;
  vertical-align: top;

  button {
    color: #fff;
    background-color: #3f51b5;
    min-width: 100px;
  }

  button: hover {
    color: #fff;
    background-color: #303f9f;
  }
`;

export const Title = styled.div`
  display: block;
  padding: 15px 0 50px;
`;
