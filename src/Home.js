import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

var time;

function Home(props) {




    function changename(e) {
        props.setdrivername(e.target.value);
    }
    function changenumber(e) {
        props.setnumberplate(e.target.value);
    }

    function handlesubmit(e) {
        e.preventDefault();
    }

    function handleclick(e) {
        var currenttime = new Date();
        time = currenttime.getDate() + "/" + currenttime.getMonth() + "/" + currenttime.getHours() + ":" + currenttime.getMinutes();

    }



    return (
        <div className=''>
            <div className='w-2/6 flex'>
                <img className='outline-double hover:scale-110' src='https://www.pngitem.com/pimgs/m/263-2636399_logo-car-garage-logo-png-transparent-png.png' /> <div className='ml-96 mt-20 italic  flex font-serif h-20 w-56 pt-6 pl-10 pb-10 text-6xl text-black  underline' >
                    Welcome! {props.drivername.slice(0, 9) + "."}
                </div>
            </div>
            <div className='bgimg flex:wrap flex justify-start'>
                <div className=' backdrop-blur-xl  ml-20 mt-40 h-72  w-2/6  hover:scale-110 ' >
                    <div className='text-white italic text-3xl mt-5 font-serif '> * Add Your Vehicle * </div>
                    <form class=" ml-5  h-50 max-w-sm " onSubmit={handlesubmit}>
                        <div class="md:flex md:items-center mb-6 ">
                            <div class="md:w-1/3 mt-10">
                                <label class=" text-white italic  font-serif inline " for="number-plate">
                                    Vehicle Number
                                </label>
                            </div>
                            <div class="md:w-2/3 mt-10">
                                <input class="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="number-plate" type="text" placeholder='Enter Number plate' onChange={changenumber} />
                            </div>
                        </div>
                        <div class="md:flex md:items-center mb-6">
                            <div class="md:w-1/3">
                                <label class="block text-white italic  font-serif md:text-right mb-1 md:mb-0 pr-4" for="inline-password" >
                                    Driver Name
                                </label>
                            </div>
                            <div class="md:w-2/3">
                                <input class="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="text" placeholder=" Enter Your Name" onChange={changename} />
                            </div>
                        </div>
                        <div class="md:flex md:items-center mb-6">
                            <div class="md:w-1/3"></div>

                        </div>
                        <div class="md:flex md:items-center">
                            <div class="md:w-1/3"></div>
                            <div class="md:w-2/3 mb-5" >
                                <Link to='/Repairstatus'>
                                    <button class="shadow bg-black hover:bg-green-400 focus:shadow-outline focus:outline-none text-white hover:text-black font-bold py-2 px-4 rounded" type="submit" onClick={handleclick} >
                                        Go!
                                    </button></Link>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>

    )
}

export default Home
export { time }
