import { Box, HStack, Pressable, Text } from 'native-base';
import { React } from 'react';
import RemoveButton from './RemoveButton';
import TodoCheckBox from './TodoCheckBox';

const Todo = (context) => {
	const { data, actions } = context;
	const { id, todo } = data;

	return (
		<HStack key={ id } py="3">
			<TodoCheckBox { ...context }/>
			<Box w="80%">
				<Pressable onPress={ () => actions.setEditing(data) }>
					<Text mx="2">{todo}</Text>
				</Pressable>
			</Box>
			<RemoveButton { ...context }/>
		</HStack>
	);
};

export default Todo;
