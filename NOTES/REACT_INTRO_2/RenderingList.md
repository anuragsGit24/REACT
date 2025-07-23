# Rendering List and conditional Rendering

## Introduction
React developers can use conditional rendering to control component visibility and behavior based on certain conditions. Whether it's rendering different content based on user authentication, handling loading states, or displaying components dynamically, mastering conditional rendering is essential for building robust React applications. In this article, we'll explore various techniques for conditional rendering in React along with sample code to illustrate each method.

There are three ways to implement conditional rendering in React.
1. Using if else Statement
2. Using ternary operator
3. Using Logical && Operator


### Using if-else statement
One of the simplest ways to conditionally render content in React is by using if/else statements within the component's render method. Developers can define conditions based on props, state, or any other variables and render different content accordingly. This approach is intuitive and works well for simple scenarios.

#### Syntax

<pre>
function MainComponent(props) {
    const myBool = props.myBool;
    if (myBool) {
        return <Component1/>;
    } else{
        return <Component2/>;
    }
}
</pre>
Example
<pre>
import React, { Component } from 'react';
​
class ConditionalRendering extends Component {
  render() {
    const isLoggedIn = this.props.isLoggedIn;
​
    if (isLoggedIn) {
      return <WelcomeMessage />;
    } else {
      return <LoginPrompt />;
    }
  }
}
​
const WelcomeMessage = () => {
  return <h1>Welcome back!</h1>;
};
​
const LoginPrompt = () => {
  return <h1>Please log in to continue.</h1>;
};
​
export default ConditionalRendering;
</pre>

#### Using ternary operator
The ternary operator is a concise way to express conditional logic in React components. It consists of a condition followed by a question mark (?), a value to return if the condition is true, and a value to return if the condition is false. This method is often used for rendering components conditionally based on a single condition.


<pre>
import React from 'react';
​
const ConditionalRendering = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn ? (
        <WelcomeMessage />
      ) : (
        <LoginPrompt />
      )}
    </div>
  );
};
​
const WelcomeMessage = () => {
  return <h1>Welcome back!</h1>;
};
​
const LoginPrompt = () => {
  return <h1>Please log in to continue.</h1>;
};
​
export default ConditionalRendering;
</pre>

#### Using Logical && Operator
The logical && operator is another compact way to conditionally render elements in React. It evaluates the expression on its left-hand side and, if true, renders the element on its right-hand side. This technique is particularly useful for rendering components based on boolean conditions.

<pre>
import React from 'react';
​
const ConditionalRendering = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn && <WelcomeMessage />}
      {!isLoggedIn && <LoginPrompt />}
    </div>
  );
};
​
const WelcomeMessage = () => {
  return <h1>Welcome back!</h1>;
};
​
const LoginPrompt = () => {
  return <h1>Please log in to continue.</h1>;
};
​
export default ConditionalRendering;
</pre>

## Advantages of using conditional rendering
1. Dynamic Content: Conditional rendering allows developers to display content dynamically based on specific conditions. This enables the creation of dynamic user interfaces that adapt to different states and user interactions, enhancing user engagement and usability.
2. Improved User Experience: By showing or hiding elements based on conditions, conditional rendering helps improve the overall user experience. Whether it's displaying loading indicators during data fetching or showing error messages when an operation fails, conditional rendering enhances user feedback and reduces confusion.
3. Reduced Complexity: Conditional rendering simplifies the logic of rendering components by eliminating the need for manual DOM manipulation or complex if/else statements. This leads to cleaner and more maintainable code, reducing development time and effort.
4. Enhanced Performance: Rendering only the necessary components based on conditions can improve application performance. By avoiding unnecessary rendering cycles, conditional rendering helps optimize performance, especially in large-scale applications, resulting in faster load times and smoother interactions.
5. Customization and Personalization: Conditional rendering enables developers to customize the user interface based on user preferences, roles, or other contextual factors. This enables personalized experiences for individual users or segments, increasing satisfaction and retention.