import axios from "axios";

export const githubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: {
    Authorization:
      "Bearer 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",
  },
});
