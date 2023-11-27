import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default function App() {
  const [billAmount, setBillAmount] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [tipPercentage, setTipPercentage] = useState(15);
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [amountPerPerson, setAmountPerPerson] = useState(0);

  const calculateTip = () => {
    const bill = parseFloat(billAmount);
    const people = parseInt(numberOfPeople);

    if (isNaN(bill) || isNaN(people) || bill <= 0 || people <= 0) {
      alert('Ingresa cantidades válidas para la cuenta y el número de personas.');
      return;
    }

    const tipPercent = tipPercentage / 100;
    const tip = bill * tipPercent;
    const total = bill + tip;
    const perPerson = total / people;

    setTipAmount(tip);
    setTotalAmount(total);
    setAmountPerPerson(perPerson);
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

      <View style={styles.inputContainer}>
        <Text>Porcentaje de propina:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Ingrese el porcentaje"
          value={tipPercentage.toString()}
          onChangeText={(text) => setTipPercentage(parseInt(text) || 0)}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={calculateTip}>
        <Text style={styles.buttonText}>Calcular Propina</Text>
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
