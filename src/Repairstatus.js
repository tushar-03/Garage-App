import React from 'react'
import { time } from './Home'

function Repairstatus(props) {
    return (
        <div className=''>
            <h1 className='mt-10 text-6xl font-serif italic underline decoration-wavy hover:scale-110 '> Repair Status of Car </h1>
            <div class="overflow-x-auto relative mt-20 outline-double ">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400  ">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="py-3 px-6 font-serif italic">
                                Sno.
                            </th>
                            <th scope="col" class="py-3 px-6 font-serif italic">
                                Driver
                            </th>
                            <th scope="col" class="py-3 px-6 font-serif italic">
                                Car Number Plate
                            </th>
                            <th scope="col" class="py-3 px-6 font-serif italic">
                                CheckINTime
                            </th>
                            <th scope="col" class="py-3 px-6 font-serif italic">
                                CheckoutTime
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="py-4 px-6 whitespace-nowrap dark:text-white font-serif italic">
                                1
                            </th>
                            <td class="py-4 px-6 font-serif italic">
                                {props.drivername}
                            </td>
                            <td class="py-4 px-6 font-serif italic ">
                                {props.numberplate}
                            </td>
                            <td class="py-4 px-6 font-serif italic ">
                                {time}
                            </td>
                            <td class="py-4 px-6 font-serif italic">
                                Still in garage
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Repairstatus
