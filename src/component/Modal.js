import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function Modal({ onClose, maskClosable, visible, children, width }) {
  const onMaskClick = e => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  React.useEffect(() => {
    document.body.style.cssText = ` top:0px; width:'100%'`;
    document.body.style.overflow = "hidden";
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = `position: ""; top: "";`;
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
      document.body.style.overflow = "unset";
    };
  }, []);
  return (
    <div>
      <ModalOverlay visible={visible} />
      <ModalWrapper
        className=""
        onClick={maskClosable ? onMaskClick : null}
        tabIndex="-1"
        visible={visible}
      >
        <div
          tabIndex="0"
          className="relative shadow-xl bg-white rounded-xl  overflow-hidden top-1/2 transform -translate-y-2/4 m-auto outline-none"
          style={{ width }}
        >
          {children}
        </div>
      </ModalWrapper>
    </div>
  );
}

const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${props => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${props => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

export default Modal;
