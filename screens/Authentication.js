import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';

export default function Authentication(props) {
  return (
    <View style={styles.screen}>
      <GoogleSigninButton 
      style={{ width: 200, height:70}}
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Dark}
      onPress={props.onGoogleButtonPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
