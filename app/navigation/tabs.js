import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ExpenseScreen from "../screens/ExpenseScreen";
import SubscriptionsScreen from "../screens/SubscriptionScreen";
import SummaryScreen from "../screens/SummaryScreen";
const tab = createBottomTabNavigator();

const tabs = () => {
  return (
    <tab.Navigator>
      <tab.Screen name="Home" component={HomeScreen} />
      <tab.Screen name="Expense" component={ExpenseScreen} />
      <tab.Screen name="Subscriptions" component={SubscriptionsScreen} />
      <tab.Screen name="Summary" component={SummaryScreen} />
    </tab.Navigator>

  );
};
export default tabs;
