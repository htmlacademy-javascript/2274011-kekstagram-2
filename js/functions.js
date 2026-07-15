// Функция 1: Проверка длины строки
const isStringWithinMaxLength = (string, maxLength) => string.length <= maxLength;

//Проверка
window.console.log('Проверка функции длины строки:');
window.console.log(isStringWithinMaxLength('проверяемая строка', 20));
window.console.log(isStringWithinMaxLength('проверяемая строка', 18));
window.console.log(isStringWithinMaxLength('проверяемая строка', 10));

// Функция 2: Проверка на палиндром
const isPalindrome = (string) => {
  const normalizedString = string.replaceAll(' ', '').toLowerCase();
  const reversedString = normalizedString.split('').reverse().join('');
  return normalizedString === reversedString;
};

//Проверка в консоли
window.console.log('Проверка функции палиндрома:');
window.console.log(isPalindrome('топот'));
window.console.log(isPalindrome('ДовОд'));
window.console.log(isPalindrome('Кекс'));
window.console.log(isPalindrome('Лёша на полке клопа нашёл '));

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
window.console.log('Проверка сколько чисел в строке:');
window.console.log(extractDigits('2023 год'));
window.console.log(extractDigits('ECMAScript 2022'));
window.console.log(extractDigits('1 кефир, 0.5 батона'));
window.console.log(extractDigits('агент 007'));
window.console.log(extractDigits('а я томат'));
