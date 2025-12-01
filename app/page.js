'use client';
import { useState } from "react";
import WelcomeCard from "../components/WelcomeCard";

function Counter() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}

export default function Home() {
  return (
    
         <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Välkommen Ilya Fredriksson 🚀
        </h1>
        <p className="text-xl text-gray-600">
          Det här är min första Next.js-applikation
        </p>
        <div className="mt-8">
          <p className="text-lg">
            Datum: {new Date().toLocaleDateString('sv-SE')}
          </p>
        </div>
        <div className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
          <p className= "text-lg">Klicka på knappen för att öka räknaren:</p>
          <Counter />
        </div>
        
        {/* Använd WelcomeCard komponenten */}
        <div className="mt-8">
          <WelcomeCard 
            title="Min första komponent!" 
            description="Detta är en återanvändbar komponent som jag importerat från components-mappen."
          />
        </div>
      </div>
    </main>
  )
   

}
