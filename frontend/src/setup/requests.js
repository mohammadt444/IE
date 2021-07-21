import { create } from "axios";

const server = "http://localhost:4000";

export const { post, get, put } = create({
  baseURL: server,
});
