// Martinez Chan Mauricio
import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#EAF3FF', 
  },
  encabezado: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', 
  },
  contenedorEntrada: {
    marginBottom: 20,
    width: '100%',
  },
  entrada: {
    height: 40,
    borderColor: '#B0B0B0', 
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 8, 
    backgroundColor: '#FFFFFF', 
  },
  contenedorBoton: {
    flexDirection: 'row',
    justifyContent: 'space-around', 
    marginBottom: 20,
  },
  boton: {
    backgroundColor: '#FF5722', 
    padding: 15,
    borderRadius: 8,
    width: '28%', 
    alignItems: 'center',
  },
  textoBoton: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  contenedorResultado: {
    marginTop: 20,
    width: '100%',
  },
  textoResultado: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333', 
  },
});
