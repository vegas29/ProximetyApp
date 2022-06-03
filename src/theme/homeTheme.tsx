import { StyleSheet } from 'react-native';
import { COLORS } from '../settings/colors';

export const homeStyles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column'
    },
    scrollViewContainer:{
        flexGrow: 1, 
        backgroundColor: COLORS.GRAY
    },
    flex:{
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    flexContain:{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 3
    },
    icono: {
        backgroundColor: COLORS.WHITE,
    },
    iconoShopping: {
        color: COLORS.PRIMARYLIGHT2
    },
    containerCircle: {
        alignItems: 'center',
        backgroundColor: COLORS.WHITE,
        padding: 15,
        height: 45,
        width: 45,
        borderRadius: 100,
        margin: 15
    },
    title:{
        fontFamily: 'Roboto-Bold',
        fontSize: 25,
        marginLeft: 30,
        color: COLORS.WHITE
    },
    subtitle:{
        color: COLORS.WHITE
    },
    text:{
        fontFamily: 'Roboto-Regular',
        fontSize: 18,
        color: COLORS.GRAYDARK,
        marginLeft: 30
    },
    buttonOptionsActive:{
        backgroundColor: COLORS.PRIMARYLIGHT,
        marginRight: 30,
        padding: 15,
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        color: COLORS.WHITE
    },
    containerCards:{
        height: '100%',
        marginHorizontal: 30
    },
    card:{
        backgroundColor: COLORS.WHITE,
        marginBottom: 20,
        shadowColor: COLORS.BLACK,
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 3,
        padding: 25,
        borderRadius: 15,
        flex: 1,
        flexDirection: 'row'
    },
    logo:{
        width: 100,
        height: 100,
        borderRadius: 25
    },
    details:{
        marginHorizontal: 16,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    detailsText:{
        width: '73%'
    },
    titleCard:{
        fontSize: 17,
        fontFamily: 'Roboto-Bold',
        marginBottom: 2
    },
    iconoStatus:{

    },
    iconoCard:{
        color: COLORS.GRAYDARK,
        marginRight: 10,
    },
    iconoCardSecondary:{
        color: COLORS.PRIMARYLIGHT2,
        marginRight: 10,
    },
    iconoMenu:{
        color: COLORS.PRIMARYLIGHT
    },
    iconoAction:{
        marginLeft: 20,
        marginBottom: 20
    },
    badgeGreen:{
        width:'50%',
        textAlign: 'center',
        color: COLORS.GREENLIGHT,
        fontWeight: 'bold'
    },
    badgeRed:{
        width:'50%',
        textAlign: 'center',
        color: COLORS.REDLIGHT,
        fontWeight: 'bold'    
    },
    comment:{
       //CSS AQUI
    },
    input:{
        backgroundColor: COLORS.WHITE,
        borderRadius: 10,
        width: '90%',
        marginVertical: 15,
        padding: 12,
        marginHorizontal: 20
    },
    relative:{
        position: 'relative'
    },
    iconoSearch:{
        position: 'absolute', 
        top:30, 
        right: 30,
        color: COLORS.GRAYDARK
    },
    flexServices:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20
    },
    cardService:{
        width: 60,
        height: 60,
        backgroundColor: COLORS.WHITE,
        shadowColor: COLORS.BLACK,
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 3,
        paddingVertical: 16,
        paddingHorizontal: 4,
        margin: 5,
        borderRadius: 15,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textServices:{
        fontSize: 11
    },
    textServicesPrimary:{
        fontSize: 12,
        color: COLORS.PRIMARYLIGHT2
    },
    flexIcons:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    banner:{
        width:'100%',
        height: 150, 
        resizeMode: 'contain'
    },
    loader:{
        padding: 20
    },
    //Modales
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2
    },
    buttonClose: {
        backgroundColor: COLORS.PRIMARYLIGHT2,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontWeight: 'bold'
    },
    modalParr:{
        marginBottom: 15,
        textAlign: "center"
    },
    sliderBox:{
        marginVertical: 10,
        borderRadius: 50
    },
    activityIndicator:{
        marginVertical: 20
    },
    cardHeader:{
        marginTop: 90,
        marginBottom: 10,
        marginHorizontal: 20,
        borderRadius: 20
    },
    cardItem:{
        marginTop: 30,
        marginBottom: 150,
        marginHorizontal: 20,
        borderRadius: 20
    },
    linearGradient:{
        padding: 20,
        borderRadius: 10,
        marginBottom: 10
    },
    flexHeader:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image:{
        marginLeft: 10,
        width: 35,
        height: 35
    }
});