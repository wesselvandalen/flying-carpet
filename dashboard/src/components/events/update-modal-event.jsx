import { useState } from "react";   
import { handleLongNames } from "../../service/utils";
import { deleteEventById, updateEvent } from "../../service/events-service";

export default function UpdateModalEvent({ event, handleShowModal, showModal, handleAlertShow }) {
    const [title, setTitle] = useState(event.title);
    const [description, setDescription] = useState(event.description);
    const [date, setDate] = useState(event.date);
    const [location, setLocation] = useState(event.location);
    const [image, setImage] = useState(event.image);

    const handleUpdate = async (e) => {
        e.preventDefault();
        const object = { "id": event.id, title, description, date, location, image };

        if (title === undefined || title.trim() === "") {
            object.title = event.title;
        }
        if (description === undefined) {
            object.description = event.description;
        }
        if (date === undefined) {
            object.date = event.date;
        }
        if (location === undefined) {
            object.location = event.location;
        }
        if (image === undefined) {
            object.image = event.image;
        }

        await updateEvent(object);
        handleShowModal(false);
        window.location.reload();
    }

    const handleDelete = async (e) => {
        e.preventDefault();
        await deleteEventById(event.id);
        window.location.reload();
    }

    return (
        <div id="defaultModal" tabIndex="-1" className={`${!showModal && "hidden"} fixed inset-0 z-49 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-[#00000060]`}>
            <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
                <div className="relative p-4 bg-white rounded-lg shadow sm:p-5">
                    <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5">
                        <h3 className="text-lg font-semibold text-gray-900">
                            Update {handleLongNames(event.title)}
                        </h3>
                        <button onClick={handleShowModal} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg cursor-pointer text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="defaultModal">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <form action="#">
                        <div className="grid gap-4 mb-4 sm:grid-cols-2">
                            <div>
                                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">Title</label>
                                <input onChange={(e) => setTitle(e.target.value)} type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder={event.title} required="" />
                            </div>
                            <div>
                                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                                <input onChange={(e) => setDescription(e.target.value)} type="text" name="description" id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder={event.description} required="" />
                            </div>
                            <div>
                                <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900">Date</label>
                                <input onChange={(e) => setDate(e.target.value)} type="date" name="date" id="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder={event.date} required="" />
                            </div>
                            <div>
                                <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900">Location</label>
                                <input onChange={(e) => setLocation(e.target.value)} type="text" name="location" id="location" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder={event.location} required="" />
                            </div>
                            <div>
                                <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900">Image</label>
                                <input onChange={(e) => setImage(e.target.value)} type="text" name="image" id="image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder={event.image} required="" />
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                className="text-white inline-flex items-center bg-[#1c64f2] cursor-pointer hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                onClick={handleUpdate}
                            >
                                <svg className="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path>
                                </svg>
                                Update {handleLongNames(event.title)}
                            </button>

                            <button
                                className="text-white inline-flex items-center bg-[#d30035] cursor-pointer hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                onClick={handleDelete}
                            >
                                <svg className="mr-1 -ml-1 w-6 h-6 rotate-45" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path>
                                </svg>
                                Remove {handleLongNames(event.title)}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}