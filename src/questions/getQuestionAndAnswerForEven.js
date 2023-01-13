import getRandomNumber from '../helpers/getRandomNumber.js';

const MIN_NUMBER = 0;
const MAX_NUMBER = 1000;

// Функция для генерации вопроса и ответа для игры типа EVEN_GAME_TYPE
// Возвращает массив, где arr[0] - вопрос, arr[1] - ответ
const getQuestionAndAnswerForEven = () => {
  const questionNumber = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const questionString = `Question: ${questionNumber}`;
  const answer = questionNumber % 2 === 0 ? 'yes' : 'no';
  return [questionString, answer];
};

export default getQuestionAndAnswerForEven;
