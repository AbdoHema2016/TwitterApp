import React, { Component } from "react";
import {Picker} from 'react-native'
import{connect} from 'react-redux';
import	{ employeeUpdate} from '../actions';
import { CardSection,Input,Button,Card } from './common';


class EmployeeCreate extends React.Component {
	render(){
		return(

			<Card>
				<CardSection>
					<Input
						label="name"
						placeholder="Abdo"
						value={this.props.name}
						onChangeText={text=>this.props.employeeUpdate({prop:'name',value:text})}

					 />
				</CardSection>
				
				<CardSection style={{flexDirection:'column'}}>
					<Input 
						label="phone"
						placeholder="3123412"
						value={this.props.phone}
						onChangeText = {text=>this.props.employeeUpdate({prop:'phone',value:text})}
					/>
				</CardSection>
				<CardSection>
					<Text style={styles.pickerTextStyle}>Shift</Text>
					<Picker
					style={{flex:1}}
						selectedValue={this.props.shift}
						onValueChange={day=>this.props.employeeUpdate({prop:'shift',value:day})}
					>
						<Picker.Item label="Mon" value="Mon"/>
						<Picker.Item label="Tue" value="Tue"/>
						<Picker.Item label="Wed" value="Wed"/>
						<Picker.Item label="Thurs" value="Thurs"/>
						<Picker.Item label="Fri" value="Fri"/>
						<Picker.Item label="Sat" value="Sat"/>
						<Picker.Item label="Sun" value="Sun"/>
						
					</Picker>
				</CardSection>
				<CardSection>
					<Button>
						Create
					</Button>
				</CardSection>
			</Card>
			)
	}
}

const styles = {
	pickerTextStyle:{
		fontSize:18,
		paddingLeft:20
	}
}
const mapStateToProps =(state)=>{
	const {name,phone,shift} = state.employeeForm;
	return {name,phone,shift};
}
export default connect(mapStateToProps,{employeeUpdate})(EmployeeCreate);