import React from 'react';
import Test from './test';
import { connect } from 'react-redux';
import { Title, TestsContainer } from './styles';

function App(props) {
  return (
    <div className="App">
      <Title>Questionnaire</Title>
      <TestsContainer>
        {props.tests.map(test => (
          <Test key={test.id} data={test} />
        ))}
      </TestsContainer>
    </div>
  );
};

const mapStateToProps = state => ({
  tests: state.tests
});

export default connect(
  mapStateToProps
)(App);
