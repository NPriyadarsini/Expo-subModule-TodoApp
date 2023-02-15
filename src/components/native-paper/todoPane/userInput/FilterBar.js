import { React } from 'react';
import { SegmentedButtons } from 'react-native-paper';
import FilterButton from './FilterButton';

const FilterBar = (context) => {
	const { config, state, actions } = context;

	return (
		<SegmentedButtons
			value={ state.filter }
			onValueChange={ (value) => actions.setFilter(value) }
			role="filterBar"
			className="filter"
			size="small"
			buttons={
				config.filters.map((filter) =>
					FilterButton({ ...context, data: filter }))
			}
		/>
	);
};

export default FilterBar;
