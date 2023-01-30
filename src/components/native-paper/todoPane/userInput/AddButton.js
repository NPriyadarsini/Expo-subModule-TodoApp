import { React } from 'react';
import { TextInput } from 'react-native-paper';

const AddButton = ({ actions }) =>
	<TextInput.Icon
		icon="plus"
		role="addButton"
		onPress={ () => actions.addTodo() }

	/>;

export default AddButton;
