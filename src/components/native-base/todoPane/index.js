import { Box } from 'native-base';
import { React } from 'react';
import context from '../../../../MuiTodoApp/src/core/context';
import InputField from './userInputs/InputField';

const TodoPane = () => <Box><InputField { ...context }/></Box>;

export default TodoPane;
