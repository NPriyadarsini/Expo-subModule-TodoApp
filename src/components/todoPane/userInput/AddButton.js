import { React } from 'react';
import { IconButton } from 'react-native-paper';

const AddButton = ({ actions }) =>
	<IconButton
		icon="plus"
		role="addButton"
		onPress={ () => actions.addTodo() }

	/>;

export default AddButton;
