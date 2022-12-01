import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from './pages/Main';
import User from './pages/User';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerBackTitleVisible: 'false',
          headerStyle: {
            backgroundColor: '#7159c1'
          },
          headerTintColor: '#fff'
        }}
      >
        <Stack.Screen
          name='Main'
          component={Main}
          options={{ title: 'Usuários' }}
        />
        <Stack.Screen
          name='User'
          component={User}
          options={({ route }) => ({
            title: route.params.user.name
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;
