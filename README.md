# @scribeup/react-native-scribeup

React Native wrapper for the ScribeUp SDK, providing subscription management capabilities for iOS and Android.

## Installation

```sh
npm install @scribeup/react-native-scribeup
# or
yarn add @scribeup/react-native-scribeup
```

### iOS

1. Add the following to your `Podfile`:
```ruby
pod 'RNScribeupSDK', :path => '../node_modules/@scribeup/react-native-scribeup'
```

2. Run pod install:
```sh
cd ios && pod install
```

### Android

1. Add the following to your `android/settings.gradle`:
```gradle
include ':react-native-scribeup'
project(':react-native-scribeup').projectDir = new File(rootProject.projectDir, '../node_modules/@scribeup/react-native-scribeup/android')
```

2. Add the following to your `android/app/build.gradle`:
```gradle
dependencies {
    implementation project(':react-native-scribeup')
}
```

## Usage

```typescript
import ScribeupSDK from '@scribeup/react-native-scribeup';

// Present the subscription manager
try {
  await ScribeupSDK.present({
    url: 'https://example.com/subscriptions',
    productName: 'My Subscription Manager' // optional
  });
} catch (error) {
  console.error('Error:', error);
}

// Listen for exit events
const removeListener = ScribeupSDK.addOnExitListener((error) => {
  if (error) {
    console.error('Error:', error.message);
  } else {
    console.log('Subscription manager closed successfully');
  }
});

// Remove listener when done
removeListener();
```

## API Reference

### `present(options: SubscriptionManagerOptions): Promise<void>`

Presents the subscription manager UI.

#### Options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| url | string | Yes | The URL to load in the subscription manager |
| productName | string | No | The title to display in the header (defaults to "Subscription Manager") |

### `addOnExitListener(callback: (error?: SubscriptionManagerError) => void): () => void`

Adds a listener for the exit event. Returns a function to remove the listener.

#### Error Object

```typescript
interface SubscriptionManagerError {
  code: number;
  message: string;
}
```

## Development

1. Clone the repository:
```sh
git clone https://github.com/scribeup/react-native-scribeup.git
cd react-native-scribeup
```

2. Install dependencies:
```sh
yarn install
```

3. Build the TypeScript files:
```sh
yarn prepare
```

4. Link the package to your example app:
```sh
yarn bootstrap
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT