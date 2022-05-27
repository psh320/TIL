# Navigation in React-Native Typescript

Navigation starts with calling @react-navigation/stack package

```js
import { createStackNavigator } from "@react-navigation/stack";

//Stack 객체
const Stack = createStackNavigator(); //<Stack.Navigator>, <Stack.screen>

//Using Navigator and Screen component
const Stack = createStackNavigator();
export default function MainNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}>
        </Stack.Navigator>
    );
};
```
