const NAMES = ['Павел', 'Анастасия', 'Григорий', 'Вера', 'Надежда', 'Евгений', 'Юрий', 'Роман'];
const MESSAGES = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const DESCRIPTIONS = ['Закат на море', 'Городской пейзаж', 'Портрет друга', 'Осенний парк', 'Ночная улица', 'Утренний кофе', 'Путешествие в горы', 'Цветущий сад'];
const PHOTO_COUNT = 25;
const AVATAR_COUNT = 6;

const getRandomInteger = (a, b) => Math.floor(Math.random() * (Math.floor(Math.max(a, b)) - Math.ceil(Math.min(a, b)) + 1)) + Math.ceil(Math.min(a, b));
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createComment = (id) => ({
  id,
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES)
});

const createPhoto = (unused, index) => {
  const photoId = index + 1;
  const commentCount = getRandomInteger(0, 30);
  const comments = Array.from({length: commentCount}, (_, i) => createComment(photoId * 100 + i));

  return {
    id: photoId,
    url: `photos/${photoId}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(15, 200),
    comments
  };
};

const photos = Array.from({length: PHOTO_COUNT}, createPhoto);

window.console.log(photos);
