import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext:{
        flex: 1,
        backgroundColor: "#ffffff",
        alignItems: "center",
        marginTop: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 30,
    },
    form:{
        width:"100%",
    },
    formLabel:{
        color: "#0000000",
        fontSize: 18,
        paddingLeft: 10,
    },
    input:{
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft: 10,
    }, textButtonCalculator:{
        fontSize: 20,
        color: "#fffffffff"
    },
    buttonCalculator:{
        borderRadius: 50,
        alignItems:"center",
        justifyContent:"center",
        width: "90%",
        backgroundColor:"#FF0043",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        margin: 30,
    },
    textButtonCalculator:{
        color: "#ffffff",
        fontSize:20,
    },
    errorMessage:{
        fontSize: 18,
        fontWeight: "bold",
        color: "#FF0043"
    },
    exhibitionResultImc:{
        width: "100%",
        height: "50%"   
    },
    listImcs:{
        marginTop: 20,
    },
    resultImcItem:{
        fontSize: 26,
        color: "red",
        height: 50,
        width: "100%",
        paddingRight: 20,
    },
    textResultItemList:{
        fontSize: 16,
        color: 'red',
        

    }
});

export default styles