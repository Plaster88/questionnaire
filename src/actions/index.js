export const chooseQuestion = test => ({
  type: 'START_TEST',
  test
});

export const sendAnswers = answers => ({
  type: 'SEND_ANSWERS',
  answers
});
