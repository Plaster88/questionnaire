const initialState = {
  tests: [
    {
      id: 1,
      title: 'Personality test #1',
      questions: [
        {
          question: 'Am the life of the party',
          answers: [
            {
              id: 1,
              answer: 'I agree'
            },
            {
              id: 2,
              answer: 'I dissagree'
            }
          ]
        },
        {
          question: 'Am the life of the party',
          answers: [
            {
              id: 1,
              answer: 'I agree'
            },
            {
              id: 2,
              answer: 'I dissagree'
            }
          ]
        }
      ],

    },
    {
      id: 2,
      title: 'Personality test #2',
      questions: [
        {
          id: 1, 
          question: 'Have a vivid imagination',
          answers: [
            {
              id: 1,
              answer: 'I agree'
            },
            {
              id: 2,
              answer: 'I dissagree'
            }
          ]
        }
      ]
    },
    {
      id: 3,
      title: 'Personality test #3',
      questions: [
        {
          id: 1, 
          question: 'Like order',
          answers: [
            {
              answer: 'I agree'
            },
            {
              answer: 'I dissagree'
            }
          ]
        }
      ]
    },
    {
      id: 4,
      title: 'Personality test #4',
      questions: [
        {
          id: 1, 
          question: 'Am the life of the party',
          answers: [
            {
              id: 1,
              answer: 'I agree'
            },
            {
              id: 2,
              answer: 'I dissagree'
            }
          ]
        }
      ],

    },
    {
      id: 5,
      title: 'Personality test #5',
      questions: [
        {
          id: 1,
          question: 'Am the life of the party',
          answers: [
            {
              id: 1,
              answer: 'I agree'
            },
            {
              id: 2,
              answer: 'I dissagree'
            }
          ]
        }
      ],

    },
    {
      id: 6,
      title: 'Personality test #6',
      questions: [
        {
          id: 1, 
          question: 'Am the life of the party',
          answers: [
            {
              id: 1,
              answer: 'I agree'
            },
            {
              id: 2,
              answer: 'I dissagree'
            }
          ]
        }
      ],

    },
  ]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'START_TEST':
      return {
        ...state,
        chosenTest: action.test
      };
    case 'SEND_ANSWERS':
      return {
        ...state,
        answers: action.answers
      };
    default:
      return state;
  }
};

export default rootReducer;
