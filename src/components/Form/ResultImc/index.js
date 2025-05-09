import React from "react";
import {View, Text, Share, TouchableOpacity} from "react-native";
import styles from "./style"

export default function ResultImc(props){
    const onShare = async()=>{
        const result = await Share.share({
            message: "Seu imc hoje é: " +props.resultImc,
        })
    }
    return(
        <View style = {styles.resultImc}>
            <View style={styles.boxShareButton}>
                <TouchableOpacity onPress={onShare} style={styles.sharedButton}>
                    <Text style={styles.sharedText}>Share</Text>
                </TouchableOpacity>
            </View>
            <Text style ={styles.information}>{props.messageResultImc}</Text>
            <Text style ={styles.numberImc}>{props.resultImc}</Text>
        </View>
    );
}