# Functional Component

A functional component in React is a JavaScript function that accepts props as an argument and returns JSX (JavaScript XML) to describe the UI. Functional components are often referred to as "stateless components" because, originally, they didn’t have internal state or lifecycle methods. However, with the introduction of Hooks in React, functional components can now manage state and access lifecycle methods, making them as powerful as class components.


# Characteristics of a Functional Component
- Naming Convention: The name of a functional component should always begin with a capital letter. If you name a component with a lowercase first letter, React will treat it as a regular HTML element rather than a component.
- Returning Markup: A functional component must return JSX. If it doesn't, it won't render anything on the screen.
- Simplicity and Readability: Functional components are concise and easier to read, making them a go-to choice for developers. They promote functional programming principles, which keep code clean and modular.
- Usage of Arrow Functions: While you can use traditional function declarations to define functional components, most developers prefer arrow functions for their simplicity and cleaner syntax.

##### Example of a Functional Component

Here’s a basic functional component that renders a button:


<pre>
import React from 'react';

const MyButton = () => {
  return <button>Submit</button>;
};

export default MyButton;
</pre>


To use this functional component, you simply include it in the JSX of another component, like this:


<pre>
import React from 'react';
import MyButton from './MyButton';

const App = () => {
  return (
    <div>
      <h1>Welcome to React</h1>
      <MyButton />
    </div>
  );
};

export default App;
</pre>

In this example, the MyButton component is a simple function that returns a button with the text "Submit." When MyButton is used in App, it renders the button below the header.


### Functional Component with Props
Props (short for "properties") allow you to pass data from a parent component to a child component, making your components dynamic and reusable.

Here's an example:


<pre>
// ParentComponent.js

import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const message = "Hello from the parent component!";
  return <ChildComponent greeting={message} />;
};

export default ParentComponent;
</pre>

<pre>
// ChildComponent.js

import React from 'react';

const ChildComponent = (props) => {
  return <p>{props.greeting}</p>;
};

export default ChildComponent;
</pre>

In this example, ParentComponent passes a greeting prop to ChildComponent. ChildComponent then renders the value of that prop.


## Multiple Functional Components
React allows you to break down complex UIs into smaller, reusable pieces, known as components. Each component can represent a specific part of the UI, and you can have multiple components within one parent component. This is the power of React’s component-based architecture.

Let’s take an example where you have a Parent Component that renders several Child Components:

<pre>
import React from 'react';

// Define the first functional component
const MyButton = () => {
  return <button>Click Me!</button>;
};

// Define the second functional component
const MyText = () => {
  return <p>This is some text inside a functional component.</p>;
};

// Parent component
const App = () => {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <MyButton />
      <MyText />
    </div>
  );
};

export default App;
</pre>

In this example, we define two separate functional components: MyButton and MyText. These components are then used inside the App component. Each of these child components is a standalone unit that returns its own JSX, and the parent component (App) brings them together to form the complete UI.

- MyButton renders a simple button.
- MyText renders a paragraph with some text.
- The parent App component wraps these components together and displays them.

### Styling in Functional Components
Styling in React components can be approached in various ways, depending on your project's requirements and personal preferences. Here are a few common methods for styling React components:

1. Inline Styles: You can apply styles directly to JSX elements using inline styles. Styles are defined as JavaScript objects and assigned using the style attribute. This method is useful for small-scale styling but may become cumbersome for larger projects.


<pre>
const MyComponent = () => {

  const styles = {
   color: 'blue',
    fontSize: '16px',
  };
  return <div style={styles}>Styled content</div>;
};
</pre>


2. CSS Stylesheets: You can create separate CSS files and import them into your components. This approach keeps styles separate from your component logic, promoting better organization. Use class names to apply styles to JSX elements.


<pre>
/* styles.css */

.myComponent {
  color: blue;
  font-size: 16px;
}



// MyComponent.js

import './styles.css';

const MyComponent = () => {
  return <div className="myComponent">Styled content</div>;
};
</pre>