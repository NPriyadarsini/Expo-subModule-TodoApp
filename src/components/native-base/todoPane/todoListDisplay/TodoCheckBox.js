import { Checkbox } from 'native-base';
import { React } from 'react';

const TodoCheckBox = (context) => {
	const { data, actions } = context;
	const { completed } = data;

	return (
		<Checkbox
			aria-label="todoCheckBox"
			role="toggleTodo"
			type="checkbox"
			size="sm"
			colorScheme="blue"
			defaultIsChecked={ completed }
			onChange={ () =>
				actions.toggleTodo(data) }
		/>);
};

export default TodoCheckBox;
