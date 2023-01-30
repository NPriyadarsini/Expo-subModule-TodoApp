import { React } from 'react';
import { TextInput } from 'react-native-paper';
import TodoManager from '../../../../../MuiTodoApp/src/services/todoManager';

const EditButton = (context) => {
	const { actions } = context;

	return (
		<TextInput.Icon
			icon="pencil"
			role="editButton"
			disabled={ TodoManager.hasInput(context) }
			onPress={ () => actions.editTodo() }
		/>
	);
};

export default EditButton;
