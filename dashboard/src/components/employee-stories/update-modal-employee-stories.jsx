import { useState } from "react";
import { handleLongNames } from "../../service/utils";
import { deleteCustomerCaseById, updateCustomerCase } from "../../service/customer-cases-service";
import { companyNames, sectors, vacancieTitles } from "../../config/config";
import { deleteEmployeeStoriesById, updateEmployeeStory } from "../../service/employee-stories-service";

export default function UpdateModalEmployeeStories({ employeeStory: employeeStory, handleShowModal, showModal, handleAlertShow }) {
    const [quote, setQuote] = useState(employeeStory.quote);
    const [employeeName, setEmployeeName] = useState(employeeStory.employeeName);
    const [jobTitle, setJobTitle] = useState(employeeStory.jobTitle);
    const [description, setDescription] = useState(employeeStory.description);
    const [image, setImage] = useState(employeeStory.image);
    const [publishDate, setPublishDate] = useState(employeeStory.publishDate);

    const handleUpdate = async (e) => {
        e.preventDefault();
        const object = { "id": employeeStory.id, quote, employeeName, jobTitle, description, image, publishDate };

        if (quote === undefined || quote.trim() === "") {
            object.title = employeeStory.title;
        }
        if (employeeName === undefined) {
            object.employeeName = employeeStory.employeeName;
        }
        if (jobTitle === undefined) {
            object.jobTitle = employeeStory.jobTitle;
        }
        if (description === undefined) {
            object.description = employeeStory.description;
        }
        if (image === undefined) {
            object.image = employeeStory.image;
        }
        if (publishDate === undefined) {
            object.publishDate = employeeStory.publishDate;
        }

        await updateEmployeeStory(object);
        handleShowModal(false);
        window.location.reload();
    }

    const handleDelete = async (e) => {
        e.preventDefault();
        await deleteEmployeeStoriesById(employeeStory.id);
        window.location.reload();
    }

    return (
        <div id="defaultModal" tabIndex="-1" className={`${!showModal && "hidden"} fixed inset-0 z-49 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-[#00000060]`}>
            <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
                <div className="relative p-4 bg-white rounded-lg shadow sm:p-5">
                    <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5">
                        <h3 className="text-lg font-semibold text-gray-900">
                            Update {handleLongNames(employeeStory.title)}
                        </h3>
                        <button onClick={handleShowModal} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg cursor-pointer text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="defaultModal">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <form action="#">
                        <div className="grid gap-4 mb-4 sm:grid-cols-2">
                            <div>
                                <label htmlFor="quote" className="block mb-2 text-sm font-medium text-gray-900">Quote</label>
                                <input onChange={(e) => setQuote(e.target.value)} type="text" name="quote" id="quote" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder={employeeStory.quote} required="" />
                            </div>
                            <div>
                                <label htmlFor="employeename" className="block mb-2 text-sm font-medium text-gray-900">Employee name</label>
                                <input onChange={(e) => employeeName(e.target.value)} type="text" name="employeename" id="employeename" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder={employeeStory.employeeName} required="" />
                            </div>
                            <div>
                                <label htmlFor="jobtitle" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                                <select
                                    id="jobtitle"
                                    name="jobtitle"
                                    onChange={(e) => setJobTitle(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                                                      focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    required
                                >
                                    <option value="">Select a job title</option>
                                    {vacancieTitles.map((n, index) => (
                                        <option key={index} value={n}>{n}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                                <input onChange={(e) => setDescription(e.target.value)} type="text" name="description" id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder={employeeStory.description} required="" />
                            </div>
                            <div>
                                <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900">Image</label>
                                <input onChange={(e) => setImage(e.target.value)} type="text" name="image" id="image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder={employeeStory.image} required="" />
                            </div>
                            <div>
                                <label htmlFor="publishdate" className="block mb-2 text-sm font-medium text-gray-900">Publish date</label>
                                <input onChange={(e) => setPublishDate(e.target.value)} type="date" name="publishdate" id="publishdate" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder={employeeStory.publishDate} required="" />
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
                                Update {handleLongNames(employeeStory.quote)}
                            </button>

                            <button
                                className="text-white inline-flex items-center bg-[#d30035] cursor-pointer hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                onClick={handleDelete}
                            >
                                <svg className="mr-1 -ml-1 w-6 h-6 rotate-45" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path>
                                </svg>
                                Remove {handleLongNames(employeeStory.quote)}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}