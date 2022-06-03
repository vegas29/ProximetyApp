import React from 'react'
import { Image, Text, View } from 'react-native'
import { headerStyles } from '../../theme/headerTheme'

export const Header = () => {
    return (
        <View style={headerStyles.imageContainer}>
            <Image
                source={require('../../assets/img/logotestapp.png')}
                style={headerStyles.image}
            />
        </View>
    )
}
