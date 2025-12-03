import { useState } from "react"
import { createCustomerCase } from "../../service/customer-cases-service";
import { companyNames, sectors } from "../../config/config";

export default function CreateModalCustomerCases({ showCustomerCaseCreateModal, handleShowCustomerCaseCreateModal, triggerShowAlert }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [sector, setSector] = useState("");
    const [clientName, setClientName] = useState("");

    const handleAddCustomerCase = async (e) => {
        e.preventDefault();
        if (title.trim() === "") {
            triggerShowAlert("You must at least fill in the title.");
            return;
        }

        const object = { title, description, image, sector, clientName };
        await createCustomerCase(object);
        window.location.reload();
    }

    return (
        <div id="defaultModal" tabIndex="-1" className={`${!showCustomerCaseCreateModal && "hidden"} fixed inset-0 z-49 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-[#00000060]`}>
            <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
                <div className="relative p-4 bg-white rounded-lg shadow sm:p-5">
                    <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5">
                        <h3 className="text-lg font-semibold text-gray-900">
                            Create new customer case
                        </h3>
                        <button onClick={handleShowCustomerCaseCreateModal} type="button" className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg cursor-pointer text-sm p-1.5 ml-auto inline-flex items-center"
                        >
                            ✕
                        </button>
                    </div>
                    <form action="#">
                        <div className="grid gap-4 mb-4 sm:grid-cols-2">
                            <div>
                                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">Title</label>
                                <input onChange={(e) => setTitle(e.target.value)} type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Type title" required="" />
                            </div>
                            <div>
                                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                                <input onChange={(e) => setDescription(e.target.value)} type="text" name="description" id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Type description" required="" />
                            </div>
                            <div>
                                <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900">Image</label>
                                <input onChange={(e) => setImage(e.target.value)} type="text" name="image" id="image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Type image url" required="" />
                            </div>
                            <div>
                                <label htmlFor="sector" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                                <select
                                    id="sector"
                                    name="sector"
                                    onChange={(e) => setSector(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                           focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    required
                                >
                                    <option value="">Select a sector</option>
                                    {sectors.map((n, index) => (
                                        <option key={index} value={n}>{n}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="clientname" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                                <select
                                    id="clientname"
                                    name="clientname"
                                    onChange={(e) => setClientName(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                           focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    required
                                >
                                    <option value="">Select a clientname</option>
                                    {companyNames.map((n, index) => (
                                        <option key={index} value={n}>{n}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <button onClick={handleAddCustomerCase} type="submit" className="text-white inline-flex items-center bg-[#1c64f2] cursor-pointer hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            <svg className="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                            Add new customer case
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}