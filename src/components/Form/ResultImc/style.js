import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    resultImc:{
        flex: 1,
        marginTop: 15,
        paddingTop: 60,
        borderRadius: 50,
        alignItems:"center",
        width: "100%",
    },
    numberImc:{
        fontSize: 48,
        color: "#FF0043",
        fontWeight: "bold",
    },
    information:{
        fontSize: 18,
        color: "#FF0043",
        fontWeight: "bold",
    },
    boxShareButton:{
        width:"100%",
        alignItems: "center",
        marginBottom: 10,
    },
    sharedButton:{
        backgroundColor: "#1877f2",
        borderRadius: 50,
        paddingBottom:5,
        paddingTop: 15,
    },
    sharedText:{
        color:"#ffffff",
        fontWeight:"bold",
        paddingHorizontal: 30,
    }
});

export default styles