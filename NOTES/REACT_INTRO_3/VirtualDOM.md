# Virtual DOM

### Document Object Model ( DOM )
DOM (Document Object Model) is a programming interface for web documents. It represents the structure of HTML or XML documents as a tree-like model where each node represents a part of the document. The DOM provides a way for programs to dynamically access and update the content, structure, and style of web pages.

### Virtual DOM

The Virtual DOM is a concept used in various frontend libraries and frameworks, notably React.js, to optimize the performance of web applications by minimizing the number of direct manipulations to the actual DOM. It works by maintaining a lightweight, in-memory representation of the actual DOM known as the virtual DOM.

There are 2 important concepts used by which React handles creation of DOM,

#### 1. Reconciliation

Reconciliation in React is the process by which the framework efficiently updates the user interface in response to changes in application state. This mechanism revolves around React's Virtual DOM, a lightweight representation of the actual DOM. When a component's state changes, React re-renders the component and its children, comparing the new Virtual DOM with the previous one through a diffing algorithm. This comparison identifies the minimal set of changes needed to update the actual DOM, ensuring optimal performance by only applying necessary updates. Reconciliation plays a crucial role in enhancing the responsiveness and efficiency of React applications, abstracting away the complexities of DOM manipulation and providing developers with a streamlined approach to building dynamic user interfaces.



#### 2. Diffing Algorithm

The diffing algorithm in React is a core mechanism responsible for efficiently updating the user interface by identifying the minimal set of changes needed to reconcile the Virtual DOM with the actual DOM. When a component's state changes, React re-renders the component and its children, generating a new Virtual DOM tree. The diffing algorithm then compares this new Virtual DOM tree with the previous one, recursively traversing both trees to identify any differences in their structure or content. By strategically analyzing the changes, such as additions, removals, or updates of elements, React determines the most efficient way to update the actual DOM. This process helps minimize unnecessary updates, optimizing performance and ensuring a responsive user experience in React applications.