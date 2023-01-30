import { React } from 'react';
import { Checkbox } from 'react-native-paper';

const TodoCheckBox = (context) => {
	const { data, actions } = context;
	const { completed } = data;

	return (
		<Checkbox
			role="toggleTodo"
			type="checkbox"
			size="small"
			status={ completed ? 'checked' : 'unchecked' }
			onPress={ () =>
				actions.toggleTodo(data) }
		/>);
};

export default TodoCheckBox;
