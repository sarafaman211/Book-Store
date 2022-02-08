import React from 'react';

const Alert = (props) => {

  return (
      props.alert && <div style={{ marginTop: 10, fontSize: 15 }}>
          <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
 <strong style={{ fontSize: 15 }}>{ props.alert.type }</strong> : { props.alert.msg } 
</div>
      </div>
  );
};

export default Alert;
