import React, { Component } from "react";
import Spinner from "../composants/spinner";
import {setLoader} from "../actions";
import styles from "../styles";
import {Text, View} from "react-native";
import {connect} from "react-redux";
import {Button} from "react-native-elements";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";

class HomeScreen extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.setLoader(false);
    }, 2000);
  }

  render() {
    if(!this.props.isLoading) {
      return (
        <View style={styles.container}>
          <Text style={{width: wp(90), marginLeft: wp(5), marginTop: hp(3)}}>Open up App.js to start working on your app!</Text>
          <Button
            containerStyle={{width: wp(90), marginLeft: wp(5), marginTop: hp(3)}}
            buttonStyle={{backgroundColor: 'darkgray'}}
            onPress={() => this.goToContact()}
            title='Mes contacts'
          />
        </View>
      );
    }
    else return <Spinner/>
  }

  goToContact() {
    // TODO : This is how to define go to function
    this.props.navigation.navigate('Contact');
  }
}

const mapStateToProps = (store) => {
  return {
    isLoading: store.data.isLoading,
  }
};

const mapDispatchToProps = {
  setLoader
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
