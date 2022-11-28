import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../../api/githuApi";
import { sleep } from "../../helpers/sleep";
import { Issue, State } from "../interfaces";

interface Props {
  state?: State;
  labels: string[];
}

const getIssues = async (labels: string[], state?: State): Promise<Issue[]> => {
  await sleep(2);
  const params = new URLSearchParams();
  if (state) params.append("state", state);

  const { data } = await githubApi.get<Issue[]>("/issues", { params });

  return data;
};

export const useIssues = ({ labels, state }: Props) => {
  const issuesQuery = useQuery(["issues", { state, labels }], () =>
    getIssues(labels, state)
  );

  return { issuesQuery };
};
