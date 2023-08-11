import React from 'react'
/**
 * 
 * @param {Style} modalStyle take style in prop to change style of modal
 * @param {Style} headerStyle take style in prop to change style of header
 * @param {Style} contentStyle take style in prop to change style of content
 * @param {Style} footerStyle take style in prop to change style of footer
 * @param {any} Header take any data to set header content
 * @param {any} content take any data to set body content
 * @param {any} footer take any data to set footer content
 * @returns JSX elements to display a modal 
 */
const Modal = ({  modalStyle, headerStyle, contentStyle, footerStyle, header, content, footer }) => {
    return (
          <div className="modal" style={modalStyle}>
              <div className="modal-header" style={headerStyle}>
                  {header}
              </div>
              <div className="modal-content" style={contentStyle}>
                  {content}
              </div>
              <div className="modal-footer" style={footerStyle}>
                  {footer}
              </div>
          </div>
    );
  };
  
  export default Modal;