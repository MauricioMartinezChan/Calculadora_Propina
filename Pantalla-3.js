// Pantalla-3.js
import React from 'react';
import { View, Text } from 'react-native';
import { estilos } from './styles';

export default function Pantalla3() {
  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.encabezado}>Acerca de</Text>
      <Text style={estilos.textoResultado}>Calculadora de Propinas, Version 1.0</Text>
    </View>
  );
}
