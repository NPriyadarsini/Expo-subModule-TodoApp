import { React } from 'react';
import { View } from 'react-native';
import FilterBar from './FilterBar.js';
import Input from './Input.js';

const UserInputs = (context) =>
	<View>
		<Input { ...context }/>
		<FilterBar { ...context }/>
	</View>;

export default UserInputs;
