import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SubscriptionManager } from '@ScribeUp/scribeup-sdk-react-native';

const App = () => {
  const [showSDK, setShowSDK] = useState(false);
  
  // This is a mock URL - in a real app, you would get this from your backend
  const mockAuthenticatedUrl = 'https://app.scribeup.io/subscription-manager?token=mock-token';

  const handleExit = (error?: { code: number; message: string }) => {
    setShowSDK(false);
    if (error) {
      console.error('SDK Error:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>ScribeUp SDK Example</Text>
        <Text style={styles.description}>
          This example demonstrates how to integrate the ScribeUp SDK into your React Native app.
        </Text>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => setShowSDK(true)}
        >
          <Text style={styles.buttonText}>Open Subscription Manager</Text>
        </TouchableOpacity>
      </View>

      <SubscriptionManager
        visible={showSDK}
        url={mockAuthenticatedUrl}
        productName="Example App"
        onExit={handleExit}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 32,
    color: '#666',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default App; 