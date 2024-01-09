import React, { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";
import auth from "@react-native-firebase/auth";

const LoginForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirmCode, setConfirmCode] = useState("");
  const [confirmation, setConfirmation] = useState(null);

  const signInWithPhoneNumber = async () => {
    try {
      const codedPhoneNumber = `+91${phoneNumber}`;
      const confirmation = await auth().signInWithPhoneNumber(codedPhoneNumber);
      setConfirmation(confirmation);
    } catch (error) {
      console.error("Error sending code:", error);
      Alert.alert("Error", "Failed to send verification code.");
    }
  };

  const confirmCodeAndSignIn = async () => {
    try {
      await confirmation.confirm(confirmCode);
      Alert.alert("Success", "Phone number verified successfully!");
      // Navigate to the next screen or perform any desired action
    } catch (error) {
      console.error("Error confirming code:", error);
      Alert.alert("Error", "Failed to verify phone number.");
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Enter your phone number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
      />
      <Button title="Send Code" onPress={signInWithPhoneNumber} />

      {confirmation && (
        <View>
          <TextInput
            placeholder="Enter verification code"
            keyboardType="numeric"
            value={confirmCode}
            onChangeText={(text) => setConfirmCode(text)}
          />
          <Button title="Verify Code" onPress={confirmCodeAndSignIn} />
        </View>
      )}
    </View>
  );
};

export default LoginForm;
