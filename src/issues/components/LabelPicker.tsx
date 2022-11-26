import { FC } from "react";
import { LoadingIcons } from "../../shared/components/LoadingIcons";
import { useLabels } from "../hooks/useLabels";

interface Props {
  selectLabels: string[];
  onChange: (labelName: string) => void;
}

export const LabelPicker: FC<Props> = ({ selectLabels, onChange }) => {
  const labelsQuery = useLabels();

  if (labelsQuery.isLoading) return <LoadingIcons />;

  return (
    <>
      {labelsQuery.data?.map((label) => (
        <span
          key={label.id}
          className={`badge rounded-pill m-1 label-picker ${
            selectLabels.includes(label.name) ? "label-active" : ""
          }`}
          style={{
            border: `1px solid #${label.color}`,
            color: `#${label.color} `,
          }}
          onClick={() => onChange(label.name)}
        >
          {label.name}
        </span>
      ))}
    </>
  );
};
