import React from 'react';
import { TextInput } from 'react-native';
import context from '../../../../MuiTodoApp/src/core/context';

const getEnterKeyAction = () =>
	(context.state.editing ? 'editTodo' : 'addTodo');

const actionKeys = {
	Enter: () => context.actions[getEnterKeyAction(context)](context),
	Escape: () => context.actions.setInput(''),
};

const Input = () => {
	const { state, actions } = context;

	return (
		<TextInput
			label="Enter The Task"
			role="input"
			type="text"
			value={ state.input }
			onChangeText={ (text) => {
				// eslint-disable-next-line no-console
				console.log(text);
				return actions.setInput(text);
			} }
			onKeyPress={ (evt) => {
				actionKeys[evt.code] && actionKeys[evt.code](context);
			} }
		/>
	);
};

export default Input;
