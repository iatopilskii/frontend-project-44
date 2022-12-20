#!/usr/bin/env node
import { question } from 'readline-sync';

import getUserName from '../src/cli.js';

const MAX_NUMBER = 100; // Максимальное число, которое может выпасть
const QUESTION_COUNT = 3; // Максимальное количество вопросов

// Начало игры
console.log('Welcome to the Brain Games!');
const userName = getUserName();
console.log(`Hello, ${userName}`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

// Логика с вопросами
let correctAnswersCount = 0;

while (correctAnswersCount <= QUESTION_COUNT) {
  // Выход из цикла при 3х правильных ответах
  if (correctAnswersCount === QUESTION_COUNT) {
    console.log(`Congratulations, ${userName}!`);
    break;
  }

  // Генерация числа для вопроса
  const questionNumber = Math.floor(Math.random() * MAX_NUMBER);

  // Формирование правильного ответа
  const correctAnswer = questionNumber % 2 === 0 ? 'yes' : 'no';

  console.log(`Question: ${questionNumber}`);

  // Получение ответа от пользователя
  const userAnswer = question('Your answer: ').trim();

  // Проверка ответа пользователя
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    correctAnswersCount += 1;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
    break;
  }
}
