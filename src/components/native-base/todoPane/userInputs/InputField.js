import React from 'react';
import { Input } from 'native-base';
import AddButton from './AddButton';

const getEnterKeyAction = (context) =>
	(context.state.editing ? 'editTodo' : 'addTodo');

const actionKeys = {
	Enter: (context) => context.actions[getEnterKeyAction(context)](context),
	Escape: (context) => context.actions.setInput(''),
};

const InputField = (context) => {
	const { actions } = context;

	return (
		<Input
			placeholder="Enter The Task"
			variant="rounded"
			onChangeText={ (text) => actions.setInput(text) }
			onKeyPress={ (evt) => {
				actionKeys[evt.code] && actionKeys[evt.code](context);
			} }
			InputRightElement={
				<AddButton { ...context }/>
			}
		/>
	);
};

export default InputField;
