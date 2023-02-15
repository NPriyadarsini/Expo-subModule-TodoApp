import { React } from 'react';
import { Button } from 'react-native-paper';
import TodoManager from '../../../../../MuiTodoApp/src/services/todoManager';

const ClearCompleted = (context) => {
	const { actions } = context;
	const hasCompletedTodo = TodoManager.hasCompletedTodo(context);

	return (
		<Button
			style={ { marginTop: 8 } }
			role="clearCompleted"
			mode="contained"
			color="inherit"
			size="small"
			disabled={ !hasCompletedTodo }
			onPress={ () =>	actions.getClearCompleted() }
		>Clear Completed
		</Button>
	);
};

export default ClearCompleted;
