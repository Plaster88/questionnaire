import styled from 'styled-components';

export const QuestionsContainer = styled.div`
  display: block;
  text-align: center;
  position: relative;

  button {
    color: #fff;
    background-color: #3f51b5;
    min-width: 100px;
    margin-top: 30px;
  }

  button: hover {
    color: #fff;
    background-color: #303f9f;
  }

  fieldset {
    display: inline-block;
    margin: 0 50px;
  }

  button.backBtn {
    position: absolute;
    left: 0;
    top: 10px;
    margin-top: 0;
    color: #000;
    background: transparent;
  }
`;

export const Title = styled.div`
  display: block;
  padding: 20px 0 30px 0;
  font-size: 25px;
`;

export const Form = styled.div`
  display: block;
`;

export const Question = styled.div`
  display: block;
`;
