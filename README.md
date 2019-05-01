# A short introduction to React hooks
This is just a short introduction to give you a feeling of what React hooks are and how you can benefit from it. I'll not go into too many details.
React hooks is the new stuff in React v16.8 and doesn't contain any breaking changes.

One of the problems React hooks tries to resolve is that it's quite difficult to reuse stateful logic between components.
This was earlier tried to resolve by using [Higher-Order Component](#Higher-Order Component) and [Render Props](#Render Props). The problem with this approach is that it requires you to restructure your components when you use them.

With React hooks it is possible to extract stateful logic from a component so it can be reused and event tested independently. This allows you to reuse stateful logic without changing the components hierarchy.

Another problem React hooks tries to resolve is breaking complex components into more components.


## Higher-Order Component
Higher-Order Components are an advanced technique in React for reusing component logic and are not part of the React API. They are a pattern that emerges from React’s compositional nature.

Higher order component simply is a function that takes a component and returns a new component.

## Render Props
Render Props is a technique for sharing code between React components using a property whose value is a function.

Render Prop simply takes a function that returns a React element and calls it instead of implementing its own render logic.


# Small demo to show how React hooks works and looks like
Since this is new in React a demo will be showing you a small application using classes and later how to do it with React hooks.

The application contains very simple stateful logic.
The application just calculate the screen size, current mouse position and visualizes to make the demo less boring ;-)


# Extra
React hooks has got quite popular very fast in the React community. That also means there are already thousands of React hooks that your app can depend on.

# Run
1. Make sure NodeJS with NPM has been installed on the machine
2. Install dependencies with the command `npm i`
3. Run the project with the command `npm start`

`appClasses.js` is the application created with classes and `appHooks.js` is created with React hooks.

You can decide with `index.js` if you want to run it with classes or React hooks.
