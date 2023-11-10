import React from 'react'
import { View, Text, Button, FlatList, TextInput, TouchableOpacity, Image, StyleSheet} from 'react-native';
const HomeScreen = ({navigation}) => {
    return (
      <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Welcome Susan!</Text>
        <FlatList
          data={[
            { key: "Rent Due in 5 Days" },
            { key: "Hulu Subscription Due Tomorrow" },
            { key: "Disney+ Subscription Due Now" },
          ]}
          renderItem={({ item }) => (
            <Text style={styles2.item}>{item.key}</Text>
          )}
        />
      </View>
    </View>
        // <View >
        //     <Text>Home Screen</Text>
        //     <Button
        //     title= "Click Here"
        //     onPress={()=> alert('Button Clicked!')}
        //     /> 
        // </View>
    );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container:{
      flex:1,
      alignItems: 'center',
      justifyContent:'center',
      backgroundColor:'#8fcbbc'
  }
})

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});