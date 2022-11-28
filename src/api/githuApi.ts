import axios from "axios";

export const githubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: {
    Authorization:
      "Bearer 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",
  },
});
