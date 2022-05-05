# How to write conditions using JSX

When we encounter a situation where we need to render a JSX (react/react-native) pages by conditions, I used to write code is such a way php works.

```typescript
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
However, if Statement is execution statement so itself dose not have any value. execution statement is not usable in JSX so we need to some of the followings

1. Put if Statement outside JSX

```typescript
export default function App() {
    const isLoading = true;
    if(isLoading) {
        return (
            <SafeAreaView>
                <Text>IsLoading... </Text>
            </SafeAreaView>
        )
    }
    return (
        <SafeAreaView>
            <Text>Hello JSX world!</Text>
        </SafeAreaView>
    )
}
```

2. Change If Statement to short circuit evaluation

```typescript
export default function App() {
    const isLoading = true;
    return (
        <SafeAreaView>
            {isLoading && <Text>IsLoading... </Text>}
            {!isLoading && <Text>Hello JSX world!</Text>}
        </SafeAreaView>
    )
}
```
{isLoading && <Text>IsLoading... </Text>} this is actually the short form of
isLoading ? <Text>IsLoading... </Text>: undefined
undefined is simply ignored by JSX so it is working fine.

3. Store JSX is variable

```typescript
export default function App() {
    const isLoading = true;
    const children = isLoading ? (
        <Text>IsLoading...</Text>
    ) : (
        <Text>Hello JSX world!</Text>
    )
    return <SafeAreaView>{children}</SafeAreaView>
}
```

This would work for conditional rendering in React or React-Native.


