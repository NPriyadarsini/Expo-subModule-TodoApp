import { Box, Center, Text } from 'native-base';
import { React } from 'react';

const Todo = (context) => {
	const { data } = context;
	const { id, todo } = data;

	return (
		<Center>
			<Box key={ id }>
				<Text>{todo}</Text>
			</Box>
		</Center>
	);
};

export default Todo;
