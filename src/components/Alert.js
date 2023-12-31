import React from "react";

const Alert = (props) => {
  return (
   
        props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
        {props.alert.msg} : {props.alert.type}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    
  );
};

export default Alert;
