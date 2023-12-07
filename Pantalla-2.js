// Martinez Chan Mauricio 
import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { estilos } from './styles';

export default function PantallaPagar({ estadoCompartido }) {
  const [personasAPagar, setPersonasAPagar] = useState('');
  const [aportacion, setAportacion] = useState('');

  const calcularTotalPagar = () => {
    const personas = parseInt(personasAPagar);

    if (isNaN(personas) || personas <= 0) {
      alert('Ingresa un número válido de personas a pagar.');
      return;
    }

    const totalAportacion = parseFloat(aportacion) || 0;

    
    const totalPorPersona = estadoCompartido.montoPorPersona;
    const totalPagar = totalPorPersona * personas - totalAportacion;

    alert(`Total a pagar: $${totalPagar.toFixed(2)}`);
  };

  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.encabezado}>Total a Pagar</Text>

      <View style={estilos.contenedorEntrada}>
        <Text>Total de personas a pagar:</Text>
        <TextInput
          style={estilos.entrada}
          keyboardType="numeric"
          placeholder="Ingrese el número"
          value={personasAPagar}
          onChangeText={(texto) => setPersonasAPagar(texto)}
        />
      </View>

      <View style={estilos.contenedorEntrada}>
        <Text>Aportaciones:</Text>
        <TextInput
          style={estilos.entrada}
          keyboardType="numeric"
          placeholder="Ingrese la cantidad"
          value={aportacion}
          onChangeText={(texto) => setAportacion(texto)}
        />
      </View>

      <TouchableOpacity style={estilos.boton} onPress={calcularTotalPagar}>
        <Text style={estilos.textoBoton}>Calcular Pago Total</Text>
      </TouchableOpacity>
    </View>
  );
}