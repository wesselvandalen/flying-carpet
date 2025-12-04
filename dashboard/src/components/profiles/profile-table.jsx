import { handleLongNames } from "../../service/utils";
import { useState } from "react";
import UpdateModalProfile from "./update-modal-profile";

export default function ProfileTable({ profiles, vacancyList,
    eventList,
    internNetworkList,
    employmentConditionList,
    customerCaseList, 
employeeStoryList }) {
    const columnNames = ["Id", "Name", "Location", "Date", "Vacancies", "Events", "Intern networks", "Employment conditions", "Customer cases", "Employee stories"];
    const [profile, setProfile] = useState();
    const [showModal, setShowModal] = useState(false);

    const openUpdateModal = (item) => {
        const profileObject = {
            "id": item.id, "name": item.name, "location": item.location, "date": item.date, "vacancies": item.vacancies, "events": item.events,
            "internNetworks": item.internNetworks, "employmentConditions": item.employmentConditions, "customerCases": item.customerCases,
            "employeeStories": item.employeeStories
        };
        setProfile(profileObject); 
        setShowModal(true);
    }

    if (profiles.length === 0) {
        return <p className="w-full text-center mt-5">There are no profiles found.</p>
    }

    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        {columnNames.map((columnName, index) => {
                            return <th scope="col" className="px-6 py-3" key={index}>{columnName}</th>
                        })}
                        <th scope="col" className="px-6 py-3">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {profiles.map((item, index) => {
                        const date = new Date(item.date);
                        return <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200" key={index}>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                {item.id}
                            </th>
                            <td className="px-6 py-4">
                                {handleLongNames(item.name)}
                            </td>
                            <td className="px-6 py-4">
                                {handleLongNames(item.location)}
                            </td>
                            <td className="px-6 py-4">
                                {date.toLocaleString()}
                            </td>
                            <td className="px-6 py-4">
                                {item.vacancies.length}
                            </td>
                            <td className="px-6 py-4">
                                {item.events.length}
                            </td>
                            <td className="px-6 py-4">
                                {item.internNetworks.length}
                            </td>
                            <td className="px-6 py-4">
                                {item.employmentConditions.length}
                            </td>
                            <td className="px-6 py-4">
                                {item.customerCases.length}
                            </td>
                            <td className="px-6 py-4">
                                {item.employeeStories.length}
                            </td>
                            <td className="px-6 py-4">
                                <div onClick={() => openUpdateModal(item)} className="font-medium text-blue-600 cursor-pointer">Edit</div>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
            {showModal && <UpdateModalProfile profile={profile} handleShowModal={() => setShowModal(!showModal)} showModal={showModal} vacancyList={vacancyList}
                eventList={eventList} internNetworkList={internNetworkList} employmentConditionList={employmentConditionList} customerCaseList={customerCaseList} employeeStoryList={employeeStoryList} />}
        </div>
    )
}