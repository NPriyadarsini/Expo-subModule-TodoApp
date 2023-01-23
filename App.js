import TodoManager from'./MuiTodoApp/src/services/todoManager';
import context from "./MuiTodoApp/src/core/context";
import { useState } from "react";
import updateContext from '@laufire/resist';
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./src/components/index"

export default function App() {
  console.log(TodoManager.hasInput({state:{input:""}}));
  console.log(context);
  const [state, setState] = useState(context.seed);
  updateContext(context, { state, setState });

  return    (
    <SafeAreaProvider>
    <HomeScreen {...context}/>
  </SafeAreaProvider>
  )
}
