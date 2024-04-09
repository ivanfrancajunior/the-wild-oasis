import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import { useState } from "react";
import CreateCabinForm from "../cabins/CreateCabinForm";

const AddCabin = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <>
      <Button
        variation="primary"
        size="medium"
        onClick={() => setIsOpenModal((show) => !show)}
      >
        Add new cabins
      </Button>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal((open) => !open)}>
          <CreateCabinForm onCloseModal={() => setIsOpenModal((open) => !open)} />
        </Modal>
      )}
    </>
  );
};

export default AddCabin;
