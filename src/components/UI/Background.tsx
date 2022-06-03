import React from 'react'
import { View } from 'react-native';
import { COLORS } from '../../settings/colors';

export const Background = () => {
    return (
        <View 
            style={{
                position: 'absolute',
                backgroundColor: COLORS.GRAY,
                top: -250,
                width: 1000,
                height: 1200
            }}
        />
    )
}
