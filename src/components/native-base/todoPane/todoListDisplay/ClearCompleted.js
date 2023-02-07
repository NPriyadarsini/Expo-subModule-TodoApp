import { Button, Text } from 'native-base';
import { React } from 'react';
import TodoManager from '../../../../../MuiTodoApp/src/services/todoManager';

const ClearCompleted = (context) => {
	const { actions } = context;
	const hasCompletedTodo = TodoManager.hasCompletedTodo(context);

	return (
		<Button
			mt="2"
			colorScheme="primary"
			variant="solid"
			w="xs"
			isDisabled={ !hasCompletedTodo }
			onPress={ () =>	actions.getClearCompleted() }
		>
			<Text>Clear-Completed</Text>
		</Button>
	);
};

export default ClearCompleted;
