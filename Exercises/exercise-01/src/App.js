// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

const allBrands = [
  {id : 1, brandName: "Puma"},
  {id : 2, brandName: "Nike"},
  {id : 3, brandName: "Adidas"},
  {id : 4, brandName: "Fila"},
  {id : 5, brandName: "Rebook"}
]

function App() {
  const [search, SetSearch] = useState('');
  const [brand, SetBrand] = useState(allBrands);

  const onSearchChange = (event) => {
    const input = event.target.value;
    SetSearch(input);
    
    const filteredBrands = input ?. length > 0 ? brand.filter(brand =>  brand.brandName.toLowerCase().includes(input.toLowerCase())) : allBrands;
    SetBrand(filteredBrands);
  }

  return (
   <>
    <input value={search} onChange={onSearchChange} placeholder='Search...' />
    <ul>
      {
        brand.map(brand => <li key={brand.id}>{brand.brandName}</li>)
      }
    </ul>
   </>
  );
}

export default App;
