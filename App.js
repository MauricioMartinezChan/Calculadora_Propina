//Martinez Chan Mauricio 
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PantallaCalculadora from './Pantalla-1';
import PantallaPagar from './Pantalla-2';
import Pantalla3 from './Pantalla-3';

const Tab = createBottomTabNavigator();

export default function App() {
  const [estadoCompartido, setEstadoCompartido] = useState({
    totalCuenta: 0,
    montoPorPersona: 0,
  });

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Calculadora de propinas 💰"
          children={() => (
            <PantallaCalculadora
              estadoCompartido={estadoCompartido}
              setEstadoCompartido={setEstadoCompartido}
            />
          )}
        />
        <Tab.Screen
          name="Cuenta"
          children={() => (
            <PantallaPagar
              estadoCompartido={estadoCompartido}
            />
          )}
        />
        <Tab.Screen
  name="Acerca de"
  component={Pantalla3}
/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}