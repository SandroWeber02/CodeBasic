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
      
        <View style={styles.goole}>
          <Text>Google</Text>
        </View>
      </View>
    </View>
  );
}


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
    width: '100%'
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 2,
    marginBottom: 20,
    padding: 13,
    borderRadius: 5
  },
  botao: {
    backgroundColor: '#00B25A',
    padding: 10,
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 5,
    borderColor: '#00B25A',
    height: 50,
    fontWeight: 'bold'
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
  },
  goole: {
    backgroundColor: '#00B25A',
    padding: 10,
    alignItems: 'center',
    borderRadius: 20,
    borderColor: '##208FBC',
    marginBottom: 20,
    height: 40, // Altura reduzida
    alignSelf: 'center', // Centralizado horizontalmente
    justifyContent: 'flex-end', // Alinhado na parte inferior
    marginTop: 'auto', // Move para a parte inferior
    marginBottom: 20, // Espaçamento inferior adicional
    fontWeight: 'bold'
  }
  

});
