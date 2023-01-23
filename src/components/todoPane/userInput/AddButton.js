import { React } from 'react';
import { Button } from 'react-native-paper';

const AddButton = (context) => 
		<Button flex={1}
			role="addButton"
			onPress={ () => context.actions.addTodo() }
		>
			Add
		</Button>

export default AddButton;
