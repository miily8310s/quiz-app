import React from 'react';
import { UserAnswer } from '../types/question';
interface Props {
  question: string;
  answers: string[];
  callback: any;
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
      <div>
        <button disabled={userAnswer ? true : false} onClick={callback}>
          <span dangerouslySetInnerHTML={{ __html: answer }}></span>
        </button>
      </div>
    ))}
  </>
);

export default QuestionCard;
