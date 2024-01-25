import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
 appName: 'AppAngular',
  webDir: 'dist/app-angular',
  server: {
    androidScheme: 'https'
  }
};

export default config;