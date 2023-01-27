import { React } from 'react';
import { IconButton } from 'react-native-paper';
import TodoManager from '../../../../MuiTodoApp/src/services/todoManager';

const EditButton = (context) => {
	const { actions } = context;

	return (
		<IconButton
			icon="pencil"
			role="editButton"
			disabled={ TodoManager.hasInput(context) }
			onClick={ () => actions.editTodo() }
		/>
	);
};

export default EditButton;
