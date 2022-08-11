import React, { Component } from 'react';
import './../stylesheets/styles.css';

class Single_Log extends Component {
  render() {
  const {id, title, resolved, note, updateLog, deleteLog} = props; 

  return (
      <section className="grid-container">
       <div className="item1" style="grid-item"> {id} </div>
       <div className="item2" style="grid-item"> {title}</div>
       <div className="item3" style="grid-item"> <button name={updateLog}>Update</button></div>
       <div className="item4" style="grid-item"> <button name={deleteLog}>Delete</button></div>
       <div className="item5" style="grid-item"> {resolved}</div>
       <div className="item6" style="grid-item"> {note}</div>
      </section>
    );
  }
}
export default Single_Log; 


// <section>
// <div>
//     <h3>SINGLE LOG TITLE</h3>
// </div>
// <table id="logTable" class='center'>
//   <tr>
//       <th>ID</th>
//       <th>Title</th>
//       <th>Resolved? </th>
//       <th>Description</th>
//   </tr>
//   <tr>
//       <td>{id}</td>
//       <td>{title}</td>
//       <td>{resolved}</td>
//       <td>{note}</td>
//   </tr>
// </table>
// </section>