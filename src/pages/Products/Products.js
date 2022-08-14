import axios from 'axios';
import { useEffect, useState } from 'react';
import './products.css'
export const Products = () => {
	const [productsdata, setProductsdata] = useState([]);
	const [categoryoption, setCategoryoption] = useState([]);
  const [optiondata , setOptiondata] = useState('');
  

	useEffect(() => {
    if(optiondata.length){
      axios
      .get(`https://fakestoreapi.com/products/category/${optiondata}`)
			.then((res) => setProductsdata(res.data))
			.catch((err) => console.log(err));
    }else  {
      axios
			.get(`https://fakestoreapi.com/products`)
			.then((res) => setProductsdata(res.data))
			.catch((err) => console.log(err));
    }

	}, [optiondata]);


  useEffect(()=>{
    axios
    .get(`https://fakestoreapi.com/products/categories`)
    .then((res) => setCategoryoption(res.data))
    .catch((err) => console.log(err));
  },[])

	return (
		<>
			<h1>Products page</h1>
      <select 
      defaultValue='' onChange={(evt) => {
        setOptiondata(evt.target.value)
      }}>
      <option value="" disabled>Categories</option>
      {categoryoption.length && categoryoption.map((e)=>(
        <option key={e} value={e}>{e}</option>
      ) )}
      </select>
    
			<div className='products'>

				{productsdata.length && productsdata.map((e) => (
					<li key={e.id} className='products-item'>
            <img src={e.image} alt="" />
            <h1>{e.id}</h1>
            <p>Title:<span>{e.title}</span></p>
            <p>Prise:<span>{e.price}</span></p>
            <p>Category: <span>{e.category}</span></p>
            <p>Rating: <span>{e.rating.rate}</span> X <span>{e.rating.count}</span></p>
          </li>
				))}
			</div>

			{/* {productsdata.map((element) => (
				<h1>{element.title}</h1>
			))} */}
		</>
	);
};
