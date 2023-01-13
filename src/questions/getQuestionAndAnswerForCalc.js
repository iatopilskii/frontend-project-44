import getRandomNumber from '../helpers/getRandomNumber.js';
import getRandomOperation from '../helpers/getRandomOperation.js';

const MIN_NUMBER = 0;
const MAX_NUMBER = 20;

// Функция для генерации вопроса и ответа для игры типа CALC_GAME_TYPE
// Возвращает массив, где arr[0] - вопрос, arr[1] - ответ
const getQuestionAndAnswerForCalc = () => {
  const questionFirstNumber = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const questionSecondNumber = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const questionOperation = getRandomOperation();

  const questionString = `Question: ${questionFirstNumber} ${questionOperation} ${questionSecondNumber}`;

  let answer;
  switch (questionOperation) {
    case '+':
      answer = questionFirstNumber + questionSecondNumber;
      break;
    case '-':
      answer = questionFirstNumber - questionSecondNumber;
      break;
    case '*':
    default:
      answer = questionFirstNumber * questionSecondNumber;
  }

  return [questionString, answer];
};

export default getQuestionAndAnswerForCalc;
