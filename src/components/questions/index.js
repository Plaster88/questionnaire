import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { Button } from '@material-ui/core';
import { QuestionsContainer, Title, Form } from './styles';
import Question from './question';
import { sendAnswers } from '../../actions';

function Questions(props) {
  const answers = [];
  const history = useHistory();

  const submit = () => {
    props.dispatch(sendAnswers(answers));
    history.push(`/personality-test/${props.chosenTest.id}/feedback`);
  };

  return (
    <QuestionsContainer>
      <Title>{props.chosenTest.title}</Title>
      <Button className="backBtn" onClick={() => history.goBack()}>Back</Button>
      <Form>
        {props.chosenTest.questions.map((question, index) => (
          <Question key={question.id} index={index} title={question.question} answers={question.answers} />
        ))}
      </Form>
      <Button onClick={submit}>Submit Answers</Button>
    </QuestionsContainer>
  );
}

const mapStateToProps = state => ({
  chosenTest: state.chosenTest
});

export default connect(
  mapStateToProps
)(Questions);
