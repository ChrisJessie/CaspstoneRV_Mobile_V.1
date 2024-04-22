import React, { useState } from 'react';
import {Text, SafeAreaView, View, Image, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'

export default function Example() {
  const [form, setForm] = useState({
    email: '',
    password:'',
  })
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View sytle={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('./assets/image/Doc1.jpg')}
            style={styles.headerImg}
            alt="logo"
          />
          <Text style={styles.title}>Please Login</Text>
          <Text style={styles.subtitle}>Your Trusted Parter in Safety</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Email address</Text>

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              style={styles.inputControl}
              placeholder="Email@norsu.bgo.com"
              placeholderTextColor="#6b7280"
              value={form.email}
              onChangeText={email =>setForm({...form, email})}
            />
          </View>

          <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Password</Text>

            <TextInput
              style={styles.inputControl}
              placeholder="*******"
              placeholderTextColor="#6b7280"
              value={form.password}
              onChangeText={password =>setForm({...form, password})}
            />
            </View>

            <View style={styles.formAction}>
              <TouchableOpacity
                onPress={() => {
                  //Handle onPress
                  Alert.alert('Thank you for testing!');
                }}>
                <View style={styles.btn}>
                  <Text style={styles.btnText}>Login</Text>
                </View>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={{marginHorizontal: 30, marginTop: 'auto' }}
              onPress={() => {
                  //Handle onPress
            }}>
              <Text style={styles.formFooter}>Forgot Password? <Text style={{textDecorationLine:'underline'}}>Click here</Text></Text>
              </TouchableOpacity>
        </View>
        </View>
        </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
  },
  header: {
    marginVertical: 36,
  }, headerImg: {
    width: 350,
    height: 350,
    alignSelf: 'center',
    marginBottom: -80,
    marginTop: -50,
    marginLeft: 8,
  },
  title: {
    fontSize: 27,
    fontWeight: '700',
    color: '#1e1e1e',
    marginBottom: 1,
    marginTop: -28,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
    textAlign: 'center',
  },
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginHorizontal: 30,
  },
  inputControl: {
    backgroundColor: '#EAEAEA',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginHorizontal: 30,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
  },
  form: {
    marginBottom: 24,
  },
  formAction:{
    marginVertical: 24,
  },
  formFooter: {
    fontSize: 10,
    fontWeigth: '600',
    color: '#222',
    textAlign: 'center',
    letterSpacing: 0.15,
  },
  btn: {
    backgroundColor: '#075eec',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#075eec',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginHorizontal: 30,
  },
  btnText: {
    fontSize: 18,
    fontweight: '600',
    color: '#fff'
  },
});
