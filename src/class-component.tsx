import React, { Component } from "react";
import { View,Text, Button,StyleSheet } from "react-native";

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
            <View style={styles.telacal1}>
            <Text>{this.state.contador}</Text>
            <View style={styles.button}>
            <Button  title="Clique!"  onPress={() => { this.increment() }}   />
            </View>
        </View>
        );

    }

}

const styles = StyleSheet.create({
    container:{
             
    
    },
telacal1:{
    alignSelf: 'center',
    top:'40%'   
    
         
},
button:{
    justifyContent: 'flex-end',
    alignSelf: 'center',



}


},);