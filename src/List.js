import React from 'react';

class List extends React.Component {
  render() {
    return (
      <table className="myClass">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.data.map((item, index) => (
              <tr key={index}>
                <td>
                  {item}
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    )
  }
}

export default List;
