import React from 'react';

// un custom hooks empieza con use
function useLocalStorage(itemName,initialValue){
    const [item, setItem] =React.useState(initialValue);

    const [loading, setLoading] =React.useState(true);
    const [error, setError] =React.useState(false);

    // SImulamos asincronismo con el setTimeout
    React.useEffect(()=>{
      setTimeout(()=>{
        try {
          const localStorageItem=localStorage.getItem(itemName);
          let parsedItem;
  
          if (!localStorageItem){
            localStorage.setItem(itemName,JSON.stringify(initialValue));
            parsedItem=[];
          }else{
            parsedItem=JSON.parse(localStorageItem);
            setItem(parsedItem);
          }
  
          setLoading(false);
        } catch (error) {
          setLoading(false);
          setError(true);
        } 
      },2000);
    },[]);
  
    
    const saveItem = (newItem) =>{
      localStorage.setItem(itemName,JSON.stringify(newItem));
      setItem(newItem);
    };
  
    return {item,saveItem,loading,error};
  }

  export {useLocalStorage};