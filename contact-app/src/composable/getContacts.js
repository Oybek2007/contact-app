import { ref, watchEffect } from 'vue';
import { projectFirestore } from '../firebase/config';

const getContact = (collection, query) => {
  const contacts = ref(null);
  const error = ref(null);

  let collectionRef = projectFirestore
    .collection(collection)
    .orderBy('createdAt', 'desc');
  if (query) {
    collectionRef = collectionRef.where(...query);
  }

  const unsubscribed = collectionRef.onSnapshot(
    snap => {
      let result = [];
      snap.docs.forEach(doc => {
        result.push({ ...doc.data(), id: doc.id });
      });
      contacts.value = result;
      error.value = null;
    },
    err => {
      console.log(err.message);
      error.value = err.message;
    }
  );

  let collectionRef2 = projectFirestore
    .collection(collection)
    .orderBy('createdAt', 'desc');
  if (query) {
    collectionRef = collectionRef.where(...query);
  }



  watchEffect(onInvalidate => {
    onInvalidate(() => unsubscribed());
  });

  return {
    contacts,
    error,
  };
};

export default getContact;
