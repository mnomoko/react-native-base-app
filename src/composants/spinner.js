import React, { Component } from 'react';
import {ActivityIndicator, View, StyleSheet} from "react-native";
import styles from "../styles";

export default class Spinner extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[styles.containerSpinner, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

}
