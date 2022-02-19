 import { useState, useEffect } from "react";
 import Pet from './Pet';

 const animals = ["dog", "cat", "bird", "hens"];

 const SearchParams = () => {
   // const locationTuple = useState("Seattle, WA");
   // const location = locationTuple[0];
   // const setLocation = locationTuple[1];
   // Above three lines can be converted to below one line - object destructuring.
   const [location, setLocation] = useState("Seattle, WA");
   const [animal, setAnimal] = useState("");// should have "" comma's
   const [breed, setBreed] = useState("");
   const [pets, setPets] = useState([]);
   const breeds = [];

   useEffect(() => {
       requestPets();
   }, []); //eslint-disable-line react-hooks/exhaustive-deps
   // square bracket is must, if not calls unlimited api calls.

   async function requestPets(){
       const res = await fetch(
           `http://pets-v2.dev-apis.com/pets?animals=${animal}&location=${location}&breed=${breed}`
       )
       const json = await res.json();
       setPets(json.pets)
   }

   function updateLocation(event) {
     setLocation(event.target.value);
   }

   return (
     <div className="search-params">
       <form>
         <label htmlFor="location">
           Location
           <input
             id="location"
             // onChange={event => setLocation(event.target.value)}
             onChange={updateLocation}
             value={location}
             placeholder="Location"
           />
         </label>
         <label htmlFor="animal">
           Animals
           <select
             id="animal"
             value={animal}
             onChange={(e) => setAnimal(e.target.value)}
             onBlur={(e) => setAnimal(e.target.value)}
           >
             <option value=""></option>
             {animals.map((animal) => (
               <option value={animal} key={animal}>
                 {animal}
               </option>
             ))}
           </select>
         </label>
         <label htmlFor="breed">
             Breed
             <select
                id="breed"
                value={breed}
                onChange={(e) => setBreed(e.target.value)}
                onBlur={(e) => setBreed(e.target.value)}
             >
                 <option value=""></option>
                 {breeds.map((breed)=>(
                     <option value={breed} key={breed}>{breed}</option>
                 ))}
             </select>
         </label>
         <button>Submit</button>
       </form>
       {
           pets.map((pet) => (
               <Pet name={pet.name} animal={pet.animal} breed={pet.breed} key={pet.id}></Pet>
           ))
       }
     </div>
   );
 };

 export default SearchParams;