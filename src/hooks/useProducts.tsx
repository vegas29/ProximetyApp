import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import proximityApi from '../api/proximityApi';

export const useProducts = () => {

    useEffect(()=>{
        checkToken();
    }, [])
    
    const checkToken = async () => {  
        const token:any = await AsyncStorage.getItem('token');
        console.log('token de Auth2', JSON.parse(token));
    }
    
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();    
    }, [products])

    const getProducts = async() => {
        const resp = await proximityApi.post('/getproducts', {userToken: "xYzqNrv8CYYUd3dv"});
        setProducts(resp.data);
        setIsLoading(false);
    }
    
    return {
        isLoading,
        products
    }
}
