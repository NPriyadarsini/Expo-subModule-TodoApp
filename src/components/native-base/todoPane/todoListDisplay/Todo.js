import { Pressable, Text } from 'native-base';
import { React } from 'react';

const Todo = (context) => {
	const { data, actions } = context;
	const { id, todo } = data;

	return (
		<Pressable
			key={ id }
			py="4"
			onPress={ () => actions.setEditing(data) }
		>
			<Text>{todo}</Text>
		</Pressable>
	);
};

export default Todo;
