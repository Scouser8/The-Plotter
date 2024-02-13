import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: "https://plotter-task-8019e13a60ac.herokuapp.com",
});

export default instance;
