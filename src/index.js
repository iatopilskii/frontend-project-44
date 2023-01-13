import { question } from 'readline-sync';

import greeting from './helpers/greeting.js';
import getQuestionAndAnswerForEven from './questions/getQuestionAndAnswerForEven.js';
import getQuestionAndAnswerForCalc from './questions/getQuestionAndAnswerForCalc.js';
import getQuestionAndAnswerForGdc from './questions/getQuestionAndAnswerForGdc.js';
import getQuestionAndAnswerForProgression from './questions/getQuestionAndAnswerForProgression.js';
import getQuestionAndAnswerForPrime from './questions/getQuestionAndAnswerForPrime.js';

// Наименования типов игр
const DEFAULT_GAME_TYPE = 'default';
const EVEN_GAME_TYPE = 'even';
const CALC_GAME_TYPE = 'calc';
const GDC_GAME_TYPE = 'gdc';
const PROGRESSION_GAME_TYPE = 'progression';
const PRIME_GAME_TYPE = 'prime';

// Максимальное количество вопросов
const QUESTIONS_COUNT = 3;

// Функция для получения правил в зависимости от типа игры
const getGameRules = (gameType) => {
  switch (gameType) {
    case EVEN_GAME_TYPE:
      return 'Answer "yes" if the number is even, otherwise answer "no".';
    case CALC_GAME_TYPE:
      return 'What is the result of the expression?';
    case GDC_GAME_TYPE:
      return 'Find the greatest common divisor of given numbers.';
    case PROGRESSION_GAME_TYPE:
      return 'What number is missing in the progression?';
    case PRIME_GAME_TYPE:
      return 'What number is missing in the progression?';
    case DEFAULT_GAME_TYPE:
    default:
      return '';
  }
};

// Функция для генерации вопроса и ответа
// Возвращает массив, где arr[0] - вопрос, arr[1] - ответ
const getQuestionAndAnswer = (gameType) => {
  switch (gameType) {
    case EVEN_GAME_TYPE:
      return getQuestionAndAnswerForEven();
    case CALC_GAME_TYPE:
      return getQuestionAndAnswerForCalc();
    case GDC_GAME_TYPE:
      return getQuestionAndAnswerForGdc();
    case PROGRESSION_GAME_TYPE:
      return getQuestionAndAnswerForProgression();
    case PRIME_GAME_TYPE:
      return getQuestionAndAnswerForPrime();
    default:
      return undefined;
  }
};

// Функция для задавания одного вопроса пользователю
// Возвращает массив, где arr[0] - ответ пользователя, arr[1] - правильный ответ
const askingQuestion = (gameType) => {
  // Получение вопроса и правильного ответа
  const [stepQuestion, correctAnswer] = getQuestionAndAnswer(gameType);

  console.log(stepQuestion);

  // Получение ответа от пользователя
  let userAnswer = question('Your answer: ');

  if (!Number.isNaN(parseInt(userAnswer, 10))) {
    userAnswer = parseInt(userAnswer, 10);
  }

  return [userAnswer, correctAnswer];
};

// Функция, описывающая процесс игры
const gameProcess = (gameType, userName) => {
  // Количетсво правельных ответов
  let correctAnswersCount = 0;

  // true => игра продолжается, false => игра закончилась
  let isGameContinues = true;

  while (correctAnswersCount < QUESTIONS_COUNT && isGameContinues) {
    // Получение ответа пользователя и правильного ответа
    const [userAnswer, correctAnswer] = askingQuestion(gameType);

    // Проверка ответа пользователя
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      isGameContinues = false;
    }
  }

  return correctAnswersCount;
};

// Логика игры
const startGame = (gameType) => {
  const userName = greeting();

  // Прекращение игры при gameType === DEFAULT_GAME_TYPE
  if (gameType === DEFAULT_GAME_TYPE) {
    return undefined;
  }

  // Вывод правил игры
  console.log(getGameRules(gameType));

  // Задавание вопросов пользователю
  const correctAnswersCount = gameProcess(gameType, userName);

  // Проверка пройдена ли игра пользователем или нет
  if (correctAnswersCount === QUESTIONS_COUNT) {
    console.log(`Congratulations, ${userName}!`);
  }

  return undefined;
};

export default startGame;
