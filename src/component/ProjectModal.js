import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function ProjectModal({ onClose, maskClosable, visible, children, width }) {
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
      <div
        className={` box-border ${
          visible ? "block" : "none"
        } fixed top-0 left-0 right-0 bottom-0 z-30 bg-black bg-opacity-60`}
        visible={visible}
      />
      <div
        className={`box-border ${
          visible ? "block" : "none"
        }  fixed  top-0 right-0 bottom-0 left-0 z-40 outline-none overflow-auto  max-h-full bg-white m-3`}
        onClick={maskClosable ? onMaskClick : null}
        tabIndex="-1"
      >
        {/* <div
          tabIndex="0"
          className="relative shadow-xl bg-white rounded-xl  overflow-hidden top-1/2 transform -translate-y-2/4 m-auto outline-none"
          style={{ width }}
        > */}
        {children}
        {/* </div> */}
      </div>
    </div>
  );
}

export default ProjectModal;
