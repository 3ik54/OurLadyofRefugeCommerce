import { useState, type FormEvent} from "react";
import { supabase } from "./supabase_client";


function Authentication(){

    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    
    const form_submission = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
            const {data, error} = await supabase.auth.signInWithPassword({email,password})
            if (error){
                console.error("Error occurred", error);
                return
            }
            else{
                console.log("Logged in!", data);

            }
        
    }

    return(<>
            <h1>Seller Login</h1>

            <form onSubmit={form_submission}>
                <label htmlFor="">Email <input onChange={(e)=>(setEmail(e.target.value))} 
                type="text" 
                name="email"  
                placeholder="email@example.com"/>
                </label>
                
                <br></br>

                <label htmlFor="">Password <input onChange={(e)=>(setPassword(e.target.value))}type="text" name="password" placeholder="password" /></label>
                
                <button>Submit</button>

            </form>
            </>


        




    );
    


}

export default Authentication;