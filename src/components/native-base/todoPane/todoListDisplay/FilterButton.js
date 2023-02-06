import { React } from 'react';
import { Button, Text } from 'native-base';
import TodoManager from '../../../../../MuiTodoApp/src/services/todoManager';

const FilterButton = (context) => {
	const { data, actions } = context;
	const { label, name } = data;

	return (
		<Button
			key={ name }
			role="filterButton"
			colorScheme="secondary"
			variant="outline"
			disabled={ TodoManager.hasNoTodos(context) }
			onPress={ () => actions.setFilter(name) }
		>
			<Text>{label}</Text>
		</Button>
	);
};

export default FilterButton;
