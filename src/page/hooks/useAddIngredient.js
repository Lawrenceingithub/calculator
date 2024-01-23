import { storage, db } from "../../config/firebase-config";
import { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

export const useAddIngredient = () => {
  const ingredientCollectionRef = collection(db, "ingredients");
  const [loading, setLoading] = useState(false);

  const addIngredient = async ({
    ingredientName,
    ingredientType,
    ingredientPrice,
    ingredientWeight,
    ingredientPhoto,
    description,
  }) => {
    setLoading(true);

    try {
      // 创建一个引用到存储桶中的位置，并指定新的文件名
      const storageRef = ref(storage, `ingredients-photo/${ingredientName}-${ingredientWeight}`);
    
      // 将图片文件上传到存储桶中
      await uploadBytes(storageRef, ingredientPhoto);
    
      // 获取上传后的图片的存储路径
      const photoPath = await getDownloadURL(storageRef);
    
      // 在数据库中添加材料信息
      await addDoc(ingredientCollectionRef, {
        ingredientName,
        ingredientType,
        ingredientPrice,
        ingredientWeight,
        ingredientPhoto: photoPath,
        description,
        createdAt: serverTimestamp(),
      });
    
      alert("材料添加成功")
    } catch (error) {
      alert("材料添加不成功")
      console.error("添加材料时出错:", error);
    }
    
    setLoading(false);
  }

  const deleteIngredient = async (ingredientId) => {
    try {
      const ingredientDocRef = doc(db, "ingredients", ingredientId);
      await deleteDoc(ingredientDocRef);

      console.log("材料删除成功");
    } catch (error) {
      console.error("删除材料时出错:", error);
    }
  };

  const editIngredient = async (ingredientId, updatedIngredient) => {
    try {
      const ingredientDocRef = doc(db, "ingredients", ingredientId);
      await updateDoc(ingredientDocRef, {
        ...updatedIngredient,
        updatedAt: serverTimestamp(),
      });

      console.log("材料编辑成功");
    } catch (error) {
      console.error("编辑材料时出错:", error);
    }
  };

  return { addIngredient, deleteIngredient, editIngredient, loading };
};