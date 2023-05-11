import { Fragment } from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";

const StyledOverlay = styled.div`
  position: fixed;
  width: 70%;
  height: 30em;
  box-sizing: border-box;
  top: 20%;
  left: 15%;
  display: flex;
  justify-content: center;
  z-index: 20;
`;
const StyledBackdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 19;
`;

function Overlay({ children }) {
  return (
    <StyledOverlay>
      <div>{children}</div>
    </StyledOverlay>
  );
}

function Backdrop({ closeModalHandle }) {
  return (
    <StyledBackdrop
      onClick={() => {
        closeModalHandle();
      }}
    />
  );
}

export default function Modal({ children, isOpen, closeModalHandle }) {
  if (isOpen) {
    const portalElement = document.getElementById("modal-root");
    return (
      <Fragment>
        {ReactDOM.createPortal(
          <Overlay type="menuModal">{children}</Overlay>,
          portalElement
        )}
        {ReactDOM.createPortal(
          <Backdrop closeModalHandle={closeModalHandle} />,
          portalElement
        )}
      </Fragment>
    );
  } else {
    return null;
  }
}
