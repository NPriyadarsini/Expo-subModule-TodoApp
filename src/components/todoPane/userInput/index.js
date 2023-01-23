import { React } from 'react';
import { Surface } from 'react-native-paper';
import Input from './Input.js';


const UserInputs = (context) =>
	<Surface>
			<Input { ...context }/>
	</Surface>

export default UserInputs;
