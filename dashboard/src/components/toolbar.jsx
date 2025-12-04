import logo from "../assets/logo.png";

export default function Toolbar({ showCreateMenu, handleShowCreateMenu, setShowFilterMenu, handleFilterChange, handleSearchtermChange, chosenFilter, showFilterMenu }) {
    return (
        <div className="bg-white overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">

                <div className="flex flex-row w-full gap-x-3">
                    <button onClick={() => handleShowCreateMenu()} id="filterDropdownButton" data-dropdown-toggle="filterDropdown" className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-primary-700 focus:ring-gray-200" type="button">
                        <svg className="w-4 h-4 mr-1" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Create new
                        <svg className="-mr-1 ml-1.5 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd" fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                    </button>

                    <div id="filterDropdown" className={`z-50 absolute ${!showCreateMenu && "hidden"} top-13.5 left-4 bg-white rounded-lg shadow`}>
                        <ul className="text-sm" aria-labelledby="filterDropdownButton">
                            <li onClick={() => handleShowCreateMenu("profile")} className="flex items-center hover:bg-gray-100 rounded-sm px-3 py-2 cursor-pointer text-sm font-medium text-gray-900">
                                Profile
                            </li>
                            <li onClick={() => handleShowCreateMenu("intern network")} className="flex items-center hover:bg-gray-100 rounded-sm px-3 py-2 cursor-pointer text-sm font-medium text-gray-900">
                                Intern network
                            </li>
                            <li onClick={() => handleShowCreateMenu("customer case")} className="flex items-center hover:bg-gray-100 rounded-sm px-3 py-2 cursor-pointer text-sm font-medium text-gray-900">
                                Customer case
                            </li>
                            <li onClick={() => handleShowCreateMenu("vacancy")} className="flex items-center hover:bg-gray-100 rounded-sm px-3 py-2 cursor-pointer text-sm font-medium text-gray-900">
                                Vacancy
                            </li>
                            <li onClick={() => handleShowCreateMenu("employment condition")} className="flex items-center hover:bg-gray-100 rounded-sm px-3 py-2 cursor-pointer text-sm font-medium text-gray-900">
                                Employment condition
                            </li>
                            <li onClick={() => handleShowCreateMenu("event")} className="flex items-center hover:bg-gray-100 rounded-sm px-3 py-2 cursor-pointer text-sm font-medium text-gray-900">
                                Event
                            </li>
                             <li onClick={() => handleShowCreateMenu("employee story")} className="flex items-center hover:bg-gray-100 rounded-sm px-3 py-2 cursor-pointer text-sm font-medium text-gray-900">
                                Employee story
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="w-full">
                    <img src={logo} alt="" className="w-30 " />
                </div>

                <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                    <button onClick={() => setShowFilterMenu(!showFilterMenu)} id="filterDropdownButton" data-dropdown-toggle="filterDropdown" className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-primary-700 focus:ring-gray-200" type="button">
                        <svg className="w-4 h-4 mr-2" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 4.6C2 4.03995 2 3.75992 2.10899 3.54601C2.20487 3.35785 2.35785 3.20487 2.54601 3.10899C2.75992 3 3.03995 3 3.6 3H20.4C20.9601 3 21.2401 3 21.454 3.10899C21.6422 3.20487 21.7951 3.35785 21.891 3.54601C22 3.75992 22 4.03995 22 4.6V5.26939C22 5.53819 22 5.67259 21.9672 5.79756C21.938 5.90831 21.8901 6.01323 21.8255 6.10776C21.7526 6.21443 21.651 6.30245 21.4479 6.4785L15.0521 12.0215C14.849 12.1975 14.7474 12.2856 14.6745 12.3922C14.6099 12.4868 14.562 12.5917 14.5328 12.7024C14.5 12.8274 14.5 12.9618 14.5 13.2306V18.4584C14.5 18.6539 14.5 18.7517 14.4685 18.8363C14.4406 18.911 14.3953 18.9779 14.3363 19.0315C14.2695 19.0922 14.1787 19.1285 13.9971 19.2012L10.5971 20.5612C10.2296 20.7082 10.0458 20.7817 9.89827 20.751C9.76927 20.7242 9.65605 20.6476 9.58325 20.5377C9.5 20.4122 9.5 20.2142 9.5 19.8184V13.2306C9.5 12.9618 9.5 12.8274 9.46715 12.7024C9.43805 12.5917 9.39014 12.4868 9.32551 12.3922C9.25258 12.2856 9.15102 12.1975 8.94789 12.0215L2.55211 6.4785C2.34898 6.30245 2.24742 6.21443 2.17449 6.10776C2.10986 6.01323 2.06195 5.90831 2.03285 5.79756C2 5.67259 2 5.53819 2 5.26939V4.6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {chosenFilter}
                        <svg className="-mr-1 ml-1.5 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd" fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                    </button>

                    <div id="filterDropdown" className={`z-50 absolute ${!showFilterMenu && "hidden"} top-13.5 right-7 bg-white rounded-lg shadow`}>
                        <ul className="text-sm" aria-labelledby="filterDropdownButton">
                            <li onClick={() => handleFilterChange("Profiles")} className="flex items-center hover:bg-gray-100 rounded-sm px-3 py-2 cursor-pointer text-sm font-medium text-gray-900">
                                Profiles
                            </li>
                            <li onClick={() => handleFilterChange("Intern networks")} className="flex items-center hover:bg-gray-100 rounded-sm px-3 py-2 cursor-pointer text-sm font-medium text-gray-900">
                                Intern networks
                            </li>
                            <li onClick={() => handleFilterChange("Customer cases")} className="flex items-center hover:bg-gray-100 rounded-sm px-3 py-2 cursor-pointer text-sm font-medium text-gray-900">
                                Customer cases
                            </li>
                            <li onClick={() => handleFilterChange("Vacancies")} className="flex items-center hover:bg-gray-100 rounded-sm px-3 py-2 cursor-pointer text-sm font-medium text-gray-900">
                                Vacancies
                            </li>
                            <li onClick={() => handleFilterChange("Employment conditions")} className="flex items-center hover:bg-gray-100 rounded-sm px-3 py-2 cursor-pointer text-sm font-medium text-gray-900">
                                Employment conditions
                            </li>
                            <li onClick={() => handleFilterChange("Events")} className="flex items-center hover:bg-gray-100 rounded-sm px-3 py-2 cursor-pointer text-sm font-medium text-gray-900">
                                Events
                            </li>
                            <li onClick={() => handleFilterChange("Employee stories")} className="flex items-center hover:bg-gray-100 rounded-sm px-3 py-2 cursor-pointer text-sm font-medium text-gray-900">
                                Employee stories
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}