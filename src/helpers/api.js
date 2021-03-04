const axios = require("axios");

const handleApiError = (error) => {
  const errorMessage = error.error || error;

  return {
    ok: false,
    result: null,
    error: new Error(errorMessage).message,
  };
};

const handleApiSuccess = (result) => ({
  ok: true,
  result,
  error: null,
});

async function makeApiCall(
  method,
  url,
  data,
  params,
  headers = {},
  callBack = null
) {
  try {
    const { data: response, error } = await axios({
      method,
      url,
      data,
      params,
      headers,
    });

    if (error) {
      return handleApiError(error);
    }

    if (callBack) {
      callBack(response);
    }

    return handleApiSuccess(response.data || response);
  } catch (error) {
    return handleApiError(error);
  }
}

module.exports = {
  makeApiCall,
};
