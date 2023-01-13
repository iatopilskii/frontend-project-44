import getRandomNumber from './getRandomNumber.js';

// Обозначения для операций
const PLUS = 1;
const MINUS = 2;
const MULTIPLY = 3;
const OPERATIONS_COUNT = 3; // Количество операций

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

export default getRandomOperation;
