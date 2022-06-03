import { StyleSheet } from "react-native";
import { COLORS } from "../settings/colors";

export const profileStyles = StyleSheet.create({
    header:{
        backgroundColor: COLORS.PRIMARYLIGHT,
        height: '40%'
    },
    flex:{
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    icono: {
        color: COLORS.WHITE
    },
    containerCircle: {
        alignItems: 'center',
        backgroundColor: COLORS.PRIMARYLIGHT2,
        padding: 15,
        height: 50,
        width: 50,
        borderRadius: 100,
        margin: 15
    },
    containerCircleLogout:{
        alignItems: 'center',
        backgroundColor: COLORS.RED,
        padding: 15,
        height: 50,
        width: 50,
        borderRadius: 100,
        margin: 15
    },
    title:{
        marginVertical: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: COLORS.WHITE
    },
    profile:{
        marginTop: 25,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageProfile:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo:{
        height: 125,
        width: 125,
        borderRadius: 100,
        marginTop: 15
    },
    textUserName:{
        marginTop: 10,
        textAlign: 'center',
        color: COLORS.WHITE,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        fontSize: 18
    },
    textRole:{
        marginTop: 2,
        textAlign: 'center',
        color: COLORS.WHITE,
        textTransform: 'capitalize',
        fontSize: 15
    },
    data:{
        marginTop: 60   
    },
    dataTitle:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 25
    },
    containerCards:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    card:{
        backgroundColor: COLORS.WHITE,
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
        width: 350
    },
    cardImage:{
        backgroundColor: COLORS.WHITE,
        shadowColor: COLORS.BLACK,
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 3,
        paddingVertical: 80,
        borderRadius: 15,
        width: 350,
        height: 450
    },
    textFlex:{
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 10
    },
    textLabel:{
        fontWeight: 'bold',
        fontSize: 14
    },
    textValue:{
        marginLeft: 5,
        fontSize: 14
    },
    textInfo:{
        borderRadius: 10,
        padding: 10,
        color: COLORS.GRAYDARK,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    imageAccount:{
        height: '100%',
        width: '100%'
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
        backgroundColor: COLORS.RED,
        marginRight: 10
    },
    buttonCancel: {
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
        textAlign: "center"
    },
    pressableFlex:{
        display: 'flex',
        flexDirection: 'row'
    },
    modalIcon:{
        marginVertical: 15,
        color: COLORS.GRAYDARK
    }
});