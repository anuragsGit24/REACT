// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

const allBrands = [
  {id : 1, brandName: "Puma", count : 0},
  {id : 2, brandName: "Nike", count : 0},
  {id : 3, brandName: "Adidas", count : 0},
  {id : 4, brandName: "Fila", count : 0},
  {id : 5, brandName: "Rebook", count : 0}
]

function App() {
  const [search, SetSearch] = useState('');
  const [brand, SetBrand] = useState(allBrands);
  const [count, setcount] = useState(0);
 
  const onSearchChange = (event) => {
    const input = event.target.value;
    SetSearch(input);
    
    const filteredBrands = input ?.length > 0 ? brand.filter(brand =>  brand.brandName.toLowerCase().includes(input.toLowerCase())) : allBrands;
    SetBrand(filteredBrands);
  }

  const [selectedBrand, setselectedBrand] = useState([]);

  const onAddtoCartClick = (id) => {
    
    const exitingIndex = selectedBrand.findIndex(item => item.id === id)
    const selectedItem = allBrands.find(item => item.id === id);

    if(exitingIndex !== -1){
      const updateBrands = [...selectedBrand];
      updateBrands[exitingIndex].count += 1;
      setselectedBrand(updateBrands);
    }else{
      setselectedBrand([...selectedBrand, {selectedItem, count : 1}]);
    }

    setcount(count + 1)
  }

  const onClickRemove = (id) => {
    const updateCart = selectedBrand.map(item => {
      if(item.id === id){
        return {...item, count : item.count - 1};
      }
      return item;
    }).filter(item => item.count > 0);

    // const selectedItem = selectedBrand.filter(item => item.id !== id);
    setselectedBrand(updateCart);
    setcount(count - 1);
  }

  return (
   <>
    {/* this is for ex-01 */}
    <input value={search} onChange={onSearchChange} placeholder='Search...' />
    <ul>
      {
        brand.map(brand => <li key={brand.id}>{brand.brandName}</li>)
      }
    </ul>
    
    {/* //this is for add to cart feature */}
    <div>
      <p>Add Brand to your Cart</p>
      {
        allBrands.map(brand => <div>
          <span>{brand.brandName}</span>
          <button onClick={() => onAddtoCartClick(brand.id)}>Add to Cart</button>
          </div>)
      }
    </div>
    <div>
      <p>Your Cart</p>
      {
        selectedBrand && selectedBrand.map(brand => (<p key={brand.id}>
          {brand.brandName} - Quantity : {brand.count} - 
          <button onClick={() => onClickRemove(brand.id)}>Remove</button>
          </p>
          ))
      }
    </div>

   </>
  );
}

export default App;
