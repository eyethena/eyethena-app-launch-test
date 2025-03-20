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
  const handlePress = async (): Promise<void> => {
    const phoneNumber: string = '917-605-5448';
    
    if (Platform.OS === 'ios') {
      try {
        const facetimeUrl: string = `facetime://${phoneNumber}`;
        const supported: boolean = await Linking.canOpenURL(facetimeUrl);
        
        if (supported) {
          await Linking.openURL(facetimeUrl);
        } else {
          Alert.alert('Error', 'FaceTime is not available on this device');
        }
      } catch (error) {
        Alert.alert('Error', 'Could not open FaceTime');
      }
    } else {
      // Android stub
      Alert.alert('Android', 'Video call functionality coming soon for Android!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to my Expo app!</Text>
      <Button
        title="Start Video Call"
        onPress={handlePress}
        color="#841584"
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