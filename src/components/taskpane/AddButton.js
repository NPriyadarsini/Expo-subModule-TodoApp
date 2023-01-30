import { Button } from 'react-native-paper';
import { React } from 'react';

const AddButton = (context) => {
	const { actions, data } = context;

	return (
		<Button
			icon="plus"
			onPress={ () => actions.addTaskToTodo(data) }
		/>
	);
};

export default AddButton;