import { question } from 'readline-sync';

// Наименования типов игр
const DEFAULT_GAME_TYPE = 'default';
const EVEN_GAME_TYPE = 'even';
const CALC_GAME_TYPE = 'calc';

// Обозначения для операций
const PLUS = 1;
const MINUS = 2;
const MULTIPLY = 3;
const OPERATIONS_COUNT = 3; // Количество операций

// Константы для игры
const MAX_NUMBER = 25; // Максимальное число, которое может выпасть
const QUESTIONS_COUNT = 3; // Максимальное количество вопросов

// Функция для получения правил в зависимости от типа игры
const getGameRules = (gameType) => {
  switch (gameType) {
    case EVEN_GAME_TYPE:
      return 'Answer "yes" if the number is even, otherwise answer "no".';
    case CALC_GAME_TYPE:
      return 'What is the result of the expression?';
    case DEFAULT_GAME_TYPE:
    default:
      return '';
  }
};

// Функция для генерации случайного числа в промежутке от 0 до maxNumber
const getRandomNumber = (maxNumber) => Math.floor(Math.random() * maxNumber) + 1;

// Функция для выбора операции для игры типа CALC_GAME_TYPE
const getRandomOperation = () => {
  const operationID = getRandomNumber(OPERATIONS_COUNT);

  switch (operationID) {
    case PLUS:
      return '+';
    case MINUS:
      return '-';
    case MULTIPLY:
    default:
      return '*';
  }
};

// Функция для генерации вопроса и ответа
// Возвращает массив, где arr[0] - вопрос, arr[1] - ответ
const getQuestionAndAnswer = (gameType) => {
  switch (gameType) {
    case EVEN_GAME_TYPE: {
      const questionNumber = getRandomNumber(MAX_NUMBER);
      const questionString = `Question: ${questionNumber}`;
      const answer = questionNumber % 2 === 0 ? 'yes' : 'no';
      return [questionString, answer];
    }
    case CALC_GAME_TYPE: {
      const questionFirstNumber = getRandomNumber(MAX_NUMBER);
      const questionSecondNumber = getRandomNumber(MAX_NUMBER);
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
    }
    default:
      return undefined;
  }
};

const startGame = (gameType) => {
  console.log('Welcome to the Brain Games!');
  const userName = question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(getGameRules(gameType));

  let correctAnswersCount = 0;

  while (correctAnswersCount <= QUESTIONS_COUNT) {
    if (correctAnswersCount === QUESTIONS_COUNT) {
      console.log(`Congratulations, ${userName}!`);
      break;
    }

    const questionAndAnswer = getQuestionAndAnswer(gameType);

    const stepQuestion = questionAndAnswer[0];
    const correctAnswer = questionAndAnswer[1];

    console.log(stepQuestion);

    let userAnswer = question('Your answer: ');

    if (gameType === CALC_GAME_TYPE) {
      userAnswer = parseInt(userAnswer, 10);
    }

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
};

export default startGame;
