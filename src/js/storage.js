/*const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
};

const load = (key) => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};

const clear = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Clear state error: ", error.message);
  }
};

const isKeyExists = (key) => {
  const value = localStorage.getItem(key);
  return value !== null && value !== undefined;
};

export default {
  save,
  load,
  clear,
  isKeyExists,
};*/

export const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    sessionStorage.setItem(key, serializedState);
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
};

export const load = (key) => {
  try {
    const serializedState = sessionStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};

export  const clear = (key) => {
  try {
    sessionStorage.removeItem(key);
  } catch (error) {
    console.error("Clear state error: ", error.message);
  }
};

export  const isKeyExists = (key) => {
  const value = sessionStorage.getItem(key);
  return value !== null && value !== undefined;
};

export default {
  save,
  load,
  clear,
  isKeyExists,
};