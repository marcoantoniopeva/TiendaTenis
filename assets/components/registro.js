import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Recibimos "volverAlLogin" como un parámetro (prop) desde App.tsx
export default function Registro({ volverAlLogin }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear Cuenta</Text>
      
      {/* Aquí irá todo el diseño de tu formulario de registro (nombres, apellidos, etc.) */}

      <TouchableOpacity onPress={volverAlLogin} style={styles.button}>
        <Text style={styles.buttonText}>Regresar a Iniciar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#ffffff',
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    padding: 15,
  },
  buttonText: {
    color: '#3498db',
    fontWeight: 'bold',
  }
});