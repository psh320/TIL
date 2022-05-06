# Component Styling

## Inline-Styling

Styling App is different from web. First of all, there is no CSS in React-Native.
For inline-styling, we can give object property instead of html markup.

```typescript
<View style={{ flex: 1, backgroundColor: true }}> </View>

//we can also give multiple style objects using array
<View style={[{ flex: 1}, {backgroundColor: true }]}> </View>
```

View components (View, ScrollView, SafeAreaView, KeyboardAvoidingView... etc) have backgroundColor to set background colors. However, Text component cannot set its background color but use color property to set its text color.

---

## StyleSheet API

```typescript
import { StyleSheet } from "react-native";
```

StyleSheet provide create method and we use it to create cached style object.

```typescript
const styles = StyleSheet.create({
    key_name1: {Style: Object1},
    key_name2: {Style: Object2},
    ...
})
```

- We use this stylesheet because it shortens the rendering speed as it save the styling objects to native modules locally (caching).
- Styles that will not update and change is written with Stylesheet but dynammic styles are written inline.

example

```typescript
export default function App() {
  return (
    <View style={[styles.view, { backgroundColor: "blue" }]}>
      <Text style={[styles.text, { color: "white" }]}>테스트</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: { fontSize: 20 },
});
```

---

### Google Material Design

Android recommend using this color guideline instead of '#FFFFFF' or 'white' to Color.white500.

```typescript
import { Colors } from "react-native-paper";
```

To use these colors we need to install small packages

```
npm i react-native-vector-icons react-native-paper
```

example

```typescript
const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.blue500,
  },
  text: {
    fontSize: 20,
    color: Colors.blue200,
  },
});
```

---

## View Component and CSS Box Model

React Native provide multiple Views such as View, SafeAreaView, ScrollView, KeyboardAvoidingView where text 'View' is included.

View Components may have muitple react-native components as child and they play important role as **UI & Layout** of the screen

### Platform and Dimensions API

- React-native needs to know which device it is running on depending on the build target (IOS or Android). Platform helps us knowing this.

_Checking running OS_

```typescript
import { Platform } from "react-native";

console.log(Platform.OS);
```

- Also we need to know the size of the phone when running the App. We use Dimensions API to check this.

```typescript
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
```

### Determining Width and Height

1. Without using width and height property, follow default React-native setting.
2. Decide size by numeric pixels (px).
3. Sizing the child component by percentages % compared to its parent component.
4. Divide and share the size of parent component to several child component using Flex property.

### Platform.select Method

Platform also provide method select

```typescript
property : Platform.select({
    ios: ,//value when Platform.OS is IOS
    android: //value when Platform.OS is Android
})

paddingLeft: Platform.select({ios: 0, android: 20})

```
