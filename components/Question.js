import { Button, Checkbox, Link, Table } from "@nextui-org/react";
import React from "react";
import { PencilIcon } from "./Icons";

const Question = () => {
  return (
    <Table.Row key={question.name}>
      <Table.Cell>
        <Checkbox defaultSelected={question.status} />
      </Table.Cell>
      <Table.Cell>
        <Link color="text" href={question.url} underline target="_blank">
          {question.name}
        </Link>
      </Table.Cell>
      <Table.Cell>
        <Button
          auto
          color={colorDifficulty(question.difficulty)}
          rounded
          light
          bordered
          size="xs"
        >
          {question.difficulty.toUpperCase()}
        </Button>
      </Table.Cell>
      <Table.Cell>
        <Button auto light>
          <PencilIcon />
        </Button>
      </Table.Cell>
    </Table.Row>
  );
};

export default Question;
