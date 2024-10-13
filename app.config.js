const IS_DEV = process.env.APP_VARIANT === 'development';
const IS_PREVIEW = process.env.APP_VARIANT === 'preview';

const id = 'com.msevera.gc2';

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return `${id}.dev`;
  }

  if (IS_PREVIEW) {
    return `${id}.preview`;
  }

  return id;
};

const getAppName = () => {
  if (IS_DEV) {
    return 'gc (Dev)';
  }

  if (IS_PREVIEW) {
    return 'gc (Preview)';
  }

  return 'gc';
};

export default {
  "expo": {
    "name": getAppName(),
    "slug": "gc2",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/images/icon.png",
    "scheme": "myapp",
    "userInterfaceStyle": "automatic",
    "splash": {
      "image": "./assets/images/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": getUniqueIdentifier()
    },
    "android": {
      "package": getUniqueIdentifier(),
      "adaptiveIcon": {
        "foregroundImage": "./assets/images/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "bundler": "metro",
      "output": "static",
      "favicon": "./assets/images/favicon.png"
    },
    "plugins": [
      "expo-router"
    ],
    "experiments": {
      "typedRoutes": true
    },
    "extra": {
      "eas": {
        "projectId": "a4e5472e-3961-4ca2-bac4-bc7b5f04bb30"
      }
    },
    "runtimeVersion": {
      "policy": "appVersion"
    },
    "updates": {
      "url": "https://u.expo.dev/a4e5472e-3961-4ca2-bac4-bc7b5f04bb30"
    }
  }
}
