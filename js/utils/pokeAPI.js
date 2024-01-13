//! use async function in order to have synchronous code 
export const fetchAPI = async (url) => {
  try {
  const response = await fetch(url);

  if (!response.ok) {
    //* throw error in case of bad response
    throw new Error(`${response.statusText} (${response.status})`);
  }

  const data = await response.json();
  return data;
  } catch (error) { 
    console.error(error);
  }
}