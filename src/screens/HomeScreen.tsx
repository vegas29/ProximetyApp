import React from 'react'
import { ActivityIndicator, FlatList, Image, Pressable, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { homeStyles } from '../theme/homeTheme'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft, faCartShopping, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { MyFacebookLoader } from '../components/UI/MyFacebookLoader';
import { COLORS } from '../settings/colors';
import { useProducts } from '../hooks/useProducts';
import { Header } from '../components/UI/Header';
import { Footer } from '../components/UI/Footer';


export const HomeScreen = () => {

    const { products, isLoading } = useProducts();

    //FlatList Footer Component
    const renderFooterComponent = () => (
        <View style={homeStyles.activityIndicator}>
            <ActivityIndicator size="large" color={COLORS.PRIMARYLIGHT2} />
        </View>
    );

    return (
        <SafeAreaView
            style={homeStyles.container}
        >   
            <Header/>
            <ScrollView
                contentContainerStyle={homeStyles.scrollViewContainer}
            >

                {isLoading ? (
                    <View style={homeStyles.loader}>
                        <MyFacebookLoader/>
                    </View>
                ) : (
                    <View style={homeStyles.containerCards}>
                        <Text>Aqui va la flatlist</Text>
                        {/* <FlatList
                            data={products}
                            renderItem={({item}) => (
                                
                                <View 
                                    key={item._id}  
                                >
                                    <TouchableOpacity
                                        style={homeStyles.card}
                                        activeOpacity={0.8}
                                        onPress={ () => navigation.navigate('HeadquarterScreen', {
                                            id: item._id,
                                            name: item.name
                                        }) }
                                    >

                                        {item?.logo ? (
                                            <Image
                                                style={homeStyles.logo}
                                                source={{ uri: item.logo}}
                                            />
                                        ) : (    
                                            <Image
                                                style={homeStyles.logo}
                                                source={{ uri: 'https://res.cloudinary.com/pruebatifiapiimg/image/upload/v1653136758/default-placeholder_bi3f8p.png'}}
                                            />
                                        )}
                                        <View style={homeStyles.details}>
                                            <View style={homeStyles.detailsText}>
                                                <Text style={homeStyles.titleCard}>{item.name}</Text>
                                                <View style={homeStyles.flexContain}>
                                                    <FontAwesomeIcon style={homeStyles.iconoStatus} color={item.openOrClose === "Abierto" ? COLORS.GREENLIGHT : COLORS.REDLIGHT } size={20} icon={ faClock }/>
                                                    {item.openOrClose === "Abierto" ? (
                                                        <Text style={homeStyles.badgeGreen}>{item.openOrClose}</Text>
                                                    ) : (
                                                        <Text style={homeStyles.badgeRed}>{item.openOrClose}</Text>
                                                    )}
                                                </View>
                                                <View style={homeStyles.flexContain}>
                                                    <FontAwesomeIcon style={homeStyles.iconoCard} size={20} icon={ faUtensils }/>     
                                                    <Text style={homeStyles.comment} numberOfLines={1}>{item?.allyId.description}</Text>
                                                </View>
                                                <View style={homeStyles.flexContain}>
                                                    <FontAwesomeIcon style={homeStyles.iconoCardSecondary} size={20} icon={ faLocationDot }/>     
                                                    <Text>{item.directionId}</Text>
                                                </View>
                                            </View>
                                            <View style={homeStyles.flexIcons}>
                                                <TouchableOpacity
                                                    activeOpacity={0.8}
                                                >
                                                    <Pressable>
                                                        <FontAwesomeIcon style={homeStyles.iconoAction} color={COLORS.GRAYDARK}  size={20} icon={ faChevronRight }/>
                                                    </Pressable>
                                                </TouchableOpacity>
                                                <TouchableOpacity
                                                    activeOpacity={0.8}
                                                >
                                                    <Pressable>
                                                        <FontAwesomeIcon style={homeStyles.iconoAction} color={COLORS.REDLIGHT} size={20} icon={ faHeart }/>
                                                    </Pressable>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )}
                            ListFooterComponent={renderFooterComponent}
                            keyExtractor={item => item._id}
                        /> */}
                    </View>
                )}

            </ScrollView>
            <Footer/>
        </SafeAreaView>
    )
}
