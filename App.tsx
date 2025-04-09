import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, Platform } from 'react-native';
import * as Linking from 'expo-linking';
import * as IntentLauncher from 'expo-intent-launcher';

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

interface ErrorDetails {
  message: string;
  code?: string;
}

export default function App(): JSX.Element {
  const handleEyethenaPress = async (status: 'success' | 'error'): Promise<void> => {
    const url: string = `eyethena-app://sync?status=${status}`;
    console.log('Attempting to launch Eyethena:', { url, platform: Platform.OS, version: Platform.Version });
    
    try {
      await Linking.openURL(url);
      console.log('Successfully opened Eyethena app');
    } catch (error) {
      console.error('Error launching Eyethena:', { error, url, platform: Platform.OS, version: Platform.Version });
      Alert.alert('Error', 'Could not open Eyethena app. Please make sure it is installed.');
    }
  };

  const handleICarePress = async (): Promise<void> => {
    console.log('Attempting to launch iCare:', { platform: Platform.OS, version: Platform.Version });
    
    if (Platform.OS === 'android') {
      try {
        console.log('Starting activity with:', {
          action: 'com.icarefinland.patient2.action.AUTO_SYNC',
          packageName: 'com.icarefinland.patient2.us.internal'
        });
        
        await IntentLauncher.startActivityAsync('com.icarefinland.patient2.action.AUTO_SYNC', {
          packageName: 'com.icarefinland.patient2.us.internal'
        });
        console.log('Successfully opened iCare app');
      } catch (error: unknown) {
        const typedError = error as ErrorDetails;
        console.error('Error launching iCare:', { 
          error,
          errorMessage: typedError.message,
          errorCode: typedError.code,
          errorDetails: error,
          platform: Platform.OS, 
          version: Platform.Version 
        });
        Alert.alert('Error', 'Could not open iCare app. Please make sure it is installed.');
      }
    } else {
      console.warn('This functionality is only available on Android devices');
      Alert.alert('Error', 'This functionality is only available on Android devices');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to my Expo app!</Text>
      <Button
        title="Launch Eyethena (Start)"
        onPress={() => handleEyethenaPress('success')}
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