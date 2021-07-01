import instance from '@/services/axios';

const getFilm = (url) => {
  return instance.get(url);
};

export default {
  getFilm,
};
