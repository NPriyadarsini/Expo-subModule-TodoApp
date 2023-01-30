import { React } from 'react';
import { Button } from 'react-native-paper';

const RemoveButton = (context) => {
	const { actions, data } = context;

	return (
		<Button
			className="iconButton"
			icon="delete"
			role="removeButton"
			onPress={ () => actions.removeTodo(data) }
		/>
	);
};

export default RemoveButton;
