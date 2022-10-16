import {ref, watchEffect} from 'vue';
import {projectFirestore} from '../firebase/config';

const getCollection = (collection, id) => {
  const document = ref (null);
  const error = ref (null);

  let collectionRef = projectFirestore.collection (collection).doc (id);

  console.log(collectionRef);

  const unsubscribed = collectionRef.onSnapshot (
    async (doc) => {
      if (doc.data ()) {
        document.value = {...doc.data (), id: doc.id};
        error.value = null;
      } else {
        error.value = 'Could not fetch';
      }
    },
    err => {
      console.log (err.message);
      error.value = err.message;
    }
  );
  

  watchEffect (onInvalidate => {
    onInvalidate (() => unsubscribed());
  });

  console.log(document);

  return {
    document,
    error,
  };
};

export default getCollection;
