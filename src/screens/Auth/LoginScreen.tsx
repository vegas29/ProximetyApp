import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useEffect, useState } from 'react';
import { Alert, Image, Keyboard, KeyboardAvoidingView, Platform, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Background } from '../../components/UI/Background';
import { AuthContext } from '../../context/AuthContext';
import { useForm } from '../../hooks/useForm';
import { loginStyles } from '../../theme/loginTheme';
import LottieView from "lottie-react-native";
import { loaderStyles } from '../../theme/loaderTheme';


interface Props extends StackScreenProps<any, any> {}

export const LoginScreen = ({navigation}: Props) => {

    const { signIn, errorMessage, removeError } = useContext ( AuthContext );

    //Loader
    const [visible, setVisible] = useState<boolean>(false)

    const {user, password, onChange} = useForm({
        user : '',
        password: ''
    });

    useEffect(() => {
        if(errorMessage.length === 0) return;

        Alert.alert(
            'Login incorrecto', 
            errorMessage,
            [
                {
                    text: 'OK',
                    onPress: removeError
                }
            ]
        );

        setVisible(!visible);
    }, [errorMessage])

    const onSubmit = () =>{
        Keyboard.dismiss();

        if (user === '' || user.length === 0) {
            Alert.alert(
                'Login incorrecto', 
                'El campo de usuario es requerido'
            );
            return false;

        } else if (password === '' || password.length === 0) {
            Alert.alert(
                'Login incorrecto', 
                'El campo de contraseña es requerido'
            );
            return false;
        }

        setVisible(!visible);

        setTimeout(()=>{
            signIn({user, password});
        }, 500)
        
        setVisible(!visible);

    }

    return (
        <>
            <Background/>
            <KeyboardAvoidingView
                style={{flex:1}}
                behavior={(Platform.OS) === 'ios' ? 'padding' : 'height'}
            >   
                <View style={loginStyles.container}>
                    
                    <Text style={loginStyles.textTitle}>Inicio de sesión</Text>

                    {visible && (
                        <>
                            <LottieView
                                source={require('../../assets/loaders/squares.json')}
                                style={loaderStyles.lottie}
                                autoPlay
                            />

                            <Text style={loaderStyles.text}>Cargando...</Text>
     
                        </>
                    )}
                
                    <TextInput
                        placeholder='Ingrese su usuario'
                        placeholderTextColor="#000"
                        style={loginStyles.input}
                        autoCapitalize="none"
                        autoCorrect={ false }
                        onChangeText={(value)=>onChange(value, 'user')}
                        value={user}
                    />

                    <TextInput
                        placeholder='Password'
                        placeholderTextColor="#000"
                        secureTextEntry
                        style={loginStyles.input}
                        autoCapitalize="none"
                        autoCorrect={ false }
                        onChangeText={(value)=>onChange(value, 'password')}
                        value={password}
                    />

                    {/* Boton Login */}
                    <View style={loginStyles.buttonContainer}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={loginStyles.button}
                            onPress={onSubmit}
                        >
                            <Text style={loginStyles.buttonText}>Ingresar</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={loginStyles.newUserContainer}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                        >
                            <Text style={loginStyles.textNewUser}>¿No tienes una cuenta?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </>
    )
}
