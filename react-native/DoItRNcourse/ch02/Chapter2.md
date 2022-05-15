# How to write conditions using JSX

When we encounter a situation where we need to render a JSX (react/react-native) pages by conditions, I used to write code is such a way php works.

```js
export default function App() {
    const isLoading = true;
    return (
        <SafeAreaView>
            {
                if(isLoading)
                    return <Text>IsLoading... </Text>
                else
                    return <Text>Hello JSX world!</Text>
            }
        </SafeAreaView>
    )
}
```

However, if Statement is execution statement so itself does not have any value. execution statement is not usable in JSX so we need to some of the followings

1. Put if Statement outside JSX

```js
export default function App() {
  const isLoading = true;
  if (isLoading) {
    return (
      <SafeAreaView>
        <Text>IsLoading... </Text>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView>
      <Text>Hello JSX world!</Text>
    </SafeAreaView>
  );
}
```

2. Change If Statement to short circuit evaluation

```js
export default function App() {
  const isLoading = true;
  return (
    <SafeAreaView>
      {isLoading && <Text>IsLoading... </Text>}
      {!isLoading && <Text>Hello JSX world!</Text>}
    </SafeAreaView>
  );
}
```

{isLoading && <Text>IsLoading... </Text>} this is actually the short form of
isLoading ? <Text>IsLoading... </Text>: undefined
undefined is simply ignored by JSX so it is working fine.

3. Store JSX is variable

```js
export default function App() {
  const isLoading = true;
  const children = isLoading ? (
    <Text>IsLoading...</Text>
  ) : (
    <Text>Hello JSX world!</Text>
  );
  return <SafeAreaView>{children}</SafeAreaView>;
}
```

This would work for conditional rendering in React or React-Native.

---

# How to Use Faker in Typescript

install faker by this command in terminal

```
npm i @faker-js/faker
```

we will create data folder in src to manage the person data efficiently
we create 5 files accordingly

- createRandomPerson.ts
- faker.ts
- index.ts
- IPerson.ts
- util.ts

createRandomPerson.ts

```typescript
import type { IPerson } from "./Iperson";
import * as F from "./faker";
import * as U from "./util";

export const createRandomPerson = (): IPerson => {
  const name = F.randomName();
  return {
    id: F.randomId(),
    createdDate: F.randomDate(),
    modifiedDate: new Date(),
    name,
    email: F.randomEmail(),
    avatar: F.randomAvatarUrl(name),
    image: F.randomImage(),
    comments: F.randomParagraphs(4),
    counts: {
      comment: U.random(10, 100),
      retweet: U.random(10, 100),
      heart: U.random(100, 1000),
    },
  };
};
```

It exports a function that returns IPerson type data which is randomly created faker person data.

IPerson.ts

```typescript
//Create Interface Type for Person
export type IPerson = {
  id: string;
  createdDate: Date;
  modifiedDate: Date;
  name: string;
  email: string;
  avatar: string;
  image: string;
  comments: string;
  counts: {
    comment: number;
    retweet: number;
    heart: number;
  };
};
```

It defines the huge object type for person

```typescript
export const makeArray = (length: number) => new Array(length).fill(null);

export const random = (min: number, max: number): number =>
  Math.round(Math.random() * (max - min)) + min;

export const unsplashUrl = (width: number, height: number): string =>
  `https://source.unsplash.com/random/${width}x${height}`;

export const avatarUriByName = (name: string) =>
  `https://ui-avatars.com/api/?name=${name.split(" ").join("+")}`;
```

Create frequently used functions that can be used in creating random user.

faker.ts

```typescript
import faker from "@faker-js/faker";
import * as U from "./util";

export const randomId = (): string => faker.datatype.uuid();

export const randomName = (): string => faker.name.findName();

export const randomEmail = (): string => faker.internet.email();

export const randomAvatarUrl = (name?: string): string =>
  U.avatarUriByName(name ?? randomName());

export const randomDate = (): Date => faker.date.recent();

export const randomParagraphs = (count: number = 2): string =>
  U.makeArray(count).map(faker.lorem.paragraph).join("\n");

export const randomImage = (): string =>
  U.unsplashUrl(U.random(800, 1000), U.random(800, 1000));
```

Create function that generates faker data randomly with help of utils.

index.ts

```typescript
export * from "./util";
export * from "./faker";
export * from "./Iperson";
export * from "./createRandomPerson";
```

Sums up the data files by exporting all neccessary files.

App.tsx

```typescript
const person = D.createRandomPerson();
export default function App() {
  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(person, null, 2)}</Text>
      <StatusBar style="auto" />
    </View>
  );
}
```

In this way we create random person and use in our app.

---

# Handle Event in React Native

### Button

```js
<View style={styles.container}>
  <Button title="Home" onPress={onPress} />
  <TouchableOpacity onPress={onPress}>
    <Text>TouchableOpacity</Text>
  </TouchableOpacity>
  <TouchableHighlight onPress={onPress}>
    <Text>Touchable Highlight</Text>
  </TouchableHighlight>
  <Text onPress={onPress}>Press Me</Text>
  <StatusBar style="auto" />
</View>
```

textInput

textInput core component has following characteristics

1. We can set default vlaue in defaultValue property.
2. The written Text can be obtained by value property.
3. Whenever Text is entered, onChangeText event listener works.
4. Placeholder property can be used to guide which type of text needs to be input.
5. If we set false in editable property, we can disable input.
6. keyboardType property allows 'default', 'numeric', 'email-address' values and so on.
7. There are focus method that focuses on textInput and blur method to loose focus.
8. onFocus event will be called when we are able to write on TextInput (When we have focus), onBlur event will be called when we are not able to write (When we loose focus).
9. When Text input is done, onEndEditting Event will be called.
10. Cannot have children Component.

onChangeText function signature

```
onChangeText(text: string) => void
```

example of Text Input

```js
<TextInput
  placeholder="Enter your name"
  onChangeText={(text: string) => console.log(text)}
  onFocus={() => console.log("OnFocus")}
  onBlur={() => console.log("OnBlur")}
  onEndEditing={() => console.log("onEndEditing")}
/>
```
