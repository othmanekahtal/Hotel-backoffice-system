import React, { useState } from 'react';
import useFetch from '../../hooks/adminUseFetsh';
import RoomEditModal from '../ModalsContent/RoomEditModal';

export const RoomTable = () => {
    const url = 'http://localhost:6969/api/rooms'
    const { data } = useFetch(url)
    const [isOpen , setIsOpen] = useState(false)
    const [roomId , setRoomId] = useState('')

  return (
    <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
    <div className="overflow-hidden shadow-md sm:rounded-lg">
        <table className="min-w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                    <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                        Price
                    </th>
                    <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                        Reservation
                    </th>
                    <th scope="col" className="relative py-3 px-6">
                        <span className="sr-only">Edit</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                {data?.map((el, index) => (
               
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{el.price}</td>
                                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">{el.isReserved ? 'reserved' : 'not reserved'}</td>
                                <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setRoomId(el._id)
                                            setIsOpen(!isOpen)}}
                                        class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                                    >
                                        edit
                                    </button>
                                </td>
                            </tr>
                        ))}

            </tbody>
        </table>
    </div>
  <RoomEditModal isOpen={isOpen} setIsOpen={setIsOpen} roomId={roomId} />
</div>
  );
};
