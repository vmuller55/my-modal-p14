import React from 'react';
const Modal = ({
  modalStyle,
  headerStyle,
  contentStyle,
  footerStyle,
  header,
  content,
  footer
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "modal",
    style: modalStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-header",
    style: headerStyle
  }, header), /*#__PURE__*/React.createElement("div", {
    className: "modal-content",
    style: contentStyle
  }, content), /*#__PURE__*/React.createElement("div", {
    className: "modal-footer",
    style: footerStyle
  }, footer));
};
export default Modal;