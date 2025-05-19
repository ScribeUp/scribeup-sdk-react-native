import React, { useEffect } from 'react';
import { NativeModules, NativeEventEmitter, Platform } from 'react-native';

const { RNScribeupSDK } = NativeModules;

export interface SubscriptionManagerProps {
  visible: boolean;
  url: string;
  productName?: string;
  onExit?: (error?: SubscriptionManagerError) => void;
}

export interface SubscriptionManagerError {
  code: number;
  message: string;
}

export const SubscriptionManager: React.FC<SubscriptionManagerProps> = ({
  visible,
  url,
  productName,
  onExit,
}) => {
  useEffect(() => {
    if (!visible) return;

    const eventEmitter = new NativeEventEmitter(RNScribeupSDK);
    const subscription = eventEmitter.addListener('onExit', (event) => {
      onExit?.(event?.error);
    });

    RNScribeupSDK.present({
      url,
      productName,
    }).catch((error: any) => {
      onExit?.({
        code: error.code || -1,
        message: error.message || 'Unknown error occurred',
      });
    });

    return () => {
      subscription.remove();
    };
  }, [visible, url, productName, onExit]);

  return null;
}; 