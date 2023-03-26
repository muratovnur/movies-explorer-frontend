import { MOVIES_API_URL } from "./constants";

export default function moviesApi() {
  return fetch(`${MOVIES_API_URL}`)
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
}