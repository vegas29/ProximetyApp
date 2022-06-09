import React from 'react'
import { ActivityIndicator, FlatList, Image, Pressable, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { homeStyles } from '../theme/homeTheme'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft, faCartShopping, faChevronRight, faHeart, faLocationDot, faTextHeight, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { MyFacebookLoader } from '../components/UI/MyFacebookLoader';
import { COLORS } from '../settings/colors';
import { useProducts } from '../hooks/useProducts';
import { Header } from '../components/UI/Header';
import { Footer } from '../components/UI/Footer';
import { DrawerStackParams } from '../navigator/DrawerNavigation';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<DrawerStackParams, 'HomeScreen'> {}

export const HomeScreen = ({navigation} : Props) => {

    const { products, isLoading }:any = useProducts();

    console.log('desde', products)
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

                        <FlatList
                            data={products}
                            renderItem={({item}) => (
                                
                                <View 
                                    key={item._id}  
                                >
                                    <TouchableOpacity
                                        style={homeStyles.card}
                                        activeOpacity={0.8}
                                        onPress={ () => navigation.navigate('ProductScreen', {
                                            id: item._id,
                                            title: item.title,
                                            image: item.image,
                                            longDescription: item.longDescription
                                        }) }
                                    >

                                        {item?.image ? (
                                            <Image
                                                style={homeStyles.logo}
                                                source={{ uri: item.image}}
                                            />
                                        ) : (    
                                            <Image
                                                style={homeStyles.logo}
                                                source={{ uri: 'https://res.cloudinary.com/pruebatifiapiimg/image/upload/v1653136758/default-placeholder_bi3f8p.png'}}
                                            />
                                        )}
                                        <View style={homeStyles.details}>
                                            <View style={homeStyles.detailsText}>
                                                <Text style={homeStyles.titleCard}>{item.title}</Text>
                                                <View style={homeStyles.flexContain}>
                                                    <FontAwesomeIcon style={homeStyles.iconoCard} size={20} icon={ faTextHeight }/>     
                                                    <Text style={homeStyles.comment} numberOfLines={3}>{item.shortDescription}</Text>
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
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )}
                            ListFooterComponent={renderFooterComponent}
                            keyExtractor={item => item._id}
                        />

                        {/* {products.map((product:any) => (
                            <Text>{product.title}</Text>
                        ))}

                        <Text>
                            {JSON.stringify(products, null, 5)}
                        </Text> */}
                    </View>
                )}

            </ScrollView>
            <Footer/>
        </SafeAreaView>
    )
}
