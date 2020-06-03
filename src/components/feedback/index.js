import React from 'react';
import { connect } from 'react-redux';
import { Container, Title } from './styles';

function Feedback(props) {
  return (
    <>
      <Title>{props.title} Feedback</Title>
      <Container>Good job!!!</Container>
    </>
  );
}

const mapStateToProps = state => ({
  title: state.chosenTest.title
});

export default connect(
  mapStateToProps
)(Feedback);
