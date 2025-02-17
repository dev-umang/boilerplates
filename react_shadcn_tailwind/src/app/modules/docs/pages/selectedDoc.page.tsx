import { FC } from "react";
import { useParams } from "react-router-dom";

const SelectedDoc: FC = () => {
  const { projectId, docId } = useParams();

  return (
    <div className="">
      {projectId} === {docId}
    </div>
  );
};

export default SelectedDoc;
