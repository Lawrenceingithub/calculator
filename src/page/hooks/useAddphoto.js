// config/firebase-config.js

import firebase from "firebase/app";
import "firebase/storage";

// Firebase配置信息
const firebaseConfig = {
  // 将你的配置信息放在这里
};

// 初始化Firebase
firebase.initializeApp(firebaseConfig);

// 获取存储实例
const storage = firebase.storage();

export { storage };