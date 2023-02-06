import { Checkbox } from 'native-base';
import { React } from 'react';
import TodoManager from '../../../../../MuiTodoApp/src/services/todoManager';

const ToggleAllCheckbox = (context) => {
	const { actions } = context;
	const selectAll = TodoManager.isAllChecked(context);
	const noTodos = TodoManager.hasNoTodos(context);

	return (
		<Checkbox
			aria-label="toggleAllCheckBox"
			isDisabled={ noTodos }
			size="sm"
			ml="5"
			colorScheme="blue"
			type="checkbox"
			isChecked={ selectAll }
			onChange={ () => actions.toggleTodoList(!selectAll) }
		/>
	);
};

export default ToggleAllCheckbox;
