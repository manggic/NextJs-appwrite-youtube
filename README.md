


appwrite@198





### Creating  context  (context/test_context.js)
```javascript
import {  createContext} from 'react'
export const myCont = createContext('default')
```




### page.tsx


```javascript
"use client";
import React, { useContext } from "react";
import { myCont } from "@/context/test_context";

const MyApp = () => {
  return (
    <div>
     // context providing value to all it child
     // no need for props drilling
      <myCont.Provider value="pooja">
        <Page />
      </myCont.Provider>
    </div>
  );
};

const Page = () => {
  // consuming the value provided by context provider
  return useContext(myCont);
};

export default MyApp;

```

### useRef best explain

When you create a `ref` using the `useRef` hook in React, like this: `const myRef = useRef();`, the `myRef` object holds a `current` property. The `current` property of the `ref` object is used to store the current value associated with the `ref`.

In other words, `myRef.current` is where you store and access the value that the `ref` is referring to. This value can be anything you want: a DOM element, a variable, an object, etc.

Here's a more detailed breakdown of what happens:

1. **Create a Ref:** When you create a `ref` using `useRef`, it initializes an object with a `current` property. Initially, the `current` property is set to `undefined`.

   ```jsx
   const myRef = useRef();
   ```

2. **Assign a Value:** You can assign a value to the `current` property of the `ref`. This value can be anything you want to store and access.

   ```jsx
   myRef.current = 'Hello, world!';
   ```

3. **Access the Value:** To access the value stored in the `ref`, you use the `current` property:

   ```jsx
   console.log(myRef.current); // Outputs: Hello, world!
   ```

Here's an example with React components:

```jsx
import React, { useRef } from 'react';

function MyComponent() {
  const myRef = useRef();

  // Assign a value to the ref's current property
  myRef.current = 'Hello, world!';

  return (
    <div>
      {/* Access the value stored in the ref */}
      <p>{myRef.current}</p>
    </div>
  );
}

export default MyComponent;
```

In this example, the `myRef` object is created using `useRef`, and its `current` property is assigned the string `'Hello, world!'`. Later, when rendering the component, we access and display the value using `myRef.current`.

Remember that the `current` property of the `ref` is mutable, meaning you can change its value at any time. This is particularly useful for scenarios where you need to store and manipulate values without causing re-renders in your component.







