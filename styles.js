import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1', // Color de fondo general
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#2c3e50', // Color del texto del título
  },
  inputContainer: {
    marginBottom: 16,
    width: '100%',
  },
  input: {
    height: 40,
    borderColor: '#DF2F72', // Color del borde del input
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
  button: {
    backgroundColor: '#DF2F72', // Color de fondo del botón
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff', // Color del texto del botón
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultContainer: {
    marginTop: 20,
    padding: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#DF2F2F', // Color del borde del contenedor de resultados
    backgroundColor: '#f9f9f9',
    width: '100%',
  },
  resultText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#2c3e50', // Color del texto de los resultados
  },
});
