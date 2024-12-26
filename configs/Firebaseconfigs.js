// Import the functions you need from the SDKs you need
import { initializeApp,getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,initializeAuth,getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAu_LiTkTpl1g7fG77oE4Aak5W8kH-EM54",
  authDomain: "ai-travel-planner-11b15.firebaseapp.com",
  projectId: "ai-travel-planner-11b15",
  storageBucket: "ai-travel-planner-11b15.firebasestorage.app",
  messagingSenderId: "115619738229",
  appId: "1:115619738229:web:4ea9b4dd926b239e61fe3c",
  measurementId: "G-S2S8RRHGPH"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app,{
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
