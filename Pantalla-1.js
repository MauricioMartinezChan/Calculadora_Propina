// Martinez Chan Mauricio
import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { estilos } from './styles';

export default function PantallaCalculadora({ estadoCompartido, setEstadoCompartido }) {
  const [montoCuenta, setMontoCuenta] = useState('');
  const [numeroPersonas, setNumeroPersonas] = useState('');

  const calcularPropina = (porcentajePropina) => {
    const cuenta = parseFloat(montoCuenta);
    const personas = parseInt(numeroPersonas);

    if (isNaN(cuenta) || isNaN(personas) || cuenta <= 0 || personas <= 0) {
      alert('Ingresa cantidades válidas para la cuenta y el número de personas.');
      return;
    }

    const porcentajePropinaDecimal = parseFloat(porcentajePropina) / 100;
    const propina = cuenta * porcentajePropinaDecimal;
    const total = cuenta + propina;
    const porPersona = total / personas;

    
    setEstadoCompartido({
      totalCuenta: total.toFixed(2),
      montoPorPersona: porPersona.toFixed(2),
    });
  };

  const limpiarDatos = () => {
    setMontoCuenta('');
    setNumeroPersonas('');
  };

  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.encabezado}>Calculadora </Text>

      <View style={estilos.contenedorEntrada}>
        <Text>Total de la cuenta:</Text>
        <TextInput
          style={estilos.entrada}
          keyboardType="numeric"
          placeholder="Ingrese el monto"
          value={montoCuenta}
          onChangeText={(texto) => setMontoCuenta(texto)}
        />
      </View>

      <View style={estilos.contenedorEntrada}>
        <Text>Total de personas:</Text>
        <TextInput
          style={estilos.entrada}
          keyboardType="numeric"
          placeholder="Ingrese el número"
          value={numeroPersonas}
          onChangeText={(texto) => setNumeroPersonas(texto)}
        />
      </View>

      <View style={estilos.contenedorBoton}>
        <TouchableOpacity style={estilos.boton} onPress={() => calcularPropina('10')}>
          <Text style={estilos.textoBoton}>10%</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.boton} onPress={() => calcularPropina('15')}>
          <Text style={estilos.textoBoton}>15%</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.boton} onPress={() => calcularPropina('20')}>
          <Text style={estilos.textoBoton}>20%</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={estilos.boton} onPress={limpiarDatos}>
        <Text style={estilos.textoBoton}>Limpiar</Text>
      </TouchableOpacity>

      {/* Muestra los resultados debajo de los campos de entrada y botones */}
      <View style={estilos.contenedorResultado}>
        <Text style={estilos.textoResultado}>Detalles de la propina:</Text>
        <Text style={estilos.textoResultado}>Total de la cuenta: ${estadoCompartido.totalCuenta}</Text>
        <Text style={estilos.textoResultado}>Monto total por persona: ${estadoCompartido.montoPorPersona}</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
