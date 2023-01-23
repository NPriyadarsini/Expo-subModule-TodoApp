import { React } from 'react';
import { List, Text } from 'react-native-paper';
import TodoCheckBox from './TodoCheckBox'

const Todo = (context) => {
	const { actions, data } = context;
	const {id,todo } = data;
  console.log(todo);

	return (
		<List.Item 
    key={id}
    role="todo"
    title={<Text variant="bodySmall">{todo}</Text>}
    onPress={ () => actions.setEditing()}
    left={() => <TodoCheckBox {...context}/>} />
	);
};

export default Todo;
