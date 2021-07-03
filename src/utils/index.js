const errorResponse = (response) => {
  return response.some((item) => item.Response === 'False');
};

export default {
  errorResponse,
};
