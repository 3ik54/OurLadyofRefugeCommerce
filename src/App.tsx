import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {supabase,key} from './supabase_client.ts'
import Authentication from './Auth.tsx';
import './App.css'

function App() {

  console.log(key);
  return <Authentication/>
}

export default App
