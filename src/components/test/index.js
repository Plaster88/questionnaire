import React from 'react';
import { useHistory } from "react-router-dom";
import { TestBox, Title } from './styles';
import { Button } from '@material-ui/core';
import { chooseQuestion } from '../../actions';
import { connect } from 'react-redux';

function Test(props) {
  const history = useHistory();

  const startQuestionnaire = () => {
    props.dispatch(chooseQuestion(props.data));
    history.push(`/personality-test/${props.data.id}`);
  };

  return (
    <TestBox>
      <Title>{props.data.title}</Title>
      <Button onClick={startQuestionnaire}>Start</Button>
    </TestBox>
  );
}

export default connect()(Test);
