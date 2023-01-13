import getRandomNumber from '../helpers/getRandomNumber.js';

const MAX_NUMBER = 100;

// Функция для генерации вопроса и ответа для игры типа PRIME_GAME_TYPE
// Возвращает массив, где arr[0] - вопрос, arr[1] - ответ
const getQuestionAndAnswerForPrime = () => {
  const questionNumber = getRandomNumber(MAX_NUMBER);

  const questionString = `Question: ${questionNumber}`;
  let answer = 'yes';

  for (let i = 2; i <= Math.sqrt(questionNumber); i += 1) {
    if (questionNumber % i === 0) {
      answer = 'no';
      break;
    }
  }

  return [questionString, answer];
};

export default getQuestionAndAnswerForPrime;
