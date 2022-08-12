import React, { Component } from 'react';
import './../stylesheets/styles.css';

class AddLog extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isChecked: false,
        }
      }

  render() {
  return (
    <section>
      <div>
        <h3>Log a New Bug</h3>
        <form>
            <span>
              <label> Title: <input type="text" />
              </label>
            </span>
            <span>
              <label> Resolved? <input           
                  type="checkbox"
                  name="isChecked"
                  checked={this.state.isChecked}
                   />
              </label>
            </span>

              <label> Note:<input type="text" />
              </label>
              <span>
              <button>Submit</button>
              </span>
  </form>
</div>
    </section>
  )
}
}
export default AddLog; 