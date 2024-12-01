import React, { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';

export default function App() {
  const [num1, setNum1] = useState(''); // Menyimpan angka pertama
  const [num2, setNum2] = useState(''); // Menyimpan angka kedua
  const [result, setResult] = useState(null); // Menyimpan hasil perhitungan

  // Fungsi untuk menghitung berdasarkan operasi yang diberikan
  const calculateResult = (operation) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      Alert.alert("Input Error", "Please enter valid numbers.");
      return;
    }

    let calcResult;

    switch (operation) {
      case '+':
        calcResult = number1 + number2;
        break;
      case '-':
        calcResult = number1 - number2;
        break;
      case '*':
        calcResult = number1 * number2;
        break;
      case '/':
        calcResult = number2 !== 0 ? number1 / number2 : "Cannot divide by zero";
        break;
      default:
        Alert.alert("Operation Error", "Invalid operation.");
        return;
    }

    setResult(calcResult); // Menyimpan hasil perhitungan
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simple Calculator</Text>

      {/* Input untuk angka pertama */}
      <TextInput
        style={styles.input}
        placeholder="Enter first number"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />

      {/* Tombol untuk memilih operasi */}
      <View style={styles.operationsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => calculateResult('+')}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => calculateResult('-')}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => calculateResult('*')}>
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => calculateResult('/')}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
      </View>

      {/* Input untuk angka kedua */}
      <TextInput
        style={styles.input}
        placeholder="Enter second number"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />

      {/* Menampilkan hasil */}
      {result !== null && (
        <Text style={styles.resultText}>Result: {result}</Text>
      )}
    </View>
  );
}

// Styling aplikasi
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    textAlign: 'center',
  },
  operationsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    width: 50,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  resultText: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: 'bold',
  },
});
