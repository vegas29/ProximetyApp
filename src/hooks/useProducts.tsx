import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import proximityApi from '../api/proximityApi';

export const useProducts = () => {

    const [token, setToken] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();    
    }, [])

    const getProducts = async() => {

        const token:any = await AsyncStorage.getItem('token');

        const datos = {
            userToken: token
        }

        const resp = await proximityApi.post('/getproducts', datos);
        console.log(resp.data.data)
        const respParse = JSON.parse(resp.data.data)
        const products = respParse.products;
        console.log('products', products)
        setProducts(products);
        setIsLoading(false);
    }
    
    return {
        isLoading,
        products
    }
}
