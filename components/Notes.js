import { PencilIcon } from "./Icons";
import { Modal, Button, Text, Textarea } from "@nextui-org/react";
import { useState, useRef } from "react";

const Notes = ({
  questionName,
  notes,
  patternIndex,
  questionIndex,
  onNotesChange,
}) => {
  const [visible, setVisible] = useState(false);

  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
  };

  const textareaRef = useRef(null);
  const onClick = () => {
    if (textareaRef.current) {
      onNotesChange(patternIndex, questionIndex, textareaRef.current.value);
    }
  };

  return (
    <>
      <Button auto light onClick={handler}>
        <PencilIcon />
      </Button>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
        width="50%"
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            {questionName} Notes
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Textarea
            rows={15}
            bordered
            size="xl"
            initialValue={notes}
            ref={textareaRef}
            aria-label="A textbox to take notes"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto color="error" flat onClick={closeHandler}>
            Close
          </Button>
          <Button auto color="success" flat onClick={onClick}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Notes;
