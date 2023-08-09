// stores.js
import { writable } from 'svelte/store';

// Initial cart state
const initialCart: any[] = [];

// Initial cart state
const initialUser: any = {};

// Create the cart store
export const cart = writable(initialCart);
export const order = writable(initialCart);

// Current User's username
export const username = writable('');
export const userPb = writable(initialUser);

