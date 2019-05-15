import React, { PureComponent } from 'react';

export default class TextFormatter extends PureComponent {
  state = {
    text: '',
    color: 'black'
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const {
      text,
      color
    } = this.state;

    return (
      <>
      <form>
        <input name="text" value={text} onChange={this.handleChange} />
        <input name="color" type="color" value={color} onChange={this.handleChange} />
      </form>
      <pre style={{ color }}>{text}</pre>
      </>
    );
  }
}
