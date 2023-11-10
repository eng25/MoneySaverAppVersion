import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, TextInput, FlatList, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SubscriptionScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [subscriptions, setSubscriptions] = useState([]);
    const [subscriptionName, setSubscriptionName] = useState('');
    const [cost, setCost] = useState('');
    const [paymentDate, setPaymentDate] = useState('');

    const handleAddSubscription = () => {
        const newSubscription = {
            id: subscriptions.length.toString(),
            name: subscriptionName,
            cost,
            paymentDate,
        };
        setSubscriptions([...subscriptions, newSubscription]);
        setSubscriptionName('');
        setCost('');
        setPaymentDate('');
        setModalVisible(false);
    };

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
            <FlatList
                data={subscriptions}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.subscriptionItem}>
                        <Text style={styles.paymentDateText}>Due: {item.paymentDate}</Text>
                        <Text style={styles.subscriptionNameText}>{item.name}</Text>
                        <Text style={styles.costText}>${item.cost}</Text>
                    </View>
                )}
            />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modalView}>
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

export default SubscriptionScreen;

const styles = StyleSheet.create({
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
        position: 'absolute',
        right: 30,
        
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
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
        backgroundColor: '#ececec',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
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
});
