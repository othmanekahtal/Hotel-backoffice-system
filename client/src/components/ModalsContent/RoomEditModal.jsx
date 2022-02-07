import React, { Fragment, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import axios from 'axios';
import useBookRoom from '../../hooks/UseUpdateRoom';
import useFetch from '../../hooks/adminUseFetsh';
const RoomEditModal = ({ isOpen, setIsOpen, roomId }) => {
    const url = 'http://localhost:6969/api/rooms';
    const customerId = 'dfshkjhrkwjerh';
    // reseve room
    // const reserve = (id) => {
    //     axios.put(`${url}/${id}`, { customerID: customerId });
    // };
    const { data } = useFetch(url + '/' + roomId);

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto bg-slate-600 bg-opacity-50" onClose={() => setIsOpen(false)}>
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span className="inline-block h-screen align-middle" aria-hidden="true">
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                    room id {data?._id}
                                </Dialog.Title>
                                <form>
                                    <div class="mb-6">
                                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                            Price
                                        </label>
                                        <input
                                            type="email"
                                             id="email"
                                            value={data?.price}
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                        />
                                    </div>
                                    <div class="mb-6">
                                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                            is Reserved
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            defaultValue={data?.isReserved}
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        />
                                    </div>
                                </form>
                                <div className="mt-4">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        onClick={() => reserve(roomId)}
                                    >
                                        Update Room
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};
export default RoomEditModal;
