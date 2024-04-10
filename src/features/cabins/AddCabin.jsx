import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "../cabins/CreateCabinForm";

/*
ref:
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

*/

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddCabin;
