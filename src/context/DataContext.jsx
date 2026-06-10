import axios from "axios";
import { createContext, useCallback, useContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
    const [data, setData] = useState([])

    // fetching all products from api
    const fetchAllProducts = useCallback(async () => {
        try {
           const res = await axios.get('https://fakestoreapi.com/products?limit=150')
           console.log(res);
           const productsData = res.data
           setData(productsData)
           
        } catch (error) {
            console.log(error);

        }
    }, [])

    const getUniqueCategory = (data, property) => {
        const newVal = data?.map((curElem) => curElem[property]).filter(Boolean) ?? []
        return ["All", ...new Set(newVal)]
      }
    
      const categoryOnlyData = getUniqueCategory(data, "category")
      const brandOnlyData = getUniqueCategory(data, "brand")
    return <DataContext.Provider value={{ data, setData,fetchAllProducts, categoryOnlyData, brandOnlyData }}>
        {children}
    </DataContext.Provider>
}

export const useData = () => useContext(DataContext)