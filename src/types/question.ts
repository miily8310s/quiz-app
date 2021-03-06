export interface Question {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string;
  question: string;
  type: string;
}

export interface QuestionState extends Question {
  answers: string[];
}

export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

export interface UserAnswer {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}
