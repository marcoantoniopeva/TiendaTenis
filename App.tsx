import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Image, 
  StyleSheet, 
  SafeAreaView, 
  StatusBar 
} from 'react-native';

import Registro from './assets/components/registro';

export default function App() {
  const [pantallaActual, setPantallaActual] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const logoImg = require('./assets/image/logo.png');

  if (pantallaActual === 'registro') {
    return <Registro volverAlLogin={() => setPantallaActual('login')} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.innerCard}>
        
        <View style={styles.topSection}>
          <Image source={logoImg} style={styles.logo} resizeMode="contain" />
          <View style={styles.storeNameContainer}>
            <Text style={styles.storeName}><Text style={styles.storeNameBold}>U</Text>RBAN</Text>
            <Text style={styles.storeName}><Text style={styles.storeNameBold}>S</Text>TORE</Text>
          </View>
          <Text style={styles.tagline}>Tu estilo, tu mundo.</Text>
        </View>

        <View style={styles.headingSection}>
          <Text style={styles.heading}>Iniciar sesión</Text>
          <Text style={styles.subheading}>Ingresa tus datos para continuar</Text>
        </View>

        <View style={styles.formSection}>
          
          <View style={styles.inputContainer}>
            <Text style={styles.iconFallback}>✉️</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#6e6e6e"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.iconFallback}>🔒</Text>
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#6e6e6e"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.iconRight}>
              <Text style={styles.iconFallback}>{showPassword ? '👁️' : '🙈'}</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.forgotPasswordContainer}>
            <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomSection}>
          
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Iniciar sesión</Text>
          </TouchableOpacity>

          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>¿No tienes cuenta? </Text>
            <TouchableOpacity onPress={() => setPantallaActual('registro')}>
              <Text style={styles.registerLink}>Regístrate</Text>
            </TouchableOpacity>
          </View>
          
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  innerCard: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#0d0d0d',
    borderRadius: 40,
    paddingHorizontal: 30,
    paddingVertical: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 10,
  },
  topSection: {
    alignItems: 'center',
    marginBottom: 50,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 15,
  },
  storeNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  storeName: {
    fontSize: 32,
    color: '#ffffff',
  },
  storeNameBold: {
    fontWeight: 'bold',
  },
  tagline: {
    fontSize: 16,
    color: '#b0b0b0',
  },
  headingSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  heading: {
    fontSize: 28,
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subheading: {
    fontSize: 16,
    color: '#b0b0b0',
    textAlign: 'center',
  },
  formSection: {
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#262626',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginBottom: 15,
    height: 60,
  },
  iconFallback: {
    marginRight: 10,
    fontSize: 20,
  },
  input: {
    flex: 1,
    color: '#ffffff',
    fontSize: 16,
  },
  iconRight: {
    padding: 5,
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    paddingVertical: 5,
  },
  forgotPasswordText: {
    color: '#3498db',
    fontSize: 14,
  },
  bottomSection: {
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: '#1d70b8',
    width: '100%',
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  registerText: {
    color: '#b0b0b0',
    fontSize: 14,
  },
  registerLink: {
    color: '#3498db',
    fontWeight: 'bold',
    fontSize: 14,
  },
});