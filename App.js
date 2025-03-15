import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, Platform, Linking } from 'react-native';

export default function App() {
  const handlePress = async () => {
    const phoneNumber = '917-605-5448';
    
    if (Platform.OS === 'ios') {
      try {
        const facetimeUrl = `facetime://${phoneNumber}`;
        const supported = await Linking.canOpenURL(facetimeUrl);
        
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

const styles = StyleSheet.create({
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
