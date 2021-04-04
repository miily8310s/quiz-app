import React from 'react';
interface Props {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
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
        <button disabled={userAnswer} onClick={callback}>
          <span dangerouslySetInnerHTML={{ __html: answer }}></span>
        </button>
      </div>
    ))}
  </>
);

export default QuestionCard;
