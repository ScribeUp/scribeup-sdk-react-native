# ScribeUpSDK for React Native

---

## Installation

```bash
npm install git+https://github.com/ScribeUp/scribeup-sdk-react-native.git#0.0.1
```

Latest Version
```
0.0.1
```

---

## Quick Start

For details on completing authentication and generating a valid URL, please visit [ScribeUp Documentation](https://docs.scribeup.io).

```jsx
import { SubscriptionManager } from '@ScribeUp/react-native-scribeup-sdk';

<SubscriptionManager
  visible={showSDK}
  url={authenticatedUrl}
  productName={productName || undefined}
  onExit={onExit}
/>
```

The `onExit` callback will be invoked when the user closes the subscription manager or an error occurs.

---

## Component Props

| Prop          | Type                              | Required | Description                                          |
| ------------- | --------------------------------- | -------- | ---------------------------------------------------- |
| `visible`     | `boolean`                         | ✔️       | Show or hide the subscription manager modal.         |
| `url`         | `string`                          | ✔️       | The authenticated URL to load in the WebView.        |
| `productName` | `string`                          |          | Optional header title (default: “Subscription Manager”). |
| `onExit`      | `(error?: { code: number; message: string }) => void` |        | Called when user exits or an error occurs.           |

---

## Example

To launch your subscription manager:

```js
const [showSDK, setShowSDK] = useState(false);
const authenticatedUrl = "...";

<SubscriptionManager
  visible={showSDK}
  url={authenticatedUrl}
  onExit={(error) => console.log('Exited', error)}
/>

setShowSDK(true);
```


## License
ScribeUpSDK is released under the MIT license. See the LICENSE file for details.