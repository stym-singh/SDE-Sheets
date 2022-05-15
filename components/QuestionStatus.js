import { Checkbox } from "@nextui-org/react";
import { useState, useEffect } from "react";

const QuestionStatus = ({
  status,
  patternIndex,
  questionIndex,
  onStatusChange,
}) => {
  const [selected, setSelected] = useState(status);

  const handleChange = (changed) => {
    setSelected(changed);
  };

  useEffect(() => {
    onStatusChange(patternIndex, questionIndex, selected);
  }, [selected]);

  return (
    <Checkbox
      isSelected={selected}
      onChange={handleChange}
      aria-label="a checkbox"
    />
  );
};

export default QuestionStatus;
