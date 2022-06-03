import React, { useContext, useState } from 'react'

import { StackScreenProps } from '@react-navigation/stack';

import { Image, Pressable, Text, View, Alert, Modal } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import LinearGradient from 'react-native-linear-gradient';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft, faArrowRightFromBracket, faCartShopping, faChevronLeft, faCircleQuestion, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../context/AuthContext';
import { profileStyles } from '../theme/profileTheme';

interface Props extends StackScreenProps<any, any> {}

export const ProfileScreen = ({navigation} : Props) => {

    const [modalVisible, setModalVisible] = useState<boolean>(false);

    {/* Botón de volver */}
    const handleReturn = () => {
        navigation.replace('HeadquartersNavigator');
    }
    
    const {logOut} = useContext(AuthContext);
    
    const handleLogout = () => {
        logOut();

        setTimeout(()=>{
            navigation.replace('LoginScreen');
        }, 100);
    }


    return (
        <View style={profileStyles.header}>

            <View style={profileStyles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert("Saliendo...");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={profileStyles.centeredView}>
                        <View style={profileStyles.modalView}>
                            <Text style={profileStyles.modalText}>¿Está seguro de salir?</Text>
                            <Text style={profileStyles.modalParr}>Confirme su respuesta, por favor</Text>

                            <FontAwesomeIcon style={profileStyles.modalIcon}  size={50} icon={ faCircleQuestion }/>

                            <View style={profileStyles.pressableFlex}>
                                <Pressable
                                    style={[profileStyles.button, profileStyles.buttonClose]}
                                    onPress={handleLogout}
                                >
                                    <Text style={profileStyles.textStyle}>Salir</Text>
                                </Pressable>
                                <Pressable
                                    style={[profileStyles.button, profileStyles.buttonCancel]}
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <Text style={profileStyles.textStyle}>Cancelar</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>

            <View style={profileStyles.flex}>
                <View style={profileStyles.containerCircle}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                    >
                        <Pressable onPress={handleReturn}>
                            <FontAwesomeIcon style={profileStyles.icono} size={20} icon={ faChevronLeft }/>
                        </Pressable>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={profileStyles.title}>Perfil</Text>
                </View>
                <View style={profileStyles.containerCircleLogout}>
                    <Pressable onPress={() => setModalVisible(!modalVisible)}>
                        <FontAwesomeIcon style={profileStyles.icono} size={20} icon={ faArrowRightFromBracket } />
                    </Pressable>
                </View>
            </View>

            <View style={profileStyles.profile}>
                <View style={profileStyles.imageProfile}>    
                    <View>
                        <Text style={profileStyles.textUserName}>¡Hola! Invitado</Text>
                    </View>  
                </View>

                <View style={profileStyles.data}>
                    
                    <View style={profileStyles.containerCards}>
                        <View style={profileStyles.cardImage}>
                            <Image
                                style={profileStyles.imageAccount}
                                source={require('../assets/img/account.png')}
                            />
                            <Text style={profileStyles.textInfo}>Crea una cuenta ahora mismo, para que puedas disfrutar de nuestros beneficios.</Text>
                        </View>
                    </View>

                </View>
            </View>

        </View>
    )
}
