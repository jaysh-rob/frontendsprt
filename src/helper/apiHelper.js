// apiHelper.js

const BASE_URL = 'http://asg2-1-1327704856.eu-west-1.elb.amazonaws.com';

async function callApi(endpoint, method = 'GET', data = null) {
  const requestOptions = {
    method,
    headers: {
      'Content-Type': 'application/json',
      // Add any other headers you need, such as authorization tokens
    },
  };

  if (data) {
    requestOptions.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, requestOptions);
    if (!response.ok) {
      // handle non-successful responses here, throw an error or handle as needed
      throw new Error('Failed to fetch data');
    }
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    // handle network errors or other issues
    console.error('Error fetching data:', error);
    throw error;
  }
}

async function get(endpoint) {
  try {
    const responseData = await callApi(endpoint, 'GET');
    return responseData;
  } catch (error) {
    throw error;
  }
}

async function post(endpoint, data) {
  try {
    const responseData = await callApi(endpoint, 'POST', data);
    return responseData;
  } catch (error) {
    return error;
  }
}

export {  get, post };
