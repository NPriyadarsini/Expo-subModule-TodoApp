import TodoManager from '../../../../MuiTodoApp/src/services/todoManager';

const FilterButton = (context) => {
	const { data, actions } = context;
	const { label, name } = data;

	return {
		value: name,
		label: label,
		disabled: TodoManager.hasNoTodos(context),
		onPress: () => actions.setFilter(name),
	};
};

export default FilterButton;
