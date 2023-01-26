import { React } from 'react';
import { Button } from 'react-native-paper';
import TodoManager from '../../../../MuiTodoApp/src/services/todoManager';

const EditButton = (context) => {
	const { actions } = context;

	return (
		<Button
			role="editButton"
			disabled={ TodoManager.hasInput(context) }
			onClick={ () => actions.editTodo() }
		>
			EDIT</Button>
	);
};

export default EditButton;
