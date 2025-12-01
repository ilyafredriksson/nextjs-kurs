 function WelcomeCard({ title, description }) {
     return (
       <div className="border p-6 rounded-lg shadow-md">
         <h2 className="text-2xl font-bold mb-2">{title}</h2>
         <p className="text-gray-600">{description}</p>
       </div>
     )
   }

   export default WelcomeCard;