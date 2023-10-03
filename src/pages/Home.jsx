import { useNavigate } from "react-router-dom"
import Cars from "./Cars"


const Home = () => {

  const navigate = useNavigate();

  return (
    <body className='bg-gray-500 h-screen' >
      <div className="px-72" >
      <h1 className="font-bold"  >Home Screen</h1>
      <button
      onClick={()=>navigate('/cars/1')} 
      type="submit" >All cars</button>
      </div>
    </body>
  )
}

export default Home