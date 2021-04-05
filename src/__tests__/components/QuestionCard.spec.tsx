import React from 'react';
import { render } from '@testing-library/react';
import { Wrapper, ButtonWrapper } from '../../components/QuestionCard.styles';

const questionNo = 1;
const totalQuestions = 10;
const answers = ['Tonga', 'Kiribati', 'Fiji', 'Palau'];
const question =
  'Which of the following Pacific Islander countries is ruled by a constitutional monarchy?';

const userAnswer = {
  answer: 'Tonga',
  correct: true,
  correctAnswer: 'Tonga',
  question:
    'Which of the following Pacific Islander countries is ruled by a constitutional monarchy?',
};

describe('<QuestionCard />', () => {
  it('renders the <QuestionCard /> with quetion and user answer', () => {
    const { getByText } = render(
      <Wrapper>
        <p className='number'>
          Question: {questionNo} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{ __html: question }}></p>
        {answers.map((answer) => (
          <ButtonWrapper
            key={answer}
            correct={userAnswer?.correctAnswer === answer}
            userClicked={userAnswer?.answer === answer}
          >
            <button disabled={userAnswer ? true : false} value={answer}>
              <span dangerouslySetInnerHTML={{ __html: answer }}></span>
            </button>
          </ButtonWrapper>
        ))}
      </Wrapper>
    );

    expect(getByText('Question: 1 / 10')).toBeTruthy();
    expect(
      getByText(
        'Which of the following Pacific Islander countries is ruled by a constitutional monarchy?'
      )
    ).toBeTruthy();
    expect(getByText('Tonga')).toBeTruthy();
    expect(getByText('Kiribati')).toBeTruthy();
    expect(getByText('Fiji')).toBeTruthy();
    expect(getByText('Palau')).toBeTruthy();
  });
});
