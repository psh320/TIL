# Component Styling

## Inline-Styling

Styling App is different from web. First of all, there is no CSS in React-Native.
For inline-styling, we can give object property instead of html markup.

```js
<View style={{ flex: 1, backgroundColor: true }}> </View>

//we can also give multiple style objects using array
<View style={[{ flex: 1}, {backgroundColor: true }]}> </View>
```

View components (View, ScrollView, SafeAreaView, KeyboardAvoidingView... etc) have backgroundColor to set background colors. However, Text component cannot set its background color but use color property to set its text color.

---

## StyleSheet API

```js
import { StyleSheet } from "react-native";
```

StyleSheet provide create method and we use it to create cached style object.

```js
const styles = StyleSheet.create({
    key_name1: {Style: Object1},
    key_name2: {Style: Object2},
    ...
})
```

- We use this stylesheet because it shortens the rendering speed as it save the styling objects to native modules locally (caching).
- Styles that will not update and change is written with Stylesheet but dynammic styles are written inline.

example

```js
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

```js
import { Colors } from "react-native-paper";
```

To use these colors we need to install small packages

```
npm i react-native-vector-icons react-native-paper
```

example

```js
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

```js
import { Platform } from "react-native";

console.log(Platform.OS);
```

- Also we need to know the size of the phone when running the App. We use Dimensions API to check this.

```js
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

```js
property : Platform.select({
    ios: ,//value when Platform.OS is IOS
    android: //value when Platform.OS is Android
})

paddingLeft: Platform.select({ios: 0, android: 20})

```

---

## Using Assets and Icon

In mobile app development, Assets and Resources are included in an app as images, fonts, icons and files. They are required for maintaining the design of the app during offline.

We use assets folder to save images and icons. Then how do we use those assets stored in our app

### Using ImageBackground core component

- When we use component that contains 'Image' (ImageBackground, Image ...), we must use **require** in **source** attribute.
- We also must set **height and width** for images like {height: '100%', width: '100%'}, in this case we use {flex:1} as it is more simple.

```js
import { ImageBackground } from "react-native";

<ImageBackground style={{ flex: 1 }} source={require("./src/assets/bg.jpg")} />;
```

ImageBackground can have child component although it is not 'View'.

---

### Using Image core component

- Image component renders an image but Image cannot have child component.
- When we want to load an image from other servers instead of local assets, we need to use {uri: image_file_web_address} in source attribute.

```js
import { Image } from "react-native";
import * as D from "./src/data";

const avatarUrl = D.randomAvatarUrl()
// ex) 'https://ui-avatars.com/api/?name=Sadie+Stracke'

<Image source={{uri:avatarUrl}}  style={[styles.image]} />;
```

Following example uses ImageBackground as child component of View and Image component as child of ImageBackground.

```js
import * as D from "./src/data";

const avatarUrl = D.randomAvatarUrl();
const avatarSize = 50;

export default function App() {
  return (
    <View style={[styles.flex]}>
      <ImageBackground
        style={[styles.flex, styles.imageBackground]}
        source={require("./src/assets/images/bg.jpg")}
      >
        <Image source={{ uri: avatarUrl }} style={[styles.image]} />
      </ImageBackground>
    </View>
  );
}

// prettier-ignore
const styles = StyleSheet.create({
  flex:{flex: 1},
  imageBackground:{padding: 10},
  image:{width: avatarSize, height: avatarSize, borderRadius: avatarSize/2}
});
```

---

### Installing and Using Fonts

Search font on Google and download the Font Family files. Then paste it to assets/fonts folder.

Unfortunately, We cannot simply just apply our font files to our app. To apply our font assets, We need to run command '**npx react-native link**' and this command requires react-native.config.js file where package.json exists.

Enter these following texts in _react-native.config.js_

```js
module.exports = {
  projects: {
    ios: {},
    android: {},
  },
  assets: ["./src/assets/fonts"],
};
```

Then run npx react-native link to send the assets to android and IOS.
then it seems it is working fine but extra steps are needed to IOS which I will cover later on.

---

### Styling Fonts in React-Native

**fontFamily Style Property**

We apply the font by using fontFamily in styles

_fontFamily Style Property example_

```js
fontFamily: "DancingScript-Regular";
```

we can give options like this

```js
const styles = Styleshee.create({
  regular: { fontFamily: "DancingScript-Regular" },
  medium: { fontFamily: "DancingScript-Medium" },
  semiBold: { fontFamily: "DancingScript-SemiBold" },
  bold: { fontFamily: "DancingScript-Bold" },
});
```

Unlick CSS, we cannot apply all fonts to child components by giving style to parents.

_Example of Giving font styles to texts_

```js
<View>
  <Text style={[styles.regular]}> some text here1</Text>
  <Text style={[styles.regular]}> some text here2</Text>
  <Text style={[styles.regular]}> some text here3</Text>
</View>
```

**fontWeight Style Property**

fontWeight can change the thickness of text.

In react-native, the properties we can set in fontWeight are as follows.

```js
"normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900";
```

**textAlign Style Property**

textAlign decides how the text are going to be aligned using 'right', 'center', 'left'.

## Using React-Native-vector-icons Packages

We have installed react-native-vector-icons locally, but we did not link it to IOS and Android. Run this command to link it.

```
npx react-native link react-native-vector-icons
```

### Using Icons

react-native-vector-icons provide 14 Icon Sets and we can use these Icon sets from Icon component.

```js
import Icon from "react-native-vector-icons/icon_set_name";
```

Basic Usage of Icon component

```js
<Icon
  name="icon_name"
  size={icon_size}
  color="icon_color"
  onPress={Callback_Function}
/>
```

Example of using Home icon from MaterialCommunityIcons set

```js
import {Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const onIconPressed = () => console.log('icon pressed')

(...)

<Icon name="home" size={50} color={Colors.lightBlue500} onPress={onIconPressed} />

```

### Apply ReactVectorIcons to IOS

We have linked packages using _npx react-native link react-native-vector-icons_ but it actaully changes podlife in ios directory. It is not installed on actual dev computer. We fix this by running

npx pod-install in ios directory

**IN M1 mac** we need run this command instead
arch -arch x86_64 pod install

### ScrollView In React-Native

Unlike Web React, when a content is overflowed, we cannot scroll by dragging the screen. We need to use ScrollView component that allows scroll when content is overflowed.

Beside style property, ScrollView has different property which is contentContainerStyle. contentContainerStyle is applied to contents that are scrolled. flex: 1 should not be used in contentContainerStyle.

```js
<ScrollView contentContainerStyle={[styles.view]}>{children}</ScrollView>
```

The items we created are rendered by ScrollView Component. Now we will use FlatList Core Componenet which is more optimized for rendering in React-Native. FlatList is more faster if we are rendering same components repetitively.

```js
import { FlatList } from "react-native";

//Usage of FlatList
<FlatList data={people} />;
```

FlatList is a little bit complicated than ScrollView. We provide data property to set a data we want to render. (data needs to be an array holding list of data)

FlatList also provide **renderItem** property so we use it to render children

```js
<FlatList data={people} renderItem={({ item }) => <Person person={item} />} />
```

We have not set the key for each component so we use **keyExtractor** property using callback function with parameter item and index.

```js
<FlatList
  data={people}
  renderItem={({ item }) => <Person person={item} />}
  keyExtractor={(item, index) => item.id} //keyExtractor={(item,index) => index.toString()} if no ID is set in data.
/>
```

Also we can use **ItemSeperatorComponent** property to set component returned by callback function. The components play a role as Item Seperator that seperates the rendered items.

```js
<FlatList
  data={people}
  renderItem={({ item }) => <Person person={item} />}
  keyExtractor={(item, index) => item.id}
  ItemSeperatorComponent={() => <View style={styles.itemSeperator} />}
/>
```

### React.Fragment Component and <></>

Suppose we want to make Floating Action Button at the bottom right corner button is made up of View component with Icon

```js
<SafeAreaView style={[styles.view]}>
  <View>//Contents</View>
  //Floating Icon
  <View style={[styles.absoluteView]}>
    <Icon name="feather" size={50} color="white" />
  </View>
</SafeAreaView>
```

the button needs to float and overlap the whole page therefore, it should not be inside the parent View component. Then because of XML property, we cannot return have two components without wrapping them with one huge component, here we use **Fragment**.

```js
import React, {Fragment} from 'react';

//impossible to return multiple components without parent.
<SafeAreaView />
<View />

//So we use Fragment
<Fragment>
  <SafeAreaView />
  <View />
</Fragment>

//Fragment can be used in short form as <></>
<>
  <SafeAreaView />
  <View />
</>
```

### Using Moment Package in React-Native

Moment provide more features that Date does not have. To use Moment Package, we need to import it after install

```
npm i moment moment-with-locales-es6
```

```js
import moment from "moment";
```

We use moment by formatting existing Date instance to moment instance and use moment method.
And one of the main reason of using moment is to show the time difference in a easy format.

```js
const modifiedDate = new Date();
console.log("modifiedDate", moment(modifiedDate).format("llll"));
//modifiedDate Mon, Nov 23, 2020 7:53 PM
console.log(moment(modifiedDate).startOf("day").fromNow());
//20 hours ago
```

_Use moment.locale('lang') to change language (need import from moment-with-locales-es6)_

### Using Reusable Component in React-Native with Typescript

Suppose we are developing Twitter and we have Icons like comment, retweet and heart. They look similar and use Same JSX structure.

_example for comment JSX_

```js
<View>
  <Icon
    name="comment"
    size={24}
    color="blue"
    onPress={() => Alert.alert("comment clicked")}
  />
  <Text>{person.counts.comment}</Text>
</View>
```

It will be convinient if we can reuse this component for each Icons, retweet and heart.

We conver this JSX into custom component from core components (View, Text).
