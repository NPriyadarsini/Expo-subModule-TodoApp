import { HStack, Pressable, Text } from 'native-base';
import { React } from 'react';
import TodoCheckBox from './TodoCheckBox';

const Todo = (context) => {
	const { data, actions } = context;
	const { id, todo } = data;

	return (
		<HStack key={ id } py="4">
			<TodoCheckBox { ...context }/>
			<Pressable onPress={ () => actions.setEditing(data) }>
				<Text ml="5">{todo}</Text>
			</Pressable>
		</HStack>
	);
};

export default Todo;
