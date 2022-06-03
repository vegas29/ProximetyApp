import React from 'react'
import { Image, Text, View } from 'react-native'
import { footerStyles } from '../../theme/footerTheme';

export const Footer = () => {
    return (
        <View>
            <Text style={footerStyles.textFooter}>Proximate App</Text>
        </View>
    )
}
