import { AppConfig, UserSession, showConnect } from '@stacks/connect';

const appConfig = new AppConfig(['store_write', 'publish_data']);
export const userSession = new UserSession({ appConfig });

export function connectWallet(onFinishCallback) {
  showConnect({
    appDetails: {
      name: 'Stack Skill Bridge',
      icon: window.location.origin + '/logo.png', // اپنی ایپ کا لوگو یہاں ڈالیں
    },
    redirectTo: '/',
    onFinish: onFinishCallback, // کنیکٹ ہونے کے بعد کیا کرنا ہے
    userSession,
  });
}