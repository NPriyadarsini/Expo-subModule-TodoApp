import { React } from 'react';
import { Button } from 'react-native-paper';

const AddButton = ({ actions }) =>
	<Button
		flex={ 1 }
		role="addButton"
		onPress={ () => actions.addTodo() }
	>
		Add
	</Button>;

export default AddButton;
