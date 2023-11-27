// App.js
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { styles } from './styles';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Calculadora" component={TipCalculatorScreen} />
        <Tab.Screen name="Pagar" component={PayerScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function TipCalculatorScreen() {
  const [billAmount, setBillAmount] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [amountPerPerson, setAmountPerPerson] = useState(0);

  const calculateTip = (tipPercentage) => {
    const bill = parseFloat(billAmount);
    const people = parseInt(numberOfPeople);

    if (isNaN(bill) || isNaN(people) || bill <= 0 || people <= 0) {
      alert('Ingresa cantidades válidas para la cuenta y el número de personas.');
      return;
    }

    const tipPercent = parseFloat(tipPercentage) / 100;
    const tip = bill * tipPercent;
    const total = bill + tip;
    const perPerson = total / people;

    setTipAmount(tip);
    setTotalAmount(total);
    setAmountPerPerson(perPerson);
  };

  const clearData = () => {
    setBillAmount('');
    setNumberOfPeople('');
    setTipAmount(0);
    setTotalAmount(0);
    setAmountPerPerson(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Calculadora de Propinas</Text>

      <View style={styles.inputContainer}>
        <Text>Importe de la cuenta:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Ingrese el importe"
          value={billAmount}
          onChangeText={(text) => setBillAmount(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text>Número de personas:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Ingrese el número"
          value={numberOfPeople}
          onChangeText={(text) => setNumberOfPeople(text)}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => calculateTip('10')}>
          <Text style={styles.buttonText}>10%</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => calculateTip('15')}>
          <Text style={styles.buttonText}>15%</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => calculateTip('20')}>
          <Text style={styles.buttonText}>20%</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={clearData}>
        <Text style={styles.buttonText}>Limpiar Datos</Text>
      </TouchableOpacity>

      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>Detalles de la propina:</Text>
        <Text style={styles.resultText}>Importe de la propina: ${tipAmount.toFixed(2)}</Text>
        <Text style={styles.resultText}>Importe total: ${totalAmount.toFixed(2)}</Text>
        <Text style={styles.resultText}>Importe por persona: ${amountPerPerson.toFixed(2)}</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

function PayerScreen() {
  // Aquí puedes implementar la lógica para seleccionar a cuántas personas les quieres pagar
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Seleccionar Pago</Text>
      {/* Agrega la lógica para seleccionar a cuántas personas les quieres pagar */}
    </View>
  );
}
