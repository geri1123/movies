
import React  from "react";
import { useEffect , useState } from "react";
import { createContext } from "react";



export  const MoviesContext = createContext(); 

  const getDefaultCart=()=>{
    //To save the movie in localstorage
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        return JSON.parse(savedCart);
      }
       let cart={};
       for(let index=0 ; index<300+1 ; index++){
         cart[index]=0;
       } 
       return cart;
      }


  const MoviesContextProvider = (props) => {
    
    const [loading , setLoading]=useState(true)
    const [allProduct , setAllProduct]=useState([]);
    const [CartItem , setCartItem]=useState(getDefaultCart());
    useEffect(() =>{
        fetch('http://localhost:2000/allproducts')
        .then((res)=>res.json())
        .then((data)=>{
          setAllProduct(data);
          setLoading(false);
        })
    }, []);

     const saveCartToLocalStorage = (cart) => {
       localStorage.setItem('cart', JSON.stringify(cart));
     };
    const AddToCart = (itemId) => {
      setCartItem((prev) => {
        const newCart = { ...prev, [itemId]: prev[itemId] + 1 };
        saveCartToLocalStorage(newCart);
        return newCart;
      });
    };
  
    const RemoveFromCart = (itemId) => {
      setCartItem((prev) => {
        const newCart = { ...prev, [itemId]: prev[itemId] - 1 };
        saveCartToLocalStorage(newCart);
        return newCart;
      });
    };
    // const AddToCart = (itemId) => {
      
    //     setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    //     console.log(CartItem);
      
    // };
    // const RemoveFromCart=(itemId)=>{
    //   setCartItem((prev)=>({...prev , [itemId]:prev[itemId]-1}))
     
    // };
   
   
    
    const getTotalCartItem=()=>{
        let totalItem=0;
        for(const item in CartItem){
            if(CartItem[item]>0){
              totalItem+=CartItem[item];

            }
            
        }return totalItem;
    }

    const contextvalue={loading , allProduct , RemoveFromCart  ,CartItem ,getTotalCartItem , AddToCart};
    return (
      <MoviesContext.Provider value={contextvalue}>
        {props.children}
      </MoviesContext.Provider>
    )
  }
  
  export default MoviesContextProvider;
  
