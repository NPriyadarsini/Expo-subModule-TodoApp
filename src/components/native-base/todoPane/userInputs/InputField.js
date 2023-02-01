import React from 'react';
import { Button, Input } from 'native-base';

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
				<Button
					bgColor="blue.500"
				>
					Save
				</Button>
			}
		/>
	);
};

export default InputField;
