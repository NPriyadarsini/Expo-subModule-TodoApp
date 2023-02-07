import { IconButton, Icon } from 'native-base';
import { React } from 'react';
import { Entypo } from 'react-native-vector-icons';

const AddButton = (context) => {
	const { actions, data } = context;

	return (
		<IconButton
			mt="-2"
			icon={ <Icon as={ Entypo } name="circle-with-plus"/> }
			className="iconButton"
			size="md"
			onPress={ () => actions.addTaskToTodo(data) }
		/>
	);
};

export default AddButton;