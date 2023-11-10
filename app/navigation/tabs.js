// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import HomeScreen from "../screens/HomeScreen";
// import ExpenseScreen from "../screens/ExpenseScreen";
// import SubscriptionsScreen from "../screens/SubscriptionScreen";
// import SummaryScreen from "../screens/SummaryScreen";
// import { Ionicons } from '@expo/vector-icons';
// const tab = createBottomTabNavigator();

// const tabs = () => {
//   return (

//     <tab.Navigator
//     screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let Icons;
//           if (route.name === 'MoneySaver') {
//             Icons = focused? 'home' : 'home-outline';
//           } else if (route.name === 'Expenses') {
//             Icons = focused? 'cash' : 'cash-outline';
//           } else if (route.name === 'Subscriptions') {
//             Icons = focused? 'pencil' : 'pencil-outline';
//           } else if (route.name === 'Summary') {
//             Icons = focused? 'pie-chart' : 'pie-chart-outline';
//           }
//           return <Ionicons name={Icons} size={size} color={color} />;
//         },
//       })}
//     >
//       <tab.Screen name="MoneySaver" component={HomeScreen} />
//       <tab.Screen name="Subscriptions" component={SubscriptionsScreen} />
//       <tab.Screen name="Expenses" component={ExpenseScreen} />
//       <tab.Screen name="Summary" component={SummaryScreen} />
//     </tab.Navigator>

//   );
// };

  
// export default tabs;

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ExpenseScreen from "../screens/ExpenseScreen";
import SubscriptionsScreen from "../screens/SubscriptionScreen";
import SummaryScreen from "../screens/SummaryScreen";
import { Ionicons } from '@expo/vector-icons';

const tab = createBottomTabNavigator();

const tabs = () => {
  return (
    <tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let Icons;
          if (route.name === 'Home') {
            Icons = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Expenses') {
            Icons = focused ? 'cash' : 'cash-outline';
          } else if (route.name === 'Subscriptions') {
            Icons = focused ? 'pencil' : 'pencil-outline';
          } else if (route.name === 'Summary') {
            Icons = focused ? 'pie-chart' : 'pie-chart-outline';
          }
          return <Ionicons name={Icons} size={size} color={color} />;
        },
        headerTitle: "MoneySaver", // This sets the title for all screens
      })}
    >
      <tab.Screen name="Home" component={HomeScreen} />
      <tab.Screen name="Subscriptions" component={SubscriptionsScreen} />
      <tab.Screen name="Expenses" component={ExpenseScreen} />
      <tab.Screen name="Summary" component={SummaryScreen} />
    </tab.Navigator>
  );
};

export default tabs;

