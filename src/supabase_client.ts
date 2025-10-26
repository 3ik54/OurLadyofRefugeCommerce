
import {createClient} from '@supabase/supabase-js';

const api_key:string= import.meta.env.VITE_APIKEY;




export const supabase = createClient('https://egerukxpytbclfcnhfib.supabase.co',api_key);
export const key:string= import.meta.env.VITE_APIKEY;


