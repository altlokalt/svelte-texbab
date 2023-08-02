// stores.js
import { writable } from 'svelte/store';

// Initial cart state
const initialCart: any[] = [];

// Create the cart store
export const cart = writable(initialCart);
