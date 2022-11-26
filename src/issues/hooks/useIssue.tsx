import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../../api/githuApi";
import { sleep } from "../../helpers/sleep";
import { Issue } from "../interfaces";

const getIssueInfo = async (issueNumber: number): Promise<Issue> => {
  await sleep(2);
  const { data } = await githubApi(`issues/${issueNumber}`);

  return data;
};

export const useIssue = (issueNumber: number) => {
  const issueQuery = useQuery(["issue", issueNumber], () =>
    getIssueInfo(issueNumber)
  );
};
