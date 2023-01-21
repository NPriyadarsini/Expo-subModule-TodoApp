import { View, Text } from "react-native";
import TodoManager from'./MuiTodoApp/src/services/todoManager';
import context from "./MuiTodoApp/src/core/context";
import { useState } from "react";
import updateContext from '@laufire/resist';

export default function App() {
  console.log(TodoManager.hasInput({state:{input:""}}));
  console.log(context);
  const [state, setState] = useState(context.seed);
  updateContext(context, { state, setState });

  return ( 
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    
      <Text
      onPress={()=>context.actions.setInput("hi")}>Universal React with Expo</Text>
    </View>
  );
}
