import React from 'react'

const ToastMsg = ({message , success = true} : {message : string , success:boolean}) => {
  return (
    <div className="toast toast-top toast-end">
  { success === true ? <>
    <div className="alert alert-success">
    <span>{message}</span>
  </div>
  </> :
  <>
  <div className="alert alert-error">
    <span>{message}</span>
  </div>
  </>
  }
</div>
  )
}

export default ToastMsg