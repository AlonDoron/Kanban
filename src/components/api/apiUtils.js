let handleResponse = async (response) => {
  if (response.ok) return response.json();

  if (response.status === 400) {
    const error = await response.text();

    throw new Error(error);
  }

  throw new Error("Network response was not ok.");
};

let handleError = (error) => {
  console.error("API call failed. " + error);

  throw error;
};

export { handleResponse, handleError };
