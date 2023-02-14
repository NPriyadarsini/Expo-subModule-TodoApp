import { IconButton, Icon } from 'native-base';
import { React } from 'react';
import { Entypo } from 'react-native-vector-icons';

const RemoveButton = (context) => {
	const { actions, data } = context;

	return (
		<IconButton
			mt="-2"
			icon={ <Icon as={ Entypo } name="trash"/> }
			className="iconButton"
			size="md"
			onPress={ () => actions.removeTask(data) }
		/>
	);
};

export default RemoveButton;
