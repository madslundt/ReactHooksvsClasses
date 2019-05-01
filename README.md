# A short introduction to React hooks
This is just a short introduction to give you a feeling of what React hooks are and how you can benefit from it. I'll not go into too many details.
React hooks is the new stuff in React v16.8 and doesn't contain any breaking changes.

One of the problems React hooks tries to resolve is that it's quite difficult to reuse stateful logic between components.
This was earlier tried to resolve by using Higher-Order Component and Render Props. The problem with this approach is that it requires you to restructure your components when you use them.

With React hooks it is possible to extract stateful logic from a component so it can be reused and event tested independently. This allows you to reuse stateful logic without changing the components hierarchy.

Another problem React hooks tries to resolve is breaking complex components into more components.


## Higher-Order Component
Higher-Order Components is an advanced technique to React for reusing component logic and is not part of the React API. It is a pattern that emerges from React’s compositional nature.

Higher-Order Component simply is a function that takes a component and returns a new component.

## Render Props
Render Props is a technique for sharing code between React components using a property whose value is a function.

Render Prop simply takes a function that returns a React element and calls it instead of implementing its own render logic.


# Demo
Since this is new in React a demo will be showing you a small application using classes and later how to do it with React hooks.

The application contains very simple stateful logic.
The application has two different components that I'll one by one.

The first component is a simple example with a counter using classes and React hooks, and is just to show how React hooks looks like compared to classes.

The second component contains more logic which makes to component more complex. It calculates the screen size, current mouse position, and do some visualization to make the demo less boring ;-)

## Counter
### React classes
As we see in the class we have a constructor that sets the initial value for the state. Besides that, we bind our functions to have the same this for when we are calling the functions.

The component finally renders the state and gives the possibility to increase the state value by 1.
This is done by calling the increment function that makes sure to update state by `setState`.

### React hooks
The first thing we see is that we're not using class anymore and there are fewer lines of code (about half the size).

In this example we use a default React hook `useState`.
`useState` is a function that takes a value as input which is the initial value of the state (similar to our constructor in React classes example). `useState` then returns an array of two elements - the first one is the state and the second one is a function to update the state (equivalent to `setState`).


## Next example
### React classes
In this example, there have been introduced some more logic to make the component more complex.

Listeners for mouse position and window size are added in `componentDidMount` which is run after first rendering.
Listeners are removed in `componentWillUnmount` which makes sure to remove listeners once the component is unmounted.

Each listener is using functions to update the state with the correct values.

Finally, the render function makes sure to render the component.

When we look at this code it looks fine and no need to change anything. However, if we want to create a new component that uses some of the same logic we can't share the component logic. That means there is a need to copy paste the logic regarding mouse position and/or window size.
This leaves us with a code duplication that needs to be tested and maintained multiple times.

### React hooks
In React hook we see that this is actually stored in 3 different files (windowSize.js, mousePosition.js, app.jsx) but for the sake of the demo, we merge them into one file.
React comes with some default hooks that I'll explain in a bit. windowSize.js and mousePosition.js are two custom hooks that have been implemented.

First, we have the custom React hook for calculating the window size of the browser. This starts by using `useState` to store width and height. `useState` is equivalent to `state`. `useState` is a function that takes a value as input which is the initial value of the state. `useState` then returns an arrow of two elements - the first one is the state and the second one is a function to update the state (equivalent to `setState`).

`useEffect` is then called which is equivalent to componentDidMount and returns a function which is equivalent to `componentWillUnmount`.

Finally, it returns the size variable from useState which contains width and height.

In app.jsx we can see that we use the `useWindowSize` hook that we just created, just like we did with useState. The only difference here is that useWindowSize doesn't take any input and returns an object with width and height.

The same thing as windowSize.js happens for mousePosition.js but this time it calculates the mouse position.

This leaves us with less code duplication and less verboseness in the code since we can now reuse component logic in multiple components.

`useState` and `useEffect` are the only React hooks that have been introduced in these examples that come with React. There are some more that can be used in different scenarios but these will not be shown or talked about here.

# Extra
React hooks has got quite popular very fast in the React community. That also means there are already thousands of React hooks that your app can depend on.

As I see it this gives less redundancy and code duplication, smaller components and more independent components that result in less error and better readability.

# Run
1. Make sure NodeJS with NPM has been installed on the machine
2. Install dependencies with the command `npm i`
3. Run the project with the command `npm start`

`appClasses.js` is the application created with classes and `appHooks.js` is created with React hooks.

You can decide with `index.js` if you want to run it with classes or React hooks.