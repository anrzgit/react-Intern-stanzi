
import Search from "../utils/Search";


const Navbar = () => {

  return (
    <>
    <div>
      <nav className={`h-[90px] px-40 w-full flex items-center  bg-gray-900` }>
      <div className="relative bottom-5 ">
          <Search/>
      </div> 
    </nav>
    </div> 
    </>
  )
}

export default Navbar