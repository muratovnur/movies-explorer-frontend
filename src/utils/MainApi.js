import { MAIN_API_URL, MOVIES_API_BASEURL } from "./constants";
class MainApi {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    // return res.json().then(res => Promise.reject(res))
    return Promise.reject(res);
  }

  getMovies() {
    return fetch(`${this.baseUrl}/movies`, {
      credentials: "include",
    })
    .then(res => this._handleResponse(res))
  }

  saveMovie(movie) {
    return fetch(`${this.baseUrl}/movies`, {
      credentials: "include",
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `${MOVIES_API_BASEURL}${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail:`${MOVIES_API_BASEURL}${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      })
    })
    //.then(res => this._handleResponse(res))
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return res.json().then(res => Promise.reject(res))
    })
  }

  deleteMovie(movieId) {
    return fetch(`${this.baseUrl}/movies/${movieId}`, {
      credentials: "include",
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
      },
    })
    //.then(res => this._handleResponse(res))
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return res.json().then(res => Promise.reject(res))
    })
  }

  register(email, password, name) {
    return fetch(`${this.baseUrl}/signup`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, name })
    })
    .then(res => this._handleResponse(res))
  }

  login(email, password) {
    return fetch(`${this.baseUrl}/signin`, {
      method: 'POST',
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password })
    })
    .then(res => this._handleResponse(res))
  }

  signout() {
    return fetch(`${this.baseUrl}/signout`, {
      credentials: "include",
    })
    .then(res => this._handleResponse(res))
  }

  updateUserProfileInfo(name, email) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email })
    })
    .then(res => this._handleResponse(res))
  }

  getUserProfileInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(res => this._handleResponse(res))
  }
}

const mainApi = new MainApi(MAIN_API_URL);

export default mainApi;