// stores.js
import { writable } from 'svelte/store';

// Initial cart state
const initialCart: any[] = [];

// Initial cart state
const initialUser: any = {};

// Create the cart store
export const cart = writable(initialCart);
export const order = writable(initialCart);

// Current User
export const authData = writable(initialUser);

const sidebarOpen = writable(true);

const toggleSidebar = () => {
	sidebarOpen.update((prev) => !prev);
};

const closeSidebar = () => {
	sidebarOpen.update(() => false);
};

export { sidebarOpen, toggleSidebar, closeSidebar };


