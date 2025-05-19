import React from 'react';
import { Modal, Platform, StyleSheet, View } from 'react-native';
import WebView from 'react-native-webview';

export interface SubscriptionManagerProps {
  visible: boolean;
  url: string;
  productName?: string;
  onExit?: (error?: { code: number; message: string }) => void;
}

export const SubscriptionManager: React.FC<SubscriptionManagerProps> = ({
  visible,
  url,
  productName = 'Subscription Manager',
  onExit,
}) => {
  const handleNavigationStateChange = (navState: any) => {
    // Handle navigation state changes if needed
    if (navState.url !== url && navState.url.includes('exit')) {
      onExit?.();
    }
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={() => onExit?.()}
    >
      <View style={styles.container}>
        <WebView
          source={{ uri: url }}
          style={styles.webview}
          onNavigationStateChange={handleNavigationStateChange}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
          scalesPageToFit={true}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  webview: {
    flex: 1,
  },
}); 