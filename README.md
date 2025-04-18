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
To initialize the ScribeUp Experience, an authenticated URL will need to be generated first. Your server can generate the url by sending a POST request to the `/v1/auth/users/init` endpoint. DO NOT ever send this request from the client side and publicly expose your API keys.

The view url returned is valid for 5 minutes, after which it expires and can no longer be used.

For details on completing authentication and generating a valid authenticated URL, please visit [ScribeUp Documentation](https://docs.scribeup.io).

```jsx
import { SubscriptionManager } from '@ScribeUp/scribeup-sdk-react-native';

<SubscriptionManager
  visible={showSDK}
  url={authenticatedUrl}
  productName={productName || undefined}
  onExit={onExit}
/>
```

The `onExit` callback is invoked when the user exits the subscription manager—either intentionally or as a result of an error.

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
  productName="Subscription360"
  onExit={(error) => console.log('Exited', error)}
/>

setShowSDK(true);
```


## License
ScribeUpSDK is released under the MIT license. See the LICENSE file for details.