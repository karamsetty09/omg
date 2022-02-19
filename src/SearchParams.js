 import {useState} from 'react';

const animals = ['dog', 'cat', 'bird', 'hens'];

const SearchParams = () => {
    
    // const locationTuple = useState("Seattle, WA");
    // const location = locationTuple[0];
    // const setLocation = locationTuple[1];
    // Above three lines can be converted to below one line - object destructuring.
    const [location, setLocation] = useState("Seattle, WA");
    const [animal, setAnimal] =useState();

    function updateLocation (event) {
        setLocation(event.target.value);
    };

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
          <button>Submit</button>
        </form>
      </div>
    );
}

export default SearchParams;