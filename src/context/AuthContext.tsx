import React, { createContext, useReducer, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import proximityApi from '../api/proximityApi';

import { User, LoginResponse, DataResponse } from '../interfaces/appInterfaces';
import { authReducer, AuthState } from "./authReducer";

type AuthContextProps = {
    errorMessage: string;
    // token: string | null;
    user: User | null;
    status: 'checking' | 'authenticated' | 'not-authenticated';
    signIn: ( loginData: User ) => void;
    logOut: () => void;
    removeError: () => void;
}

const authInitialState: AuthState = {
    status: 'checking',
    user: null,
    errorMessage: ''
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: any) => {

    const [state, dispatch] = useReducer(authReducer, authInitialState);

    useEffect(()=>{
        checkToken();
    }, [])
    
    const checkToken = async () => {  
        const token = await AsyncStorage.getItem('token');
        console.log('token de Auth', token);
        
        //No token, no autenticado
        if (!token) return dispatch({type: 'notAuthenticated'});

        dispatch({
            type: 'signUp'
        });
    }

    const signIn = async( {user, password}:User ) => {
        try {
            const resp = await proximityApi.post<LoginResponse>('/login', { user, password });
            
            if(resp.data.codeStatus === "0x03" ){
                return dispatch({ 
                    type: 'addError',
                    payload: resp.data.message || "Credenciales Incorrectas"
                });
            }
            
            dispatch({
                type: 'signUp'
            });
            
            await AsyncStorage.setItem('token', resp.data.data);

        } catch (error) {
            console.log(error);
            dispatch({
                type: 'addError',
                payload: 'Credenciales incorrectas' 
            });
        }
    };

    const logOut = async() => {
        await AsyncStorage.removeItem('token');

        dispatch({type: 'logout'});
    };
    
    const removeError = () => {
        dispatch( {type: 'removeError'});
    };
    
    return (
        <AuthContext.Provider value={{
            ...state,
            signIn,
            logOut,
            removeError
        }}>
            { children }
        </AuthContext.Provider>
    )
}