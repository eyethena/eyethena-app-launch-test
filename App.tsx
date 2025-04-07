import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, Platform, Linking } from 'react-native';

interface Styles {
  container: {
    flex: number;
    backgroundColor: string;
    alignItems: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline';
    justifyContent: 'center' | 'flex-start' | 'flex-end' | 'space-around' | 'space-between' | 'space-evenly';
    gap: number;
  };
  text: {
    fontSize: number;
    marginBottom: number;
  };
}

export default function App(): JSX.Element {
  const handleEyethenaPress = async (status: 'start' | 'error'): Promise<void> => {
    const url: string = `eyethena-app://sync?status=${status}`;
    
    try {
      await Linking.openURL(url);
    } catch (error) {
      Alert.alert('Error', 'Could not open Eyethena app. Please make sure it is installed.');
    }
  };

  const handleICarePress = async (): Promise<void> => {
    const url: string = Platform.select({
      ios: 'icare-app://',
      android: 'intent://#Intent;' +
        'package=com.icarefinland.patient2.us.internal;' +
        'action=com.icarefinland.patient2.action.AUTO_SYNC;' +
        'end',
      default: 'icare-app://'
    }) as string;
    
    try {
      await Linking.openURL(url);
    } catch (error) {
      Alert.alert('Error', 'Could not open iCare app. Please make sure it is installed.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to my Expo app!</Text>
      <Button
        title="Launch Eyethena (Start)"
        onPress={() => handleEyethenaPress('start')}
        color="#841584"
      />
      <Button
        title="Launch Eyethena (Error)"
        onPress={() => handleEyethenaPress('error')}
        color="#ff0000"
      />
      <Button
        title="Launch iCare"
        onPress={handleICarePress}
        color="#0066cc"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles: Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
}); 