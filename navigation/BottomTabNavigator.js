import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image
} from "react-native";

import firebase from "firebase";


export default BottomTabNavigator extends Component{
    constructor(props) 
        super(props);
        this.state = {
          light_theme: true
        };
}
