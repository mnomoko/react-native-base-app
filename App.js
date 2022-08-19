import React, {Component} from 'react';
import {StatusBar, Text, View} from "react-native";
import * as SplashScreen from 'expo-splash-screen';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  useDrawerStatus
} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "./src/screens/home.screen";
import {Provider} from "react-redux";
import store from './src/store';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import {Button} from "react-native-elements";
import ContactScreen from "./src/screens/contact.screen";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from "react-native-reanimated";
import {AvatarRound} from "./src/composants/avatar-round";
import {UPDATE_LOADING_VIEW} from "./src/actions/action-type";
import useUpdateEffect from "./src/utils";
import * as Font from 'expo-font';

const APP_TITLE = "Example";

SplashScreen.preventAutoHideAsync()
  .then(result => console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`))
  .catch(console.warn); // it's good to explicitly catch and inspect any error

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    }
  }

  fetchFonts = async () => await Font.loadAsync({
    'EvilIcons': require('./node_modules/react-native-vector-icons/Fonts/EvilIcons.ttf'),
    'FontAwesome': require('./node_modules/react-native-vector-icons/Fonts/FontAwesome.ttf'),
    'Ionicons': require('./node_modules/react-native-vector-icons/Fonts/Ionicons.ttf'),
  });

  componentDidMount() {
    setTimeout(async () => {
      store.dispatch({type: UPDATE_LOADING_VIEW, payload: false});
      await this.fetchFonts();
      await SplashScreen.hideAsync();
    }, 2000);
  }

  render() {
    return (
      <Provider store={store}>
        <StatusBar backgroundColor="black" barStyle='default'/>
        <CustomDrawer/>
      </Provider>
    );
  }
}

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function HomeStack({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home_Home"
        component={HomeScreen}
        options={{
          title: 'Accueil',
          headerRight: () => headerBtnExample(),
          headerLeft: () => (
            <MenuButton navigation={navigation}/>
          ),
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
}

function NotificationStack({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Contact_Home"
        component={ContactScreen}
        options={{
          title: 'Mes Contacts',
          headerRight: () => headerBtnExample(),
          headerLeft: () => (
            <MenuButton navigation={navigation}/>
          ),
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
}

// TODO : Add more stack screen

function MenuButton(props) {
  const navigation = props.navigation;
  return (
    <Button
      type='clear'
      icon={{
        name: "navicon",
        type: "evilicon",
        color: "white"
      }}
      onPress={() => navigation.openDrawer()}
    />
  )
}

function CustomDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          activeBackgroundColor: 'darkgrey',
          activeTintColor: 'white',
          labelStyle: {
            fontSize: 18,
            fontWeight: 'bold',
          }
        }}
        drawerContent={(props) => <CustomDrawerContent {...props}/>}
      >
        <Drawer.Screen name="Home" component={HomeStack}/>
        <Drawer.Screen name="Contact" title="Mes contacts" component={NotificationStack}/>
        {/* TODO : Add new screens here */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function CustomDrawerContent(props) {
  const isDrawerOpen = useDrawerStatus();
  const sv = useSharedValue(0);
  useUpdateEffect(() => {
    sv.value = isDrawerOpen === 'open' ? withTiming(1) : withTiming(0);
  }, [isDrawerOpen]);

  const screenStyle = useAnimatedStyle(() => {
    const scaleY = interpolate(sv.value, [0, 0.5, 1], [1, 0.9, 0.8], {
      extrapolateRight: Extrapolate.CLAMP,
    });
    const borderRadius = interpolate(sv.value, [0, 1], [1, 20], {
      extrapolateRight: Extrapolate.CLAMP,
    });
    return {
      transform: [{ scaleY }],
      borderRadius
    };
  });

  return (
    <DrawerContentScrollView {...props}>
      <View style={{flex: 1, alignItems: 'center', marginTop: hp(3), marginBottom: hp(3)}}>
        <AvatarRound source={{uri: 'https://picsum.photos/id/536/200/200.jpg'}} size='large'/>
        <Text style={{fontSize: 26, fontWeight: '700', marginTop: hp(3)}}>{APP_TITLE}</Text>
      </View>
      <Animated.View style={[screenStyle]}>
        <DrawerItemList {...props} />
      </Animated.View>
    </DrawerContentScrollView>
  );
}

const headerBtnExample = () => {
  const example = () => {
    alert("Example..");
  }

  return (
    <Button
      containerStyle={{marginTop: hp(.2), paddingBottom: hp(.2), marginRight: wp(4)}}
      onPress={example} type="clear"
      buttonStyle={{borderColor: 'black'}}
      icon={{
        name: "info",
        type: "font-awesome",
        color: "black"
      }}
    />
  );
}
