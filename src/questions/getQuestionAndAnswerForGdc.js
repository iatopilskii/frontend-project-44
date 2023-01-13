import getRandomNumber from '../helpers/getRandomNumber.js';

const MIN_NUMBER = 0;
const MAX_NUMBER = 50;

// Функция для генерации вопроса и ответа для игры типа GDC_GAME_TYPE
// Возвращает массив, где arr[0] - вопрос, arr[1] - ответ
const getQuestionAndAnswerForGdc = () => {
  const questionFirstNumber = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const questionSecondNumber = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const questionString = `Question: ${questionFirstNumber} ${questionSecondNumber}`;

  let a = questionFirstNumber;
  let b = questionSecondNumber;

  while (b) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  const answer = a;

  return [questionString, answer];
};

export default getQuestionAndAnswerForGdc;
