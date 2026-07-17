// Функция 1: Проверка длины строки
const isStringWithinMaxLength = (string, maxLength) => string.length <= maxLength;

//Проверка
console.log('Проверка функции длины строки:');
console.log(isStringWithinMaxLength('проверяемая строка', 20));
console.log(isStringWithinMaxLength('проверяемая строка', 18));
console.log(isStringWithinMaxLength('проверяемая строка', 10));

// Функция 2: Проверка на палиндром
const isPalindrome = (string) => {
  const normalizedString = string.replaceAll(' ', '').toLowerCase();
  const reversedString = normalizedString.split('').reverse().join('');
  return normalizedString === reversedString;
};

//Проверка в консоли
console.log('Проверка функции палиндрома:');
console.log(isPalindrome('топот'));
console.log(isPalindrome('ДовОд'));
console.log(isPalindrome('Кекс'));
console.log(isPalindrome('Лёша на полке клопа нашёл '));

// Функция 3: Извлечение чисел из строки
function extractDigits(input) {
  const str = input.toString();
  let digits = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const num = parseInt(char, 10);

    if (!Number.isNaN(num)) {
      digits += char;
    }
  }

  return digits.length > 0 ? parseInt(digits, 10) : NaN;
}

//Провека в консоли
console.log('Проверка сколько чисел в строке:');
console.log(extractDigits('2023 год'));
console.log(extractDigits('ECMAScript 2022'));
console.log(extractDigits('1 кефир, 0.5 батона'));
console.log(extractDigits('агент 007'));
console.log(extractDigits('а я томат'));
