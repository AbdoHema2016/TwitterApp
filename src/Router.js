import React from 'react';
import {Scene,Router,Drawer} from 'react-native-router-flux';
import {Text} from 'react-native';
import LoginForm from './components/LoginForm';
import HomeScreen from './Home';

import SideBar from "./SideBar";
import ProfileScreen from './Profile'
const RouterComponents = () =>{
	return(
		<Router>
			<Scene key="root" hideNavBar>
				<Scene key="Auth">
					<Scene key="login" component = {LoginForm} title = "please Login" initial />
				</Scene>
				
				 <Drawer
                hideNavBar
                key="drawerMenu"
                contentComponent={SideBar}
                drawerWidth={250}
               
            >
                <Scene key="home" component = {HomeScreen} title = "Home"  />
                <Scene key="profile" component = {ProfileScreen} title = "profile"  />
                
               

            </Drawer>
				
			</Scene>
		</Router>


		)
}

export default RouterComponents;