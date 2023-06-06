import { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function FunctionComponent() {

    const [contador, setcontador] = useState(0);

    function increment() {
        setcontador(contador + 1);
    }
    return (
        <View style={styles.telacal}>
            <Text>{contador}</Text>
            <View style={styles.button}>
            <Button title="Clique!" onPress={() => { increment() }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
        

    },
    telacal:{
        justifyContent: 'flex-end',
        height:'60%',
        alignSelf: 'center',

        
        
        
    },
    button:{
        alignSelf: 'center',
    

    }
    
    
    });