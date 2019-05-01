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
The application just calculate the screen size, current mouse position, and some visualization to make the demo less boring ;-)

## React classes
As we see in classes we have a constructor that sets the initial value for the state. Also here we bind any functions to have the same this.

Listeners for mouse position and window size are added in ComponentDidMount which is run after first rendering.
Listeners are removed in ComponentWillUnmount which makes sure to remove listeners once the component is unmounted.

Finally, the render function makes sure to render the component.

When we look at this code it looks fine and no need to change anything. However, if we want to create a new component that uses the mouse position, window size or even both we see a problem.
The problem is that we can't share component logic from this component. That means we have to copy paste the logic regarding mouse position and/or window size.
This leaves us with a lot of redundant code that needs to be tested multiple times.

## React hooks
As we see the React hook we see that this is actually stored in 3 different files (WindowSize.js, MousePosition.js, App.js) but for the sake of the demo, we merge them into one file.
React come with some default hooks that I'll explain in a bit. WindowSize.js and MousePosition.js are two custom hooks that have been implemented.

First, we have the custom React hook for calculating the window size of the browser. This starts by using `useState` to store width and height. `useState` is equivalent to `this.state`. `useState` is a function that takes a value as input which is the initial value of the state. `useState` then returns an arrow of two elements - the first one is the state and the second one is a function to update the state (equivalent to `setState`).

`useEffect` is then called which is equivalent to componentDidMount and returns a function which is equivalent to `componentWillUnmount`.

Finally, it returns the size variable from useState which contains width and height.

In App.js we can see that we can use the useWindowSize hook that we just created, just like we did with useState. The only difference here is that useWindowSize doesn't take any input and returns an object with width and height.

The same thing as WindowSize.js happens for MousePosition.js but this time it calculates the mouse position.

This leaves us with less redundancy and verboseness in the code since we can now reuse component logic outside our components.

`useState` and `useEffect` are the only React hooks that have been introduced here that comes with React. There are some more that can be used in different scenarios.

# Extra
React hooks has got quite popular very fast in the React community. That also means there are already thousands of React hooks that your app can depend on.

As I see it this gives less redundancy and code duplication, smaller components and more independent components that results in less error and better readability.

# Run
1. Make sure NodeJS with NPM has been installed on the machine
2. Install dependencies with the command `npm i`
3. Run the project with the command `npm start`

`appClasses.js` is the application created with classes and `appHooks.js` is created with React hooks.

You can decide with `index.js` if you want to run it with classes or React hooks.
