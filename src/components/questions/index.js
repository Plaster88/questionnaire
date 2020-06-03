import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { Button } from '@material-ui/core';
import { QuestionsContainer, Title, Form } from './styles';
import Question from './question';
import { sendAnswers } from '../../actions';

function Questions(props) {
  const [answers, setAnswers] = useState({});
  const [disabled, setDisabled] = useState(true);
  const history = useHistory();

  const submit = () => {
    props.dispatch(sendAnswers(answers));
    history.push(`/personality-test/${props.chosenTest.id}/feedback`);
  };

  const addAnswer = (question, answer) => {
    const arr = answers;
    arr[question] = answer;
    setAnswers(arr);
    if (Object.keys(answers).length === props.chosenTest.questions.length) {
      setDisabled(false);
    }
  };

  return (
    <QuestionsContainer>
      <Title>{props.chosenTest.title}</Title>
      <Button className="backBtn" onClick={() => history.goBack()}>Back</Button>
      <Form>
        {props.chosenTest.questions.map((question, index) => (
          <Question
            key={index}
            index={index}
            title={question.question}
            answers={question.answers}
            addAnswer={addAnswer}
          />
        ))}
      </Form>
      <Button disabled={disabled} onClick={submit}>Submit Answers</Button>
    </QuestionsContainer>
  );
}

const mapStateToProps = state => ({
  chosenTest: state.chosenTest
});

export default connect(
  mapStateToProps
)(Questions);
