import { Box, HStack, Pressable, Text } from 'native-base';
import { React } from 'react';
import AddButton from './AddButton';
import RemoveButton from './RemoveButton';

const Task = (context) => {
	const { data, actions } = context;
	const { id, todo } = data;

	return	(
		<HStack key={ id } py="3" >
		<AddButton {...context}/>
		<Box w="65%">
			<Pressable onPress={ () => actions.setEditing(data) }>
				<Text mx="1">{todo}</Text>
			</Pressable>
			</Box>
			<RemoveButton {...context}/>
			</HStack>
	);
};

export default Task;
