import React from 'react';

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  handleAdd = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.name);
  }

  render() {
    return (
      <form>
        <input
          type="text"
          name="name"
          value={ this.state.name }
          onChange={ (e) => this.setState({ name: e.target.value }) }
        >
        </input>
        <button onClick={ this.handleAdd }>Add</button>
      </form>
    );
  }
}

export default Add;
