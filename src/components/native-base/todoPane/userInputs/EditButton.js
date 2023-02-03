import { Button } from 'native-base';
import { React } from 'react';
import TodoManager from '../../../../../MuiTodoApp/src/services/todoManager';

const EditButton = (context) => {
	const { actions } = context;

	return (
		<Button
			bgColor="blue.500"
			disabled={ TodoManager.hasInput(context) }
			onPress={ () => actions.editTodo() }
		>
			EDIT
		</Button>
	);
};

export default EditButton;
