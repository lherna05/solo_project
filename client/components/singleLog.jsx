import React, { Component } from 'react';
import './../stylesheets/styles.css';


class Single_Log extends Component {
  
  render() {
  // const {id, title, resolved, note, updateLog, deleteLog} = this.props; 
    console.log("PROPS.INFO ARE ",this.props.info.resolved)
  return (
    <div>
      <section className="grid-container">
       <div className="item1" > ID:{this.props.info.id} </div>
       <div className="item2" >  {this.props.info.title}</div>
       <div className="item3" > <button>Update</button></div>
       <div className="item4" > <button>Delete</button></div>
       <div className="item5" > Resolved? {`${this.props.info.resolved}`}</div>
       <div className="item6" > {this.props.info.note}</div>
       <div className="item7"></div>
      </section>
    </div>  
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