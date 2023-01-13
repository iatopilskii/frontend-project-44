// Функция для генерации случайного числа в промежутке от min до max
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export default getRandomNumber;
