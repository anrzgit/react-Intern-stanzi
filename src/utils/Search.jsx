import { useState } from 'react';
import { CarsData } from '../constants';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();



    const filteredCars = searchTerm!=='' ? CarsData.filter((car) => {
        return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    }) : [] ;

    return (
        <div className='flex absolute flex-col ' >
            <input
                className="mb-4 bg-transparent border border-white text-white px-4 py-2 rounded-lg focus:outline-none focus:border-white pl-2"
                type="text"
                placeholder="Search for a car"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
            />
            <div className='bg-gray-400 h-max rounded-md  z-20' >
            {filteredCars.length > 0 && filteredCars.map((car, index) => (
                index < 10 && <div key={index}
                className=' bg-center h-max py-1 px-2'
            >
                <h2>{car.name}</h2>
            </div>
            ))}
            {filteredCars.length > 0 && 
            <>
            <hr />
            <button 
            onClick={()=> navigate(`/search/cars/${searchTerm}`)}
            className='px-2' 
            type="button">Show All</button>
            </>}
            </div>
        </div>
    )
}

export default Search
