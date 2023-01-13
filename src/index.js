import { question } from 'readline-sync';

import greeting from './helpers/greeting.js';
import getQuestionAndAnswerForEven from './questions/getQuestionAndAnswerForEven.js';
import getQuestionAndAnswerForCalc from './questions/getQuestionAndAnswerForCalc.js';
import getQuestionAndAnswerForGdc from './questions/getQuestionAndAnswerForGdc.js';

// Наименования типов игр
const DEFAULT_GAME_TYPE = 'default';
const EVEN_GAME_TYPE = 'even';
const CALC_GAME_TYPE = 'calc';
const GDC_GAME_TYPE = 'gdc';

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
    default:
      return undefined;
  }
};

const askingQuestions = (gameType, userName) => {
  // Количетсво правельных ответов
  let correctAnswersCount = 0;

  // true => игра продолжается, false => игра закончилась
  let isGameContinues = true;

  while (correctAnswersCount < QUESTIONS_COUNT && isGameContinues) {
    // Получение вопросов и правильных ответов
    const questionAndAnswer = getQuestionAndAnswer(gameType);

    const stepQuestion = questionAndAnswer[0];
    const correctAnswer = questionAndAnswer[1];

    console.log(stepQuestion);

    // Получение ответа от пользователя
    let userAnswer = question('Your answer: ');

    if (gameType === CALC_GAME_TYPE || gameType === GDC_GAME_TYPE) {
      userAnswer = parseInt(userAnswer, 10);
    }

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
  const correctAnswersCount = askingQuestions(gameType, userName);

  // Проверка пройдена ли игра пользователем или нет
  if (correctAnswersCount === QUESTIONS_COUNT) {
    console.log(`Congratulations, ${userName}!`);
  }

  return undefined;
};

export default startGame;
