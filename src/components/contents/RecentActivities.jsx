import { Circle} from '../../icon/icon'
import React from 'react'
import DropdownmenuOption from '../contents/Dropdownmenu';

function RecentActivities() {
  const Activity =({activity}) => {
    return (
        <div className='items-center gap-2 my-3 grid grid-cols-8'>
          <div className='col-span-2 text-slate-500'>{activity.time}</div>
          <div>{activity.icon}</div>
          <div className='col-span-5'>{activity.desc}</div>
        </div>
    )
  }
  
  return (
    <div className='p-4 bg-white shadow rounded-md'>
        <div className='flex'>
            <h1 className='text-blue-900 font-bold mb-2 text-md'>Recent Activity  | <span className='text-slate-300'>Today</span></h1>
            <div className='ml-auto'><DropdownmenuOption/></div>
        </div>
        <div>
          <Activity 
            activity={{
              time: '32 min',
              icon: <div className='text-green-900'> <Circle/></div>,
              desc: 'Choose a book from your favorite.'
            }}
          />
        </div>
        <div>
          <Activity 
            activity={{
              time: '56 min',
              icon: <div className='text-red-700'> <Circle/></div>,
              desc: 'Start with basic Python programming.'
            }}
            />
        </div>
        <div>
          <Activity 
            activity={{
              time: '2hrs',
              icon: <div className='text-blue-900'> <Circle/></div>,
              desc: 'Plant and maintain a small garden.'
            }}
            />
        </div>
        <div>
          <Activity 
            activity={{
              time: '1 day',
              icon: <div className='text-blue-400'> <Circle/></div>,
              desc: 'Take up photography as a hobby.'
            }}
            />
        </div>
        <div>
          <Activity 
            activity={{
              time: '2 days',
              icon: <div className='text-yellow-500'> <Circle/></div>,
              desc: 'Discount sale.'
            }}
            />
        </div>
        {/* <div>
          <Activity 
            activity={{
              time: '4 weeks',
              icon: <Circle/>,
              desc: "Start a blog on a topic you are passionate about today."
            }}
            />
        </div> */}
    </div>
  )
}

export default RecentActivities