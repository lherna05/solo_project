import React, { Component } from 'react';
import './../stylesheets/styles.css';

class AddLog extends Component {
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
                  checked={state.isChecked}
                  onChange={handleChange} />
              </label>
            </span>

              <label> Note:<input type="text" />
              </label>
  </form>
</div>
    </section>
  )
}
}
export default AddLog; 