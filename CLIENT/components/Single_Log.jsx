import React from 'react';

const Single_Log = ({
    //add parameters
}) => {

  return (
      <section>
          <div>
              <h3>SINGLE LOG TITLE</h3>
          </div>
          <table id="logTable" class='center'>
            <tr>
                <th>Date</th>
                <th>Title</th>
                <th>Resolved? </th>
                <th>Description</th>
            </tr>
            <tr>
                <td>8/9/2022</td>
                <td>Webpack Warning</td>
                <td>No</td>
                <td>Webpack failed to load properly. Received error message that webpack-cli needed to be installed.</td>
            </tr>
          </table>
      </section>
  );
};

export default Single_Log; 