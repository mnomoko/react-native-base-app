import {StyleSheet} from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: hp(1)
  },
  containerSpinner: {
    flex: 3,
    alignItems: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
  viewTitle: {
    marginTop: hp(1),
    alignItems: 'center'
  },
  title: {
    fontSize: hp(7)
  },
  subtitle: {
    fontSize: hp(3),
    marginTop: hp(1)
  },
  viewItem: {
    height: hp(7),
    backgroundColor: 'lightgray',
    width: wp(99),
    alignSelf: 'center',
    flexDirection: 'row',
    margin: hp(1),
    borderWidth: hp(.3),
    borderRadius: hp(2),
  },
  playerName: {
    width: wp(33),
    alignItems: 'center',
    justifyContent: 'center',
  },
  playerWord: {
    width: wp(66),
    alignItems: 'center',
    justifyContent: 'center',
  },
  writedWord: {
    width: wp(66),
    alignItems: 'center',
    justifyContent: 'center',
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: wp(90),
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    borderRadius: 20,
    elevation: 2
  },
  openButtonSecondary: {
    borderRadius: 20,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  textStyleSecondary: {
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  mediumTitle: {
    alignSelf: 'center',
    marginTop: hp(2),
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  simpleText: {
    marginTop: hp(1),
    fontSize: 18,
    fontWeight: '200',
  }
});

export default styles;
