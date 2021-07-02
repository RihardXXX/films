const checkResponse = (response) => {
  const flag = true;
  response.foreach((item) => {
    if (item.Response === 'False') {
    }
  });
};

export default {
  checkResponse,
};
