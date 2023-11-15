import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from "react-native";

const SummaryScreen = ({navigation}) => {
    const screenWidth = Dimensions.get("window").width;
    const chartConfig = {
        backgroundGradientFrom: "#fff",
        backgroundGradientTo: "#fff",
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    };
    const [monthlyIncome, setMonthlyIncome] = useState(5000); // Example initial value
    const data = {
        labels: ["Subscriptions", "Bills", "Saved", "Monthly Income"],
        datasets: [{
            data: [200, 300, 150, monthlyIncome] // Example values
        }]
    };

    return (
        <View style={styles.container}>
            <Text>Summary Screen</Text>
            <BarChart
                data={data}
                width={screenWidth}
                height={220}
                yAxisLabel="$"
                chartConfig={chartConfig}
                verticalLabelRotation={30}
            />
            <TextInput
                style={styles.input}
                value={monthlyIncome.toString()}
                onChangeText={text => setMonthlyIncome(Number(text))}
                keyboardType="numeric"
            />
        </View>
    );
};

export default SummaryScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: '80%'
    }
});
