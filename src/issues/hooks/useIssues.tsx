import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../../api/githuApi";
import { sleep } from "../../helpers/sleep";
import { Issue } from "../interfaces";

const getIssues = async (): Promise<Issue[]> => {
  await sleep(2);
  const { data } = await githubApi.get<Issue[]>("/issues");

  return data;
};

export const useIssues = () => {
  const issuesQuery = useQuery(["issues"], getIssues);

  return { issuesQuery };
};
