import {writable} from 'svelte/store';
import type { JuiceOrderInterface } from './types';


// This is to notify when a new juice is bought by the user
export const orderCreateNotifier = writable<JuiceOrderInterface | null>(null);
