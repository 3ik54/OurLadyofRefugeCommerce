import { useState, type FormEvent} from "react";
import { supabase } from "./supabase_client";
import './Auth.css'

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

            <form onSubmit={form_submission}>
                <label className="username_label">Email <input className="username_input" onChange={(e)=>(setEmail(e.target.value))} 
                type="text" 
                name="email"  
                placeholder="email@example.com"/>
                </label>
                
                <br></br>

                <label className="username_label" htmlFor="">Password <input className="username_input" onChange={(e)=>(setPassword(e.target.value))}type="text" name="password" placeholder="password" /></label>
                <div className="submit_button"><button >Submit</button></div>
                

            </form>
            </>


        




    );
    


}

export default Authentication;