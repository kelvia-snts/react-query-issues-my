import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../../api/githuApi";
import { sleep } from "../../helpers/sleep";
import { Label } from "../interfaces/label";

const getLabels = async (): Promise<Label[]> => {
  await sleep(2);
  const { data } = await githubApi.get<Label[]>("/labels");

  return data;
};

export const useLabels = () => {
  const LabelsQuery = useQuery(["labels"], getLabels, {
    staleTime: 1000 * 60 * 60, // 1 hour - stale(0)
  });

  return LabelsQuery;
};
