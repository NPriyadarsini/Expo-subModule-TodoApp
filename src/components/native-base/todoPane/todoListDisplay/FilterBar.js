import { Button } from 'native-base';
import { React } from 'react';
import FilterButton from './FilterButton';

const FilterBar = (context) => {
	const { config, state, actions } = context;

	return (
		<Button.Group
			mt="2"
			value={ state.filter }
			onValueChange={ (value) => actions.setFilter(value) }
			isAttached={ true }
			size="sm"
		>{
				config.filters.map((filter, id) =>
					<FilterButton
						key={ id }
						{ ...{ ...context, data: filter } }
					/>)
			}
		</Button.Group>
	);
};

export default FilterBar;
