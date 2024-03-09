import {LinuxOutlined} from '@ant-design/icons'
import {BellOutlined } from '@ant-design/icons'
import {FireOutlined} from '@ant-design/icons'
import {FileImageOutlined} from '@ant-design/icons'
const Navbar = (props) => {
  return (
    <div className="">
      <div className="pt-4 pb-1 md:visible invisible">
        <div className="grid grid-cols-6 gap-4">
          <div className='col-span-4 flex flex-wrap  font-sans text-white'>
            <div className='ml-[10%] md:ml-[20%]'></div>
            <div><LinuxOutlined style={{ fontSize: '32px', color: '#eb6134' }} /></div>
            {props.mark == "problem" ?
              (<a href="/problems" className='px-5 ml-2 py-[2px] text-center bg-yellow-600 rounded-xl'>Problems</a>):
              (<a href="/problems" className='px-5 ml-2 text-center'>Problems</a>)
            }

            {props.mark == "daily" ?
              (<a href="/daily-challenge" className='px-5 ml-2 py-[2px] text-center bg-yellow-600 rounded-xl'>Daily Challenge</a>):
              (<a href="/daily-challenge" className='px-5 ml-2 text-center'>Daily Challenge</a>)
            }

            {props.mark == "random" ?
              (<a href="/random" className='px-5 ml-2 py-[2px] text-center bg-yellow-600 rounded-xl'>Random</a>):
              (<a href="/random" className='px-5 ml-2 text-center'>Random</a>)
            }

          </div>

          <div className="col-span-2">
            <div className='grid grid-cols-6 gap-1'>
              <div>
                <BellOutlined className="px-4" style={{ fontSize: '20px', color: 'white' }}/>
              </div>
              
              <div className="flex items-center">
                <FireOutlined className="" style={{ fontSize: '20px', color: 'orange' }}/>
                <span className="text-white">10</span>
              </div>
              <div>
                <FileImageOutlined className="px-4" style={{ fontSize: '20px', color: 'white' }}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar