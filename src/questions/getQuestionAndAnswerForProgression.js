import getRandomNumber from '../helpers/getRandomNumber.js';

const MAX_PROGRESSION_LENGTH = 10;
const MIN_PROGRESSION_LENGTH = 5;
const MIN_NUMBER = 1;
const MAX_NUMBER = 10;

// Функция для генерации вопроса и ответа для игры типа PROGRESSION_GAME_TYPE
// Возвращает массив, где arr[0] - вопрос, arr[1] - ответ
const getQuestionAndAnswerForProgression = () => {
  const progressionLength = getRandomNumber(MIN_PROGRESSION_LENGTH, MAX_PROGRESSION_LENGTH);
  const progressionStart = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const progressionDifference = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  const progression = [progressionStart];

  for (let i = 1; i <= progressionLength; i += 1) {
    progression.push(progressionStart + progressionDifference * i);
  }

  const hiddenElementIndex = getRandomNumber(0, MAX_PROGRESSION_LENGTH - 1);

  let questionString = 'Question: ';
  const answer = progression[hiddenElementIndex];

  for (let i = 0; i < progression.length; i += 1) {
    if (i === hiddenElementIndex) {
      questionString = `${questionString} ..`;
    } else {
      questionString = `${questionString} ${progression[i]}`;
    }
  }

  return [questionString, answer];
};

export default getQuestionAndAnswerForProgression;
