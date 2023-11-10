import React from 'react'
import { View, Text, Button, StyleSheet} from 'react-native';

const SubscriptionScreen = ({navigation}) => {
    return (
        <View style = {styles.container}>
            <Text>Subscriptions Screen</Text>
            <Button
            title= "Click Here"
            onPress={()=> alert('Button Clicked!')}
            /> 
        </View>
    );
};
export default SubscriptionScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:'#8fcbbc'
    }
})
