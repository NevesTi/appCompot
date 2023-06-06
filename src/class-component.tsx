import React, { Component } from "react";
import { View,Text, Button } from "react-native";

interface Props{


}

interface State{
    contador: number;

}

export default class ClassComponent extends Component<Props, State> {

    constructor(props:Props){
        super(props);

        this.state = {contador:0};
    }

    private increment() {
        const calculo = this.state.contador + 1;
        this.setState({contador: calculo})
    }
  
    render() {
        return (
            <View>
            <Text>{this.state.contador}</Text>
            <Button title="Clique!" onPress={() => { this.increment() }} />
        </View>
        );

    }

}