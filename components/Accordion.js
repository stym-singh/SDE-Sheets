import { Collapse, Text } from "@nextui-org/react";
import QuestionsList from "./QuestionsList";

const Accordion = ({ patterns, onStatusChange, onNotesChange }) => {
  return (
    <Collapse.Group
      accordion={false}
      aria-label="A simple collapse to view categories"
    >
      {patterns.map((pattern, patternIndex) => (
        <Collapse key={pattern.name} title={pattern.name}>
          <QuestionsList
            questions={pattern.questions}
            patternIndex={patternIndex}
            onStatusChange={onStatusChange}
            onNotesChange={onNotesChange}
          />
        </Collapse>
      ))}
    </Collapse.Group>
  );
};

export default Accordion;
