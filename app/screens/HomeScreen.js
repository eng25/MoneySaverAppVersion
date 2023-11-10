import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, Alert } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [items, setItems] = useState([
    { id: '1', title: 'Rent Due in 5 Days' },
    { id: '2', title: 'Hulu Subscription Due Tomorrow' },
    { id: '3', title: 'Disney+ Subscription Due Now' },
  ]);

  const handleDelete = (id) => {
    // Confirm before deleting
    Alert.alert(
      'Delete Item',
      'Are you sure you want to delete this item?',
      [
        { text: 'Yes', onPress: () => setItems((prevItems) => prevItems.filter((item) => item.id !== id)) },
        { text: 'Cancel', style: 'cancel' },
      ],
      { cancelable: false}
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header2}>Notifications</Text>
      <Text style={styles.welcome}>Welcome {name}!</Text>
      <FlatList
        data={items} 
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.item}>{item.title}</Text>
            <TouchableOpacity
              style={styles.optionsButton}
              onPress={() => handleDelete(item.id)}
            >
              <Text style={styles.optionsButtonText}>...</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your name here"
        value={name}
        onChangeText={setName}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
  },
  header2: {
    alignSelf: 'flex-start',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10, 
  },
  welcome: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: '300',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
  },
  item: {
    fontWeight: 'normal',
    fontSize: 18,
  },
  optionsButton: {
    padding: 5,
    borderRadius: 5,
  },
  optionsButtonText: {
    fontSize: 24,
    color: '#000',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
});
