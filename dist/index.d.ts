export interface SubscriptionManagerProps {
  visible: boolean;
  url: string;
  productName?: string;
  onExit(error?: { code: number; message: string }): void;
}

export function SubscriptionManager(props: SubscriptionManagerProps): JSX.Element;
