import React, { PureComponent } from 'react';
import Colors from './Colors';
import CreateColor from './CreateColor';

export default class ColorList extends PureComponent {
  state = {
    colors: []
  }

  addColor = color => {
    this.setState(state => {
      return {
        colors: [...state.colors, color]
      };
    });
  }

  render() {
    const colors = this.state;
    return (
      <>
        <CreateColor />
        <Colors colors={colors} />
      </>
    );
  }
}
