import { Badge, Link, Table } from "@nextui-org/react";
import Notes from "./Notes";
import QuestionStatus from "./QuestionStatus";

const QuestionsList = ({
  questions,
  patternIndex,
  onStatusChange,
  onNotesChange,
}) => {
  function colorDifficulty(difficulty) {
    if (difficulty === "easy") return "success";
    else if (difficulty === "medium") return "warning";
    else if (difficulty === "hard") return "error";
  }

  return (
    <Table lined headerLined shadow={false} aria-label="Questions list">
      <Table.Header>
        <Table.Column>Status</Table.Column>
        <Table.Column>Question</Table.Column>
        <Table.Column>Difficulty</Table.Column>
        <Table.Column>Notes</Table.Column>
      </Table.Header>
      <Table.Body>
        {questions.map((question, questionIndex) => {
          return (
            <Table.Row key={question.name}>
              <Table.Cell>
                <QuestionStatus
                  status={question.status}
                  patternIndex={patternIndex}
                  questionIndex={questionIndex}
                  onStatusChange={onStatusChange}
                />
              </Table.Cell>
              <Table.Cell>
                <Link
                  color="text"
                  isExternal
                  href={question.url}
                  underline
                  target="_blank"
                >
                  {question.name}
                </Link>
              </Table.Cell>
              <Table.Cell>
                <Badge color={colorDifficulty(question.difficulty)}>
                  {question.difficulty.toUpperCase()}
                </Badge>
              </Table.Cell>
              <Table.Cell>
                <Notes
                  questionName={question.name}
                  notes={question.notes}
                  patternIndex={patternIndex}
                  questionIndex={questionIndex}
                  onNotesChange={onNotesChange}
                />
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};

export default QuestionsList;
