import axios from "axios";

export const githubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: {
    Authorization:
      "Bearer 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",
  },
});
