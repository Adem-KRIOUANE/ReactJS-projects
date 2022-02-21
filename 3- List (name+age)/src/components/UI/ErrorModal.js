import React from "react";
import ReactDOM from "react-dom";

import Card from "./Card";
import Button from "./Button/Button";
import Styles from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={Styles.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={Styles.modal}>
      <header className={Styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={Styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={Styles.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
