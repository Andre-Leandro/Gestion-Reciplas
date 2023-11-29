export const API_URL = process.env.REACT_APP_API_BASE_URL

// baseServices

async function fetchData(url, options = {}) {
  const token = await localStorage.getItem("token");
  options.headers = {
    ...options.headers,
    Authorization: token ? `Bearer ${token}` : "",
  };

  const response = await fetch(`${API_URL}${url}`, options);
  
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Error de red');
  }
  return response.json();
}

export function get(url) {
  return fetchData(url);
}

export function post(url, data) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  return fetchData(url, options);
}

export function put(url, data) {
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  return fetchData(url, options);
}

export function del(url) {
  const options = {
    method: 'DELETE',
  };
  return fetchData(url, options);
}