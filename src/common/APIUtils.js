const BASE_URL = "http://localhost:8080/api";

async function get(resource, handleSuccess, handleError, handleFinally) {
  try {
    const result = await fetch(`${BASE_URL}/${resource}`);
    const data = await result.json();
    return handleSuccess(data);
  } catch (e) {
    return handleError();
  } finally {
    return handleFinally();
  }
}

async function post(resource, body, handleSuccess, handleError) {
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    await fetch(`${BASE_URL}/${resource}`, requestOptions);
    return handleSuccess();
  } catch (e) {
    return handleError();
  }
}

export const APIUtils = {
  get,
  post,
};
