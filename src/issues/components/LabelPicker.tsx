import { LoadingIcons } from "../../shared/components/LoadingIcons";
import { useLabels } from "../hooks/useLabels";

export const LabelPicker = () => {
  const labelsQuery = useLabels();

  if (labelsQuery.isLoading) return <LoadingIcons />;

  return (
    <>
      {labelsQuery.data?.map((label) => (
        <span
          key={label.id}
          className="badge rounded-pill m-1 label-picker"
          style={{
            border: `1px solid #${label.color}`,
            color: `#${label.color} `,
          }}
        >
          {label.name}
        </span>
      ))}
    </>
  );
};
