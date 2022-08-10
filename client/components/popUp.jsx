import React from "react";

const popUp = props => {
    return(
        <div className='popup-box'>
            <div className='box'></div>
            <button className='btn-close' onClick={props.handleClose}>X</button>
            {props.content}
        </div>
    )
}

{/* <popUp
handleClose = { () => { }}
content={<div>
  <h3>Log a New Bug</h3>
  <form>
    <label> 
      Title:
      <input type="text" />
    </label>
    <label> 
      Resolved?
      <input           
        type="checkbox"
        name="isChecked"
        checked={state.isChecked}
        onChange={handleChange} />
    </label>
    <label> 
      Description:
      <input type="text" />
    </label>
  </form>
</div>
}/> */}


export default popUp; 