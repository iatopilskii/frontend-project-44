import { question } from 'readline-sync';

// Функция для приветствия пользователя и получения имени
const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  return userName;
};

export default greeting;
