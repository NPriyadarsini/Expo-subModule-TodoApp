import { Box, Pressable, Text } from 'native-base';
import { React } from 'react';

const Task = (context) => {
	const { data, actions } = context;
	const { id, todo } = data;

	return	(
		<Box w="80%">
			<Pressable onPress={ () => actions.setEditing(data) }>
				<Text mx="1">{todo}</Text>
			</Pressable>
		</Box>
	);
};

export default Task;
