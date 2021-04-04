import React from 'react';
import { UserAnswer } from '../types/question';
interface Props {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: Partial<UserAnswer> | undefined;
  questionNo: number;
  totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNo,
  totalQuestions,
}) => (
  <>
    <p className='number'>
      Question: {questionNo} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }}></p>
    {answers.map((answer) => (
      <div key={answer}>
        <button
          disabled={userAnswer ? true : false}
          value={answer}
          onClick={callback}
        >
          <span dangerouslySetInnerHTML={{ __html: answer }}></span>
        </button>
      </div>
    ))}
  </>
);

export default QuestionCard;
