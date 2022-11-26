import { useState } from "react";
import { LoadingIcons } from "../../shared/components/LoadingIcons";
import { IssueList } from "../components/IssueList";
import { LabelPicker } from "../components/LabelPicker";
import { useIssues } from "../hooks";

export const ListView = () => {
  const [selectLabels, setSelectLabels] = useState<string[]>([]);
  const { issuesQuery } = useIssues();

  const onchangeLabel = (labelName: string) => {
    selectLabels.includes(labelName)
      ? setSelectLabels(selectLabels.filter((label) => label !== labelName))
      : setSelectLabels([...selectLabels, labelName]);
  };

  return (
    <div className="row mt-5">
      <div className="col-8">
        {issuesQuery.isLoading ? (
          <LoadingIcons />
        ) : (
          <IssueList issues={issuesQuery.data || []} />
        )}
      </div>

      <div className="col-4">
        <LabelPicker
          selectLabels={selectLabels}
          onChange={(labelName) => onchangeLabel(labelName)}
        />
      </div>
    </div>
  );
};
