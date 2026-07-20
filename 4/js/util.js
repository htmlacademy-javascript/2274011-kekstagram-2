const getRandomInteger = (a, b) => Math.floor(Math.random() * (Math.floor(Math.max(a, b)) - Math.ceil(Math.min(a, b)) + 1)) + Math.ceil(Math.min(a, b));
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

export {getRandomInteger, getRandomArrayElement};
