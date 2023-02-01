import { React } from 'react';
import HomeScreen from './components/native-base';
import { NativeBaseProvider } from 'native-base';

const App = (context) =>
	<NativeBaseProvider>
		<HomeScreen { ...context }/>
	</NativeBaseProvider>;

export default App;
