import { React } from 'react';
import { Checkbox } from 'react-native-paper';
import TodoManager from '../../../../MuiTodoApp/src/services/todoManager';

const ToggleAllCheckbox = (context) => {
	const { actions } = context;
	const selectAll = TodoManager.isAllChecked(context);
	const noTodos = TodoManager.hasNoTodos(context);

	return (
		<Checkbox
			role="toggleAllCheckBox"
			disabled={ noTodos }
			type="checkbox"
			status={ selectAll ? 'checked' : 'unchecked' }
			onPress={ () => actions.toggleTodoList(!selectAll) }
		/>
	);
};

export default ToggleAllCheckbox;
