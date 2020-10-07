import React, { Component } from 'react';
import {TouchableHighlight} from "react-native";
import CachedImage from "./cached-image";

export class AvatarRound extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sizeLabel: props.size || 'medium',
      size: 80
    };
  }

  componentDidMount() {
    this.setSize();
  }

  render() {
    return (
      <TouchableHighlight style={this.getSizeContainer()}>
        <CachedImage source={{ uri: this.props.source.uri }} style={this.getSizeContainer()}/>
      </TouchableHighlight>
    )
  }

  setSizeContainer(size) {
    this.setState({ size });
  }

  getSizeContainer() {
    const { size } = this.state;
    return {
      height: size,
      width: size,
      borderRadius: size / 2
    }
  }

  setSize() {
    switch(this.state.sizeLabel) {
      case 'small': this.setSizeContainer(70); break;
      case 'medium': this.setSizeContainer(90); break;
      case 'large': this.setSizeContainer(130); break;
      case 'xlarge': this.setSizeContainer(170); break;
    }
  }
}
