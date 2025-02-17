import React from 'react'

const Shimmer = () => {
    const emptyArr=["","","","","",""]
  return (
    <div className='flex flex-col p-2'>
        <div className="grid grid-cols-3 gap-4 m-4 w-[100vw]">
            {emptyArr.map((item, index) => (
                <div key={index} className="relative max-w-[490px] min-w-[490px] border">
                    <div 
                        className={`card mx-10 mt-10 rounded-md p-2 flex cursor-pointer justify-around transition-all duration-500 group`}
                    >
                      
                        <div className="up mr-6 relative rounded-md transition-all duration-300 w-[200px] h-[110px] bg-gray-300">
                        </div>
                     
                        <div className="down">
                            <div className="category text-gray-200 text-sm bg-gray-200">
                                <p>Lorem, ipsum.</p>
                            </div>
                            <div className="description">
                                <p className=' bg-gray-200 text-gray-200'>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className="price bg-gray-400">
                                <p>{item}</p>
                            </div>
                        </div>
                    </div>

                    
                </div>
            ))}
        </div>
        </div>
  )
}

export default Shimmer