import { useInfiniteQuery } from "@tanstack/react-query";
import { githubApi } from "../../api/githuApi";
import { sleep } from "../../helpers";
import { Issue, State } from "../interfaces";

interface Props {
  state?: State;
  labels: string[];
  page?: number;
}

interface queryProps {
  pageParam?: number;
  queryKey: (string | Props)[];
}

const getIssues = async ({
  queryKey,
  pageParam = 1,
}: queryProps): Promise<Issue[]> => {
  const [, , args] = queryKey;
  const { state, labels } = args as Props;

  // await sleep(2);

  const params = new URLSearchParams();

  if (state) params.append("state", state);

  if (labels.length > 0) {
    const labelString = labels.join(",");
    params.append("labels", labelString);
  }

  params.append("page", pageParam.toString());
  params.append("per_page", "2");

  const { data } = await githubApi.get<Issue[]>("/issues", { params });

  return data;
};

export const useIssuesInifite = ({ labels, state }: Props) => {
  const issuesQuery = useInfiniteQuery(
    ["issues", "infinite", { state, labels }],
    (data) => getIssues(data),
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.length === 0) return;

        return pages.length + 1;
      },
    }
  );

  return { issuesQuery };
};
