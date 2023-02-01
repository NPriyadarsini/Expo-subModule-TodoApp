import { Button } from 'native-base';
import { React } from 'react';

const AddButton = ({ actions }) =>
	<Button
		bgColor="blue.500"
		onPress={ () => actions.addTodo() }
	>
		Save
	</Button>;

export default AddButton;
