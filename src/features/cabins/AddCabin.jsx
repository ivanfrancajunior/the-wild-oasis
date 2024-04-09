import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "../cabins/CreateCabinForm";
import CabinTable from "../cabins/CabinTable";

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
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add new cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>
      <Modal.Open opens="table">
        <Button>Show Table</Button>
      </Modal.Open>
      <Modal.Window name="table">
        <CabinTable />
      </Modal.Window>
    </Modal>
  );
}

export default AddCabin;
