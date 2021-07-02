import instance from '@/services/axios';

const getFilm = (url) => {
  return instance.get(url).then((response) => response.data);
};

export default {
  getFilm,
};
