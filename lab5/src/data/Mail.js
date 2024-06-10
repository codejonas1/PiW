import React, { useRef } from "react";
import Modal from "react-modal";
import { toast } from "react-toastify";
import { auth } from "./init";

Modal.setAppElement("#root");

export function MailModal({ modalIsOpen, setModalIsOpen }) {
  const mailContentRef = useRef();
  const mailToRef = useRef();

  const handleMail = () => {
    if (!auth.currentUser) {
      toast.error("You need to login to send mail");
      setModalIsOpen(false);
    } else {
        console.log("ok");
      const mailContent = mailContentRef.current.value;
      const mailTo = mailToRef.current.value;
      setModalIsOpen(false);
      toast.success(`Wysłano ${mailTo}`);
    }
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
    >
      <form>
        <div className="close-btn">
            <button className="button" onClick={() => setModalIsOpen(false)}>X</button>
        </div>
        <p className="title-large">Contact</p>
        <p>You're contacting the hotel</p>

        <label>
          To
          <input type="text" required ref={mailToRef} />
        </label>

        <textarea required ref={mailContentRef}></textarea>
        <div className="dialog-footer-buttons">
            <button className="button" type="reset">Clear</button>
            <button className="button primary" type="submit" onClick={handleMail}>Send</button>
        </div>
    </form>
   
    </Modal>
  );
}