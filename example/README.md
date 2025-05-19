# ScribeUp SDK React Native Example

This is an example project demonstrating how to integrate the ScribeUp SDK into a React Native application.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Install iOS dependencies:
```bash
cd ios
pod install
cd ..
```

3. Start the Metro bundler:
```bash
npm start
```

4. Run the app:

For iOS:
```bash
npm run ios
```

For Android:
```bash
npm run android
```

## Features Demonstrated

- Basic SDK integration
- Opening the subscription manager
- Handling exit events
- Custom styling and UI integration

## Important Notes

- The example uses a mock authenticated URL. In a real application, you would need to:
  1. Generate an authenticated URL from your backend
  2. Pass this URL to the SDK
  3. Handle any errors that may occur during the subscription process

- The SDK requires proper configuration of your native iOS and Android SDKs. Make sure you have:
  1. Added the necessary API keys to your native configurations
  2. Set up the required permissions in your app
  3. Configured the proper URL schemes for deep linking

## Troubleshooting

If you encounter any issues:

1. Make sure all dependencies are properly installed
2. Check that the native SDKs are properly configured
3. Verify that you're using the correct version of React Native
4. Ensure your development environment is properly set up for React Native development 