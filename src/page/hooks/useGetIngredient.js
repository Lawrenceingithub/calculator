import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../config/firebase-config';

export const useGetIngredient = () => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const ingredientCollectionRef = collection(db, 'ingredients');

    const unsubscribe = onSnapshot(ingredientCollectionRef, (snapshot) => {
      const ingredientList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setIngredients(ingredientList);
    });

    return () => unsubscribe();
  }, []);

  return ingredients;
};