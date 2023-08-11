import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Backdrop from "./Modal/Backdrop";
import Modal from './Modal/Modal';

const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm}></Backdrop>,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Modal title={props.title} message={props.message} onConfirm={props.onConfirm}/>,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default ErrorModal;
