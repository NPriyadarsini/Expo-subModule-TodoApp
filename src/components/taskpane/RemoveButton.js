import { React } from 'react';
import { Button } from 'react-native-paper';

const RemoveButton = (context) => {
	const { actions, data } = context;

	return (
		<Button
			icon="delete"
			onPress={ () => actions.removeTask(data) }
		/>
	);
};

export default RemoveButton;
