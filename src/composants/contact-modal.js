import React, {Component} from 'react';
import {Modal, ScrollView, Text, View} from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import {Button} from "react-native-elements";
import {connect} from "react-redux";
import {setModalStatus} from "../actions";
import styles from "../styles";

class ContactModal extends Component {

  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    this.onExit();
  }

  onExit = () => {
    this.props.setModalStatus(false);
  };

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.contactModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScrollView style={{width: wp(90)}} showsVerticalScrollIndicator={true}>
              <Text style={{
                textAlign: "left",
                width: wp(88),
                fontSize: hp(2.5),
                paddingLeft: wp(7),
                marginBottom: hp(.5),
                fontWeight: 'bold'}}
              >Envoyer un mail à: m.nomoko@live.fr</Text>
            </ScrollView>

            <View style={{flexDirection: 'row'}}>
              <Button
                containerStyle={{marginTop: hp(1)}}
                buttonStyle={{backgroundColor: 'darkgray'}}
                style={{ ...styles.openButtonSecondary }}
                onPress={() => this.props.setModalStatus(false)}
                titleStyle={styles.textStyleSecondary}
                title='Fermer'
              >
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    );
  }

}

const mapStateToProps = (store) => {
  return {
    contactModal: store.data.isContactModalOpen
  }
};

const mapDispatchToProps = {
  setModalStatus
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactModal);
