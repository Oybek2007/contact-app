import {ref} from 'vue';
import {projectAuth} from '../firebase/config';

const error = ref (null);
const isPending = ref (false);

const signup = async (email, password, displayName) => {
  isPending.value = true;
  try {
    const res = await projectAuth.createUserWithEmailAndPassword (
      email,
      password
    );
    isPending.value = false;
    if (!res) {
      throw new Error ('You Cannot Sign Up!');
    }
    res.user.updateProfile({displayName});
    error.value = null;
    return res;
  } catch (e) {
    console.log (e.message);
    isPending.value = false;
    error.value = e.message;
  }
};

const useSignUp = () => {
  return {
    error,
    signup,
    isPending,
  };
};

export default useSignUp;
