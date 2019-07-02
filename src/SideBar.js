import React from "react"
import {
  View,
  StyleSheet,
  Text,TouchableOpacity,
  StatusBar
} from "react-native"
import {Actions} from 'react-native-router-flux';





class SideBar extends React.Component {

  constructor(props) {
        super(props)
       
        
    }
  


  


 render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>Actions.profile()}><Text>Press</Text></TouchableOpacity>
                <Text>menu items go here</Text>
                <Text>menu items go here</Text>
                <Text>menu items go here</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 10,
        paddingTop:50,
    },

});



export default SideBar;