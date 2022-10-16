import {projectFirestore} from '@/firebase/config';
import {ref} from 'vue';

const useDocument = (collection, id) => {
  const error = ref (null);
  const isPending = ref (null);

  const docRef = projectFirestore.collection (collection).doc (id);   // A continuously changing variable

  // Delete Contact Function
  const deleteContact = async () => {
    isPending.value = true;

    try {
      const res = await docRef.delete ();
      isPending.value = false;
      return res;
    } catch (err) {
      console.log (err.message);
      error.value = `Could not delete element !`;
      isPending.value = false;
    }
  };

  // Edit a contact
  const updateContact = async updates => {
    isPending.value = true;                      // For a "Loading"

    try {
      const res = await docRef.update (updates); // "Updates" are variables of the contact being updated
      isPending.value = false;                   // For a "Loading"
      return res;
    } catch (err) {
      console.log (err.message);
      error.value = `Could not old element update element !`;
      isPending.value = false;
    }
  };

  return {
    error,
    isPending,
    deleteContact,
    updateContact,
  };
};

export default useDocument;
