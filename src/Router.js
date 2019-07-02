import React from 'react';
import {Scene,Router,Drawer,Actions} from 'react-native-router-flux';
import {Text} from 'react-native';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate'
import HomeScreen from './Home';

import SideBar from "./SideBar";
import ProfileScreen from './Profile'
const RouterComponents = () =>{
	return(
		<Router>
			<Scene key="root" hideNavBar>
				<Scene key="auth">
				
					<Scene key="login" component={LoginForm} title = "please Login"  />
				</Scene>
				<Scene key="main">
					<Scene 
					rightTitle="Add"
					onRight={()=>Actions.employeeCreate()}
					key="employeeList"
					 component={EmployeeList} 
					 title="EmployeeList" 
					 initial
					 />
				</Scene>
				<Scene key="employeeCreate" component={EmployeeCreate} title = "Create Employee"  />
			</Scene>
			
		</Router>


		)
}

export default RouterComponents;