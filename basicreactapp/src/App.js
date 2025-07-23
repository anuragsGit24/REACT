//import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
//import { use, useState } from "react";

//JSX - Syntax extension of JS
// const name = "Anurag";
//const element = <h2>I am awesome</h2>;

//const element = '<h1>I am awesome</h1>';
//React - declarative by nature and javascript is imperative language by nature

//Functional Component :
// function MyButton(){
//   return(
//     <button>Submit Button</button>
//   )
// }

//REACT INTRO - 01
// function MyApp() {
//markup
// return (
//   //react fragments
//   <>
//     <div className="App">
//       <h1>Hello my name is {name}</h1>
//       <p>My Button Component</p>
//       <Button />
//       <div>
//         <Search />
//       </div>
//       {element}
//     </div>
//     <div>
//       <p>I am a student at SPIT</p>
//     </div>
//     {/* <img src="...."/> */}
//   </>

//REACT INTRO - 02

// const Button = () => <button>Submit Button</button>;
// const Search = () => <input placeholder="Search Your Favourite Product" />;
// function MyApp() {
//   return (
//     <div className="App">
//       <h1>Hello my name is {name}</h1>
//       <Button />
//       <div>
//         <Search />
//       </div>
//     </div>
//   );
// }

// const Header = () => {
//   return (
//     <div style = {{backgroundColor: 'gray', display: 'flex', flex: '1 0 auto'}}>
//       <h1 className="h1">Shopify App</h1>
//       <input placeholder="search" />
//       <ul>
//         <li>Home</li>
//         <li>About</li>
//         <li>Contact</li>
//       </ul>
//     </div>
//   );
// };

// let count = 0;
// let inputText = ''
// const onIncrementClick = () =>{
//   count = count + 1;
//   console.log({count});
// }

// const onSearchChange = (event) => {
//   console.log(event.target.value);
//   inputText = event.target.value;
// }

// function MyApp() {
//   return (
//     // <Header />
//     <>
//       <h1>JSX</h1>
//       <button id="btn" onClick={onIncrementClick}>INCREMENT</button>
//       {count}
//       <div><input onChange = {onSearchChange}placeholder="Search...."/></div>
//       {inputText}
//     </>
//   );
// }

// ***** REACT INTRO-02-B *****

// const isAdmin = true;
// const isLoading = true;
// const products = [
//   { id: "1", item: "Shorts" },
//   { id: "2", item: "Shirts" },
//   { id: "3", item: "T-Shirts" },
//   { id: "4", item: "Pants" },
// ];

// function Loader() {
//   return <h3>Loading......</h3>;
// }

// function MyApp() {
//   return (
//     <>
//       <h1>Hello and Welcome</h1>
//       {isAdmin ? (
//         <h2>This is the Admin portal</h2>
//       ) : (
//         <h3>This is the User Portal</h3>
//       )}

//       {isLoading ? <Loader /> : <h3>Page Loaded</h3>}
//       <ul>
//         {
//         products.map((product) => {
//           return (
//             <li className= {`${product.id % 2 === 0 ? 'bg-color' : ''} pd-8px`} key={product.id} >
//               {product.item}
//             </li>
//           );
//         })
//         }
//       </ul>
//     </>
//   );
// }


// ***** USE-STATE REACT *****

function MyApp(){
  const[count, setCount] = useState(230);  //this are just initial values
  const[inputText, setInputText] = useState('Anurag');

  const onIncrementClick = () => {
  //two times doesnt mean two times it only updates one time as it renders once only 
    setCount((prevCount) => {
      return prevCount + 1;
    })
    setCount(prevCount => prevCount + 1);    // re-rendering using state variables = this increase by 2 
    // setCount(prevCount => prevCount + 1) 
  }

  const onDecrementClick = () => {
    setCount(count - 1);    // re-rendering using state variables
    // console.log({count});
  }

  const onSearchChange = (event) => {
    // console.log(event.target.value);
    setInputText(event.target.value);   //re-rendering 
  }

  return (
    <>
    <h1>JSX</h1>
    <button onClick={onIncrementClick}> INCREMENT </button>
    <button onClick={onDecrementClick}> DECREMENT </button>
    <div>The current count is {count}</div>
    <div><input onChange={onSearchChange} placeholder="Search..."/></div>
    <div>{inputText}</div>
    </>
  )
}

export default MyApp;
