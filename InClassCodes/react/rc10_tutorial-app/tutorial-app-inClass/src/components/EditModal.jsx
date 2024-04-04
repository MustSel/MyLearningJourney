import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

function EditModal({ show, handleClose, editData, getTutorials }) {
  const [title, setTitle] = useState(editData.title);
  const [description, setDescription] = useState(editData.description);

  useEffect(() => {
    setTitle(editData.title);
    setDescription(editData.description);
  }, [editData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // //TODO post
    const newTutor = { title, description };
    putTutorial(editData.id, newTutor);
    handleClose();
    // setTitle("")
    // setDescription("")
  };

  const putTutorial = async (id, data) => {
    try {
      await axios.put(`${process.env.REACT_APP_URL}${id}/`, data);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Tutorial</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter your title"
                value={title || ""}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="desc" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="desc"
                placeholder="Enter your Description"
                value={description || ""}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-danger"
          >
            Submit
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditModal;
