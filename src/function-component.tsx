import { useState } from "react";
import { View, Text, Button } from "react-native";

export default function FunctionComponent() {

    const [contador, setcontador] = useState(0);

    function increment() {
        setcontador(contador + 1);
    }
    return (
        <View>
            <Text>{contador}</Text>
            <Button title="Clique!" onPress={() => { increment() }} />
        </View>
    )
}