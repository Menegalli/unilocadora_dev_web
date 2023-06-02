import axios from "axios";

const moviesApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  withCredentials: false,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS, PUT, DELETE",
    "Access-Control-Allow-Headers":
      "Origin,Content-Type,X-Requested-With,Accept,Authorization",
    accept: "application/json",
    "Content-type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjUzMjgxM2IyZDUwM2Q0ZDU2MjAwNmZjMWMzM2JmNiIsInN1YiI6IjY0NzlmZmE3ZTMyM2YzMDE0ODE1ZmFlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Fq0mEu3JWrVkQxKCkW0t2ICp6rhBYPe-0V2aluVHuBc",
  },
});

export default moviesApi;
