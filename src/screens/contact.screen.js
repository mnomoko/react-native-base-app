import React, {Component} from 'react';
import {Linking, Text, View} from "react-native";
import {connect} from "react-redux";
import styles from "../styles";
import {Button, Icon, SocialIcon} from "react-native-elements";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {setModalStatus} from "../actions";
import ContactModal from "../composants/contact-modal";

class ContactScreen extends Component {

  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    this.props.setModalStatus(false);
  }

  openContactModal() {
    this.props.setModalStatus(true);
  }

  render() {
    return (
      <>
        <ContactModal/>
        <View style={styles.container}>
          <View style={{marginLeft: wp(3), width: wp(94), marginTop: hp(3)}}>
            <Text style={styles.mediumTitle}>Bonjour à tous.</Text>
            <Text style={styles.simpleText}>Sur cette page vous trouverez mes coordonnées ainsi que ma présence sur les réseaux.</Text>
            <Text style={styles.simpleText}>N'hésitez pas à me contacter si vous souhaitez : </Text>
            <View style={{marginLeft: wp(3)}}>
              <Text style={styles.simpleText}>{`\u2022 M'ajouter dans vos réseaux sociaux`}</Text>
              <Text style={styles.simpleText}>{`\u2022 Me remonter une anomalie`}</Text>
              <Text style={styles.simpleText}>{`\u2022 Me faire part de vos idées d'amélioration`}</Text>
            </View>
          </View>

          <View style={{flex: 3}}/>
          <View style={{marginBottom: hp(3)}}>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.mediumTitle}>Présence sur les réseaux</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Icon
                reverse
                reverseColor='black'
                name='ios-mail'
                type='ionicon'
                color='#fff'
                onPress={() => Linking.openURL('mailto:m.nomoko@live.fr')}
              />
              <SocialIcon
                light
                raised={true}
                type='linkedin'
                onPress={() => Linking.openURL('https://www.linkedin.com/in/mamadou-nomoko-2b849161/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B30BZU%2BTUSAeR4jGUNjnNxA%3D%3D')}
              />
              <SocialIcon
                title='Some Twitter Message'
                light
                raised={true}
                type='github'
                onPress={() => Linking.openURL('http://github.com/mnomoko')}
              />
              <SocialIcon
                light
                raised={true}
                type='stack-overflow'
                onPress={() => Linking.openURL('https://stackoverflow.com/users/5158173/uknowbigmams')}
              />
              <SocialIcon
                light
                raised={true}
                type='snapchat'
                onPress={() => Linking.openURL('http://www.snapchat.com/add/uknowbigmams')}
              />
            </View>
            </View>
        </View>
      </>
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

export default connect(mapStateToProps, mapDispatchToProps)(ContactScreen);
