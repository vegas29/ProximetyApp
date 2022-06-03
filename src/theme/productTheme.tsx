import { StyleSheet } from 'react-native';
import { COLORS } from '../settings/colors';

export const productStyles = StyleSheet.create({
    containerMain:{
        flex: 1,
        flexDirection: 'column'
    },
    scrollViewContainer:{
        flexGrow: 1, 
        backgroundColor: COLORS.GRAY
    },
    container:{
        backgroundColor: COLORS.WHITE,
        padding: 20,
        margin: 20,
        borderRadius: 10
    },
    title:{
        textAlign:'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 20
    },
    logo:{
        width: 300,
        height: 180
    },
    description:{
        textAlign: 'justify'
    }
});