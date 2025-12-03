import { useState } from "react"
import { handleLongNames } from "../../service/utils";
import { deleteVacancyById, updateVacancy } from "../../service/vacancies-service";
import { departments, employmentTypes, vacancieTitles } from "../../config/config";

export default function UpdateModalVacancies({ vacancy, handleShowModal, showModal }) {
    const [title, setTitle] = useState(vacancy.title);
    const [description, setDescription] = useState(vacancy.description);
    const [image, setImage] = useState(vacancy.image);
    const [postedDate, setPostedDate] = useState(vacancy.postedDate);
    const [employmentType, setEmploymentType] = useState(vacancy.employmentType);
    const [department, setDepartment] = useState(vacancy.department);
    const [location, setLocation] = useState(vacancy.location);

    const handleUpdate = async (e) => {
        e.preventDefault();
        const object = { "id": vacancy.id, title, description, image, postedDate, employmentType, department, location };

        if (title === undefined || title.trim() === "") {
            object.title = vacancy.title;
        }
        if (description === undefined) {
            object.description = vacancy.description;
        }
        if (image === undefined) {
            object.image = vacancy.image;
        }
        if (postedDate === undefined) {
            object.postedDate = vacancy.postedDate;
        }
        if (employmentType === undefined) {
            object.employmentType = vacancy.employmentType;
        }
        if (department === undefined) {
            object.department = vacancy.department;
        }
        if (location === undefined) {
            object.location = vacancy.location;
        }

        await updateVacancy(object);
        handleShowModal(false);
        window.location.reload();
    }

    const handleDelete = async (e) => {
        e.preventDefault();
        await deleteVacancyById(vacancy.id);
        window.location.reload();
    }

    return (
        <div id="defaultModal" tabIndex="-1" className={`${!showModal && "hidden"} fixed inset-0 z-49 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-[#00000060]`}>
            <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
                <div className="relative p-4 bg-white rounded-lg shadow sm:p-5">
                    <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5">
                        <h3 className="text-lg font-semibold text-gray-900">
                            Update {handleLongNames(vacancy.title)}
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
                                <select
                                    id="title"
                                    name="title"
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                           focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    required
                                >
                                    <option value="">Select a title</option>
                                    {vacancieTitles.map((n, index) => (
                                        <option key={index} value={n}>{n}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                                <input onChange={(e) => setDescription(e.target.value)} type="text" name="description" id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder={vacancy.description} required="" />
                            </div>
                            <div>
                                <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900">Image</label>
                                <input onChange={(e) => setImage(e.target.value)} type="text" name="image" id="image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder={vacancy.image} required="" />
                            </div>
                            <div>
                                <label htmlFor="posteddate" className="block mb-2 text-sm font-medium text-gray-900">Posted date</label>
                                <input onChange={(e) => setPostedDate(e.target.value)} type="date" name="posteddate" id="posteddate" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder={vacancy.postedDate} required="" />
                            </div>
                            <div>
                                <label htmlFor="employmenttype" className="block mb-2 text-sm font-medium text-gray-900">Employment type</label>
                                <select
                                    id="employmenttype"
                                    name="employmenttype"
                                    onChange={(e) => setEmploymentType(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                                                     focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    required
                                >
                                    <option value="">Select a employment type</option>
                                    {employmentTypes.map((n, index) => (
                                        <option key={index} value={n}>{n}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="department" className="block mb-2 text-sm font-medium text-gray-900">Department</label>
                                <select
                                    id="department"
                                    name="department"
                                    onChange={(e) => setDepartment(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                                                   focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    required
                                >
                                    <option value="">Select a department</option>
                                    {departments.map((n, index) => (
                                        <option key={index} value={n}>{n}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900">Location</label>
                                <input onChange={(e) => setLocation(e.target.value)} type="text" name="location" id="location" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder={vacancy.location} required="" />
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <button onClick={handleUpdate} type="submit" className="text-white inline-flex items-center bg-[#1c64f2] cursor-pointer hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                <svg className="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                                Update {handleLongNames(vacancy.title)}
                            </button>
                            <button
                                className="text-white inline-flex items-center bg-[#d30035] cursor-pointer hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                onClick={handleDelete}
                            >
                                <svg className="mr-1 -ml-1 w-6 h-6 rotate-45" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path>
                                </svg>
                                Delete {handleLongNames(vacancy.title)}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}