
import React  from "react";
import { useEffect , useState } from "react";
import { createContext } from "react";



export  const MoviesContext = createContext(); 

  const getDefaultCart=()=>{
       let cart={};
       for(let index=0 ; index<300+1 ; index++){
         cart[index]=0;
       } 
       return cart;
      }


  const MoviesContextProvider = (props) => {
    
    
    const [allProduct , setAllProduct]=useState([]);
    const [CartItem , setCartItem]=useState(getDefaultCart());
    useEffect(() =>{
        fetch('http://localhost:8000/movies')
        .then((res)=>res.json())
        .then((data)=>{setAllProduct(data)})
    }, []);

    
    const AddToCart = (itemId) => {
      
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        console.log(CartItem);
      
    };
    const RemoveFromCart=(itemId)=>{
      setCartItem((prev)=>({...prev , [itemId]:prev[itemId]-1}))
    };

   
    
    const getTotalCartItem=()=>{
        let totalItem=0;
        for(const item in CartItem){
            if(CartItem[item]>0){
              totalItem+=CartItem[item];

            }
            
        }return totalItem;
    }

    const contextvalue={allProduct , RemoveFromCart  ,CartItem ,getTotalCartItem , AddToCart};
    return (
      <MoviesContext.Provider value={contextvalue}>
        {props.children}
      </MoviesContext.Provider>
    )
  }
  
  export default MoviesContextProvider;
  
