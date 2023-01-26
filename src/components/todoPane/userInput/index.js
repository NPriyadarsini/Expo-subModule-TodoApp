import { React } from 'react';
import { Surface } from 'react-native-paper';
import ActionButton from './ActionButton.js';
import Input from './Input.js';

const UserInputs = (context) =>
	<Surface style={ { height: 100 } }>
		<Input { ...context }/>
		<ActionButton { ...context }/>
	</Surface>;

export default UserInputs;
