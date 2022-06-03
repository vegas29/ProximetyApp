import React from 'react'
import { View } from 'react-native'
import { Facebook } from 'react-content-loader/native'
import { COLORS } from '../../settings/colors'

export const MyFacebookLoader = () => (
    <View>
        <Facebook backgroundColor={COLORS.GRAYDARK} />
        <Facebook backgroundColor={COLORS.GRAYDARK} />
        <Facebook backgroundColor={COLORS.GRAYDARK} />
        <Facebook backgroundColor={COLORS.GRAYDARK} />
    </View>
)
