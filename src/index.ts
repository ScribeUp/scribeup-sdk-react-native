import { NativeModules, NativeEventEmitter, Platform } from 'react-native';

const { RNScribeupSDK } = NativeModules;

interface SubscriptionManagerOptions {
  url: string;
  productName?: string;
}

interface SubscriptionManagerError {
  code: number;
  message: string;
}

class ScribeupSDK {
  private eventEmitter: NativeEventEmitter;

  constructor() {
    this.eventEmitter = new NativeEventEmitter(RNScribeupSDK);
  }

  /**
   * Present the Subscription Manager UI
   * @param options Configuration options for the Subscription Manager
   * @returns Promise that resolves when the Subscription Manager is dismissed
   */
  present(options: SubscriptionManagerOptions): Promise<void> {
    return RNScribeupSDK.present(options);
  }

  /**
   * Add an event listener for the onExit event
   * @param callback Callback function that receives the error if any
   * @returns Function to remove the event listener
   */
  addOnExitListener(callback: (error?: SubscriptionManagerError) => void): () => void {
    return this.eventEmitter.addListener('onExit', (event) => {
      callback(event?.error);
    }).remove;
  }
}

export default new ScribeupSDK();

// Export the component and its types
export { SubscriptionManager } from './components/SubscriptionManager';
export type { SubscriptionManagerProps, SubscriptionManagerError } from './components/SubscriptionManager'; 