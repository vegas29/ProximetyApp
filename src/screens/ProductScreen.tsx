import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { Image, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { DrawerStackParams } from '../navigator/DrawerNavigation';
import { Footer } from '../components/UI/Footer';
import { Header } from '../components/UI/Header';
import { productStyles } from '../theme/productTheme';

interface Props extends StackScreenProps <DrawerStackParams, 'ProductScreen'>{};

export const ProductScreen = ({ route } : Props) => {

    const {id, title, image, longDescription} = route.params;
    return (
        <SafeAreaView
            style={productStyles.containerMain}
        >

            <ScrollView
                contentContainerStyle={productStyles.scrollViewContainer}
            >
                <Header/>

                <View style={productStyles.container}>
                    <Text style={productStyles.title}>{title}</Text>
                    <Image
                        style={productStyles.logo}
                        source={{ uri: image}}
                    />

                    <Text style={productStyles.description}>{longDescription}</Text>
                </View>

                <Footer/>
            </ScrollView>
        </SafeAreaView>
    )
}
