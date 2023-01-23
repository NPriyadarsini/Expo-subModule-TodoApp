import { React } from 'react';
import { Checkbox } from 'react-native-paper';

const CheckBox = (context) => {
	const { data } = context;
	const { completed } = data;

	return (
		<Checkbox
			role="toggleTodo"
			type="checkbox"
			size="small"
			status={ completed ? "checked": "unchecked" }
			onPress={ () => 
				context.actions.toggleTodo(data) }
		/>);
};

export default CheckBox;
