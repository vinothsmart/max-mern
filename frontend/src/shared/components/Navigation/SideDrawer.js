import React from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

import "./SideDrawer.css";

const SideDrawer = ({ show, handleClose, children }) => {
  const content = (
    <CSSTransition
      in={show}
      timeout={2000}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className="side-drawer" onClick={handleClose}>
        {children}
      </aside>
    </CSSTransition>
  );
  return createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawer;
