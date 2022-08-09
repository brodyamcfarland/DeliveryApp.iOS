import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Company from './screens/Company';
import Basket from './screens/Basket';
import SubmittingOrder from './screens/SubmittingOrder';
import Delivery from './screens/Delivery';
import { Provider } from 'react-redux';
import { store } from './store';

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Company' component={Company}/>
            <Stack.Screen
              name='Basket'
              component={Basket}
              options={{ presentation: 'modal', headerShown: false }}
            />
            <Stack.Screen
              name='SubmittingOrder'
              component={SubmittingOrder}
              options={{ presentation: 'fullScreenModal', headerShown: false }}
            />
            <Stack.Screen
              name='Delivery'
              component={Delivery}
              options={{ presentation: 'fullScreenModal', headerShown: false }}
            />
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}
