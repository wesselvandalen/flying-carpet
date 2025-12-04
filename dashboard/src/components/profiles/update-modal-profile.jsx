import { useState } from "react"
import { handleLongNames, isEmpty } from "../../service/utils";
import MultiSelectDropdown from "../multi-select-dropdown";
import { deleteProfileById, updateProfile } from "../../service/profile-service";

export default function UpdateModalProfile({ profile, handleShowModal, showModal, vacancyList,
    eventList,
    internNetworkList,
    employmentConditionList,
    customerCaseList,
employeeStoryList }) {
    const [name, setName] = useState(profile.name);
    const [location, setLocation] = useState(profile.location);
    const [date, setDate] = useState(profile.date);
    const [vacancies, setVacancies] = useState(profile.vacancies);
    const [events, setEvents] = useState(profile.events);
    const [internNetworks, setInternNetworks] = useState(profile.internNetworks);
    const [employmentConditions, setEmploymentConditions] = useState(profile.employmentConditions);
    const [customerCases, setCustomerCases] = useState(profile.customerCases);
    const [employeeStories, setEmployeeStories] = useState(profile.employeeStories);

    // Dropdown open/close states
    const [isVacancyBoxOpen, setIsVacancyBoxOpen] = useState(false);
    const [isEventBoxOpen, setIsEventBoxOpen] = useState(false);
    const [isInternBoxOpen, setIsInternBoxOpen] = useState(false);
    const [isEmploymentBoxOpen, setIsEmploymentBoxOpen] = useState(false);
    const [isCustomerBoxOpen, setIsCustomerBoxOpen] = useState(false);
    const [isEmployeeStoryBoxOpen, setIsEmployeeStoryBoxOpen] = useState(false);

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        const object = { "id": profile.id, name, location, date, vacancies, events, internNetworks, employmentConditions, customerCases, employeeStories };

        if (name === undefined || name.trim() === "") {
            object.name = profile.name;
        }
        if (location === undefined) {
            object.location = profile.location;
        }
        if (date === undefined) {
            object.date = profile.date;
        }

        await updateProfile(object);
        handleShowModal(false);
        window.location.reload();
    }

    const handleDelete = async (e) => {
        e.preventDefault();
        await deleteProfileById(profile.id);
        window.location.reload();
    }

    // Generic toggle helper
    const toggleSelection = (prevArray, item) => {
        const exists = prevArray.some(i => i.id === item.id);

        if (exists) {
            return prevArray.filter(i => i.id !== item.id);
        } else {
            return [...prevArray, item];
        }
    };

    if (isEmpty(profile)) {
        return <></>
    }

    return (
        <div
            id="createProfileModal"
            tabIndex="-1"
            className={`${!showModal && "hidden"} fixed inset-0 z-49 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-[#00000060]`}
        >
            <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
                <div className="relative p-4 bg-white rounded-lg shadow sm:p-5">

                    <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5">
                        <h3 className="text-lg font-semibold text-gray-900">
                            Update {handleLongNames(profile.name)}
                        </h3>
                        <button
                            onClick={handleShowModal}
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg cursor-pointer text-sm p-1.5 ml-auto inline-flex items-center"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>

                    <form onSubmit={handleUpdateProfile}>
                        <div className="grid gap-4 mb-4 sm:grid-cols-2">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                                <input
                                    onChange={(e) => setName(e.target.value)}
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    placeholder={profile.name}
                                />
                            </div>
                            <div>
                                <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900">Location</label>
                                <input
                                    onChange={(e) => setLocation(e.target.value)}
                                    type="text"
                                    name="location"
                                    id="location"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    placeholder={profile.location}
                                />
                            </div>
                            <div>
                                <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900">Date</label>
                                <input
                                    onChange={(e) => setDate(e.target.value)}
                                    type="date"
                                    name="date"
                                    id="date"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    placeholder={profile.date}
                                />
                            </div>
                        </div>

                        <MultiSelectDropdown
                            label="Vacancies"
                            items={vacancyList}
                            selected={vacancies}
                            setSelected={setVacancies}
                            isOpen={isVacancyBoxOpen}
                            setIsOpen={setIsVacancyBoxOpen}
                            toggleSelection={toggleSelection}
                        />

                        {/* Events */}
                        <MultiSelectDropdown
                            label="Events"
                            items={eventList}
                            selected={events}
                            setSelected={setEvents}
                            isOpen={isEventBoxOpen}
                            setIsOpen={setIsEventBoxOpen}
                            toggleSelection={toggleSelection}
                        />

                        {/* Intern Networks */}
                        <MultiSelectDropdown
                            label="Intern Networks"
                            items={internNetworkList}
                            selected={internNetworks}
                            setSelected={setInternNetworks}
                            isOpen={isInternBoxOpen}
                            setIsOpen={setIsInternBoxOpen}
                            toggleSelection={toggleSelection}
                        />

                        {/* Employment Conditions */}
                        <MultiSelectDropdown
                            label="Employment Conditions"
                            items={employmentConditionList}
                            selected={employmentConditions}
                            setSelected={setEmploymentConditions}
                            isOpen={isEmploymentBoxOpen}
                            setIsOpen={setIsEmploymentBoxOpen}
                            toggleSelection={toggleSelection}
                        />

                        {/* Customer Cases */}
                        <MultiSelectDropdown
                            label="Customer Cases"
                            items={customerCaseList}
                            selected={customerCases}
                            setSelected={setCustomerCases}
                            isOpen={isCustomerBoxOpen}
                            setIsOpen={setIsCustomerBoxOpen}
                            toggleSelection={toggleSelection}
                        />

                         {/* Employee stories */}
                        <MultiSelectDropdown
                            label="Employee stories"
                            items={employeeStoryList}
                            selected={employeeStories}
                            setSelected={setEmployeeStories}
                            isOpen={isEmployeeStoryBoxOpen}
                            setIsOpen={setIsEmployeeStoryBoxOpen}
                            toggleSelection={toggleSelection}
                        />

                        <div className="flex items-center gap-2">
                            <button
                                className="text-white inline-flex items-center bg-[#1c64f2] cursor-pointer hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                <svg className="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path>
                                </svg>
                                Update {handleLongNames(profile.name)}
                            </button>

                            <button
                                className="text-white inline-flex items-center bg-[#d30035] cursor-pointer hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                onClick={handleDelete}
                            >
                                <svg className="mr-1 -ml-1 w-6 h-6 rotate-45" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path>
                                </svg>
                                Remove {handleLongNames(profile.name)}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}