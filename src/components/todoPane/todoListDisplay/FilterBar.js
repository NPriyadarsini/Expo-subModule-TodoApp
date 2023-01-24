import { React, useState } from 'react';
import { SegmentedButtons } from 'react-native-paper';
import TodoManager from '../../../../MuiTodoApp/src/services/todoManager';

const FilterBar = (context) => {
	const { config,state:{filter}} = context;

	return	(
		<SegmentedButtons
		value={filter}
		onValueChange={(value) => context.actions.setFilter(value)}
			role="filterBar"
			className="filter"
			size="small"
			buttons={
				config.filters.map(({name,label}, id) =>
				({	
					value: name,
					label: label,
					disabled: TodoManager.hasNoTodos(context) ,
				}))
			}/>
	);
};

export default FilterBar;
