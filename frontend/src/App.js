import React, { useState, useEffect, useCallback } from 'react';

// import Header from "./components/Header/Header";
// import NewProduct from "./components/Products/NewProduct";
// import ProductList from "./components/Products/ProductList";
import './App.css';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

function App() {
  // const [loadedProducts, setLoadedProducts] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     setIsLoading(true);
  //     const response = await fetch('http://localhost:5000/products');

  //     const responseData = await response.json();

  //     setLoadedProducts(responseData.products);
  //     setIsLoading(false);
  //   };

  //   fetchProducts();
  // }, []);

  // const addProductHandler = async (productName, productPrice) => {
  //   try {
  //     const newProduct = {
  //       title: productName,
  //       price: +productPrice, // "+" to convert string to number
  //     };
  //     let hasError = false;
  //     const response = await fetch('http://localhost:5000/product', {
  //       method: 'POST',
  //       body: JSON.stringify(newProduct),
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });

  //     if (!response.ok) {
  //       hasError = true;
  //     }

  //     const responseData = await response.json();

  //     if (hasError) {
  //       throw new Error(responseData.message);
  //     }

  //     setLoadedProducts((prevProducts) => {
  //       return prevProducts.concat({
  //         ...newProduct,
  //         id: responseData.product.id,
  //       });
  //     });
  //   } catch (error) {
  //     alert(error.message || 'Something went wrong!');
  //   }
  // };

  const [courseGoals, setCourseGoals] = useState([
    { id: 'cg1', text: 'Finish the Course' },
    { id: 'cg2', text: 'Learn all about the Course Main Topic' },
    { id: 'cg3', text: 'Help other students in the Course Q&A' },
  ]);

  const addGoal = useCallback((goal) => {
    setCourseGoals((preVal) => [...preVal, goal]);
  }, []);

  return (
    // <React.Fragment>
    //   {/* <Header />
    //   <main>
    //     <NewProduct onAddProduct={addProductHandler} />
    //     {isLoading && <p className="loader">Loading...</p>}
    //     {!isLoading && <ProductList items={loadedProducts} />}
    //   </main> */}
    // </React.Fragment>
    <div className="course-goals">
      <h2> Course Goals</h2>
      <NewGoal onAddGoal={addGoal} />
      <GoalList goals={courseGoals} />
    </div>
  );
}

export default App;
