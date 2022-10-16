import {ref} from 'vue';
import {projectFirestore} from '@/firebase/config';

const useContactAdd = (collection, doc) => {
  const error = ref (null);
  const isPending = ref (false);

  // New Contact Add to Firebase
  const addContact = async (collection, doc) => {
    isPending.value = true;
    try {
      console.log ('Buuuuu collection', collection);
      const res = await projectFirestore.collection (collection).add (doc);
      isPending.value = false;
      return res;
    } catch (err) {
      console.log (err.message);
      error.value = err.message;
      isPending.value = false;
      console.log (isPending.value);
    }
  };

  return {
    addContact,
    isPending,
    error,
  };
};

export default useContactAdd;
