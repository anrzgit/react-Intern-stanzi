import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from '../utils/motion'
import { CarsData } from '../constants';

const ProjectCard = ({
    index,
    name,
    image,
    year,
    peoplenumber,
    driven,
    kilometers,
    transmisson,
    price,  
  }) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className='bg-teal-50 p-5 rounded-2xl sm:w-[400px] w-full justify-evenly my-12'
          >
            <div className='relative w-full h-[230px]'>
              <img
                src={image}
                alt='project_image'
                className='w-full h-full object-cover rounded-2xl'
              />
            </div>
    
            <div className='mt-5 '>
                <div className='flex justify-between ' >
                    <h3 className='text-black font-bold text-[24px]'>{name}</h3>
                    <div className='flex items-center justify-center w-8 h-10  '  >
                        <h4>{year}</h4>
                    </div>
                </div> 
                <div className='flex justify-start relative ' >
                    <div className="flex w-1/2" >
                        <i className="fa fa-users top-0 left-0 mt-2 w-6"></i>
                        <h4 className="w-4 mt-1" >{peoplenumber}</h4>
                        <p className='text-secondary text-[14px] mt-[7px]'>  People</p>
                    </div>
                    <div className="flex w-1/2" >
                        <i className="fa-solid fa-gas-pump top-0 left-0 mt-2 w-6"></i>
                        <h4 className="w-4 mt-1" >{driven}</h4>
                    </div>
                </div>
                <div className='flex justify-start relative mb-4' >
                    <div className="flex w-1/2" >
                        <i className="fa-solid fa-gauge top-0 left-0 mt-2 w-6"></i>
                        <h4 className="min-w-min mt-1" >{kilometers}</h4>
                    </div>
                    <div className="flex w-1/2" >
                        <i className="fa-solid fa-gear top-0 left-0 mt-2 w-6"></i>
                        <h4 className="w-4 mt-1" >{transmisson}</h4>
                    </div>
                </div>
            </div>
            <hr className= "" />
            <div className='flex justify-start relative mb-4' >
                <div className='mt-4 flex flex-wrap gap-2 w-1/2 '>
                    <h1 className='font-bold text-[20px]'>{`${price}`}</h1>
                    <h5 className="mt-1" >/month</h5>
                </div>
                <div className="mt-2 flex w-1/2 place-items-center" >
                    <div className="mt-2 px-2 my-1 bg-blue-300 rounded-lg" >
                        <i className="fa-regular fa-heart top-0 left-0"></i>
                    </div>
                    <div className="m-2 mx-6 px-2  py-1 bg-blue-500 rounded-lg hover:cursor-pointer " >
                        <h1 className="text-white" >Rent now</h1>
                    </div>
                </div>
            </div>
          </Tilt>
        </motion.div>
      );
  };


const DisplayCars = () => {
    

    const { searchTerm } = useParams();
    const [page, setPage] = useState(1); 
    const navigate = useNavigate();


    const allCarsList = searchTerm!=='' ? CarsData.filter((car) => {
        return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    }) : [] ;
    
  
    // useEffect(() => {
    //   if(pageNumber){
    //     setPage(parseInt(pageNumber));
    //   }
    // }, [pageNumber]);
    
  
    const selectPageHandler = (index) => {
      if(index >= 1 && index <= Math.ceil(allCarsList.length/6) && index !== page){
          navigate(`/cars/${index}`);
      }
    }
  
  
    return (
      <>
        <div className='bg-gray-500 bg-center h-max p-2 sm:p-12' >
          <div className='sm:flex flex-wrap justify-evenly py-1'>
            {allCarsList.slice(page*6 - 6, page*6).map((project, index) => (
              <ProjectCard key={`FlutterProjects-${index}`} embedId={index} {...project} />
              ))
            }
          </div>
          
          {/* pagination in cars */}
  
          <div className="  relative" >
              <div className="inline">
                  <span>{6*page - 5} - {6*page} of {allCarsList.length}</span>
              </div>
              <div className="page float-right mr-16" >
              {
                  allCarsList.length > 0 && (
                      <>
                      <span className="bg-gray-50 rounded-lg p-2 mr-3 hover:cursor-pointer " 
                          onClick={()=>selectPageHandler(page-1)} >Prev</span>
                      {
                          [...Array(Math.ceil(allCarsList.length/6))].map((_, index) => {
                          return (
                              <span className={`${page === index+1 ? 'bg-yellow-300' : 'bg-gray-50' }   rounded-lg p-2 mr-3 hover:cursor-pointer `} 
                              key={index} 
                              onClick={() => selectPageHandler(index+1)}>
                                  {index+1}
                              </span>
                          )
                          } )
                      }
                      <span className="bg-gray-50 rounded-lg p-2 hover:cursor-pointer" 
                          onClick={()=>selectPageHandler(page+1)}  >Next</span>
                      </>
                  )
              }
              </div>
          </div>
        </div>
      </>
    )
}

export default DisplayCars