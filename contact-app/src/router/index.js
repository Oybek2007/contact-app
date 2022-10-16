// Basic methods
import {createRouter, createWebHistory} from 'vue-router';
import {projectAuth} from '../firebase/config';

// Basic components
import AllContacts from '../views/AllContacts.vue'; // AllContacts component => Hamma kontaktlar

import Login from '../views/auth/Login.vue'; // Login form => Login(Tizimga kirish)

import Signup from '../views/auth/Signup.vue'; // Signup form => Signup(Tizimda ro'yxatdan o'tish)

import CreateContact from '../views/CreateContact.vue'; // CreateContact component => Yangi kontakt yaratish

import EditContact from '../components/EditContact.vue'; // Edit an existing contact component => Kontaktni tahrirlsh

// For Required or NoRequired Auth
const requiredAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  if (!user) {
    next ({name: 'login'});
  } else {
    next ();
  }
};

const requiredNoAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  if (user) {
    next ({name: 'allContacts'});
  } else {
    next ();
  }
};

const routes = [
  {
    path: '/',
    name: 'allContacts',
    component: AllContacts,
    beforeEnter: requiredAuth,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter: requiredNoAuth,
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup,
  },
  {
    path: '/createContact',
    name: 'CreateContact',
    component: CreateContact,
    beforeEnter: requiredAuth,
  },
  {
    path: '/:id',
    name: 'EditContact',
    component: EditContact,
    props: true,
    beforeEnter: requiredAuth,
  },
];

const router = createRouter ({
  history: createWebHistory (),
  routes,
});

export default router;
