import {
  View, Text, TouchableOpacity,
  Modal, StyleSheet, TextInput,
  FlatList, Button, Image, Alert
} from "react-native";

import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import hboLogo from '../assets/icons/Hbo.png';
import primeVideoLogo from '../assets/icons/Amazon.png';
import disneyPlusLogo from '../assets/icons/disney.png';
import netflixLogo from '../assets/icons/netflix.png';
import huluLogo from '../assets/icons/hulu.png';



const SubscriptionScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [subscriptions, setSubscriptions] = useState([]);
    const [subscriptionName, setSubscriptionName] = useState('');
    const [cost, setCost] = useState('');
    const [paymentDate, setPaymentDate] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        // Sort subscriptions
        const sortedSubscriptions = subscriptions.sort((a, b) => 
            new Date(a.paymentDate) - new Date(b.paymentDate)
        );
        setSubscriptions(sortedSubscriptions);
    }, [subscriptions]);


  const handleEditOrDeleteSubscription = (id) => {
    // Prompt user for edit or delete
    Alert.alert(
      "Edit or Delete Subscription",
      "What would you like to do with this subscription?",
        [
          {
            text: "Cancel",
            style: "cancel"
          },
          {
            text: "Edit",
            onPress: () => {
              //openEditSubscriptionForm(id);
              console.log("Edit subscription with id:", id);
            }
          },
          {
            text: "Delete",
            style: "destructive",
            onPress: () => {
              // Confirm before deleting
              Alert.alert(
                "Delete Subscription",
                "Are you sure you want to delete this subscription?",
                [
                  {
                    text: "Cancel",
                    style: "cancel"
                  },
                  {
                    text: "OK",
                    onPress: () => {
                      setSubscriptions(currentSubscriptions =>
                        currentSubscriptions.filter(subscription => subscription.id !== id)
                      );
                    }
                  }
                ]
              );
            }
          }
        ]
    );
  };
    const handleAddSubscription = () => {
        let logo = null;
        if (subscriptionName.toLowerCase() === 'hbo' || subscriptionName.toLowerCase() === 'max'
        || subscriptionName.toLowerCase() === 'hbo max') {
            logo = hboLogo; // Direct use of the imported image module
        } else if  (subscriptionName.toLowerCase() === 'prime video' || subscriptionName.toLowerCase() === 'amazon prime' 
        || subscriptionName.toLowerCase() === 'amazon prime video'|| subscriptionName.toLowerCase() === 'amazon'
        || subscriptionName.toLowerCase() === 'prime') {
            logo = primeVideoLogo; // Direct use of the imported image module
        } else if (subscriptionName.toLowerCase() === 'disney' ||subscriptionName.toLowerCase() === 'disney plus' 
        ||subscriptionName.toLowerCase() === 'disney+') {
            logo = disneyPlusLogo
        } else if (subscriptionName.toLowerCase() === 'disney' ||subscriptionName.toLowerCase() === 'disney plus' ) {
            logo = disneyPlusLogo
        } else if (subscriptionName.toLowerCase() === 'netflix' ) {
          logo = netflixLogo
        } else if (subscriptionName.toLowerCase() === 'hulu' ) {
          logo = huluLogo
        }

        const newSubscription = {
            id: subscriptions.length.toString(),
            name: subscriptionName,
            cost,
            paymentDate,
            logo, // This will either be null or the imported image
        };
        setSubscriptions([...subscriptions, newSubscription]);
        setSubscriptionName('');
        setCost('');
        setPaymentDate('');
        setModalVisible(false);
    };
    const closeModal = () => {
        setModalVisible(false);
    };

    const filteredSubscriptions = subscriptions.filter(subscription =>
      subscription.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Subscriptions</Text>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={styles.addButton}
          >
            <Ionicons name="add-circle" size={35} color="#4169E1" />
          </TouchableOpacity>
        </View>
    
        <TextInput
          placeholder="Search for Subscription"
          value={searchQuery}
          onChangeText={setSearchQuery}
          style={styles.searchInput}
        />
    
        <FlatList
          data={filteredSubscriptions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.subscriptionItem}>
              {item.logo && <Image source={item.logo} style={styles.logo} />}
              <View style={styles.subscriptionTextContainer}>
                <Text style={styles.paymentDateText}>Due: {item.paymentDate}</Text>
                <Text style={styles.subscriptionNameText}>{item.name}</Text>
                <Text style={styles.costText}>${item.cost}</Text>
              </View>
              <TouchableOpacity onPress={() => handleEditOrDeleteSubscription(item.id)} style={styles.optionsButton}>
                <Text style={styles.optionsText}>...</Text>
              </TouchableOpacity>
            </View>
          )}
        />
    
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Subscription Form</Text>
              <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <Ionicons name="close-circle" size={35} color="red" />
              </TouchableOpacity>
            </View>
            <TextInput
              placeholder="Subscription Name"
              value={subscriptionName}
              onChangeText={setSubscriptionName}
              style={styles.input}
            />
            <TextInput
              placeholder="Cost"
              value={cost}
              onChangeText={setCost}
              keyboardType="numeric"
              style={styles.input}
            />
            <TextInput
              placeholder="Payment Date (e.g., 2023-09-15)"
              value={paymentDate}
              onChangeText={setPaymentDate}
              style={styles.input}
            />
            <Button
              title="Add Subscription"
              onPress={handleAddSubscription}
            />
          </View>
        </Modal>
      </View>
    );
};

const styles = StyleSheet.create({
    closeButton: {
        position: 'absolute',
        right: -20, 
        top: -15, 
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 16,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    addButton: {
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        marginTop: '50%',  // Adjust as needed to position the modal on the screen
        shadowOffset: {
            width: 0,
            height: 2,
        
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: '80%',
        borderRadius: 10,
    },
    subscriptionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ececec',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
    },
    subscriptionTextContainer: {
        marginLeft: 10,
        flex: 1,
    },
    paymentDateText: {
        fontSize: 14,
        color: '#333',
        marginBottom: 4,
    },
    subscriptionNameText: {
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold',
        marginBottom: 4,
    },
    costText: {
        fontSize: 14,
        color: '#333',
    },
    logo: {
        width: 70,
        height: 70,
        resizeMode: 'contain', // will maintain in teh bubble when resizing
    },
    modalHeader: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center', // Align items to center horizontally
        alignItems: 'center',
        marginBottom: 20, // Space between header and input fields
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center', // Center the text
        flex: 1, // Take up the available space
    },
    searchInput: {
      height: 40,
      borderWidth: 1,
      padding: 10,
      marginHorizontal: 16,
      marginTop: 10,
      marginBottom: 20,
      borderRadius: 10,
    },
});

export default SubscriptionScreen;