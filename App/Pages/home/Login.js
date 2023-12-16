import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

export default function Login() {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View>
      <Image source={require('../assets/logo.png')} />
      <Text style={styles.BemVindoText}>BemVindo ao CobeBasic</Text>
      <View style={styles.form}>
        <TextInput
          placeholder="Nome"
          style={styles.input}
          value={nome}
          onChangeText={(text) => setNome(text)}
        />
        <TextInput
          placeholder="Senha"
          style={styles.input}
          secureTextEntry={true}
          value={senha}
          onChangeText={(text) => setSenha(text)}
        />
        <TouchableOpacity style={styles.botao} onPress={() => {
         //Validação
        }}>
          <Text style={styles.textoBotao}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Restante do seu código...



const styles = StyleSheet.create({
  BemVindoText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: 50
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 230,
    height: 230,
    marginBottom: 20,
    borderRadius: 10,
    marginBottom: 30
  },
  titulo: {
    fontFamily:'Verdana',
    fontSize: 30,
    marginBottom: 20,
    alignSelf: 'center'
  },
  form: {
    width: '80%',
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 13,
    borderRadius: 5
  },
  botao: {
    backgroundColor: '#00B25A',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    borderColor: '#00B25A',
    height: 50,
    fontWeight: 'bold'
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
  },
});
