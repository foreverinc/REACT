import Planheader from "../Components/Planheader"
import Plans from "../Components/Plans"


function Plan() {
  return (
      <div>
          <div className="bg-gray-400 container mx-auto my-5 rounded-md p-5">
              <Planheader />
              <Plans name='Drake'/>
          </div>
    </div>
  )
}

export default Plan