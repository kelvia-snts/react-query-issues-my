import axios from "axios";

export const githubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: {
    Authorization:
      "Bearer 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",
  },
});
