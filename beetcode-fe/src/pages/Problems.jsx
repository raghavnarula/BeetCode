import Navbar from '../components/Navbar'
// import GridExample from '../components/GridExample'
import ProblemTable from '../components/ProblemTable'


const Problems = () => {
    return(
      <>
        <Navbar/>
        <div className="grid grid-cols-4 gap-4">

          <div className="col-span-3 grid grid-cols-3 gap-10">
            <button>Raghav</button>
            <button>Raghav</button>
            <button>Raghav</button>
            <button>Raghav</button>
            <button>Raghav</button>
            <button>Raghav</button>
            <div className='col-span-3'>
              <ProblemTable/>
            </div>
          </div>
        </div>
      </>
    )
};

export default Problems
