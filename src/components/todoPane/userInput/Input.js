import React from 'react';
import { TextInput } from 'react-native-paper';
import ActionButton from './ActionButton';
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
			onChangeText={ (text) => actions.setInput(text) }
			onKeyPress={ (evt) => {
				actionKeys[evt.code] && actionKeys[evt.code](context);
			} }
			right={ <ActionButton { ...context }/> }
		/>
	);
};

export default Input;
