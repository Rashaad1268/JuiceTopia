import {writable} from 'svelte/store';
import type { JuiceOrderInterface } from './types';


// This is to notify the UI when a new order is created
export const orderCreateNotifier = writable<JuiceOrderInterface | null>(null);
