import { useState } from "react";
import MultiSelectDropdown from "../multi-select-dropdown";
import { createProfile } from "../../service/profile-service";

export default function CreateModalProfile({ showProfileCreateModal, handleCreateModalPopUp, triggerShowAlert, vacancyList, eventList, internNetworkList, employmentConditionList, customerCaseList }) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState(new Date());
  const [vacancies, setVacancies] = useState([]);
  const [events, setEvents] = useState([]);
  const [internNetworks, setInternNetworks] = useState([]);
  const [employmentConditions, setEmploymentConditions] = useState([]);
  const [customerCases, setCustomerCases] = useState([]);

  // Dropdown open/close states
  const [isVacancyBoxOpen, setIsVacancyBoxOpen] = useState(false);
  const [isEventBoxOpen, setIsEventBoxOpen] = useState(false);
  const [isInternBoxOpen, setIsInternBoxOpen] = useState(false);
  const [isEmploymentBoxOpen, setIsEmploymentBoxOpen] = useState(false);
  const [isCustomerBoxOpen, setIsCustomerBoxOpen] = useState(false);

  const handleAddNewProfile = async (e) => {
    e.preventDefault();

    const object = {
      name,
      location,
      date,
      vacancies,
      events,
      internNetworks,
      employmentConditions,
      customerCases,
    };

    if (name.trim() === "") {
      triggerShowAlert(`You must at least fill in the name.`);
      return;
    }

    await createProfile(object);
    window.location.reload();
  };

  // Generic toggle helper
  const toggleSelection = (prevArray, item) =>
    prevArray.includes(item)
      ? prevArray.filter((i) => i !== item)
      : [...prevArray, item];

  return (
    <div
      id="defaultModal"
      tabIndex="-1"
      className={`${!showProfileCreateModal && "hidden"
        } fixed inset-0 z-49 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-[#00000060]`}
    >
      <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
        <div className="relative p-4 bg-white rounded-lg shadow sm:p-5">
          {/* Header */}
          <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5">
            <h3 className="text-lg font-semibold text-gray-900">
              Create new profile
            </h3>
            <button
              onClick={handleCreateModalPopUp}
              type="button"
              className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg cursor-pointer text-sm p-1.5 ml-auto inline-flex items-center"
            >
              ✕
            </button>
          </div>

          <form>
            {/* Name / Location / Date */}
            <div className="grid gap-4 mb-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Name
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                             focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Type profile name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="location"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Location
                </label>
                <input
                  onChange={(e) => setLocation(e.target.value)}
                  type="text"
                  name="location"
                  id="location"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                             focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Type location name"
                />
              </div>
              <div>
                <label
                  htmlFor="date"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Date
                </label>
                <input
                  onChange={(e) => setDate(e.target.value)}
                  type="date"
                  name="date"
                  id="date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                             focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                />
              </div>
            </div>

            {/* === Multi-select dropdowns === */}

            {/* Vacancies */}
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

            {/* Submit */}
            <button
              onClick={handleAddNewProfile}
              type="submit"
              className="mt-4 text-white inline-flex items-center bg-[#1c64f2] cursor-pointer 
                         hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 
                         font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              + Add new profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}