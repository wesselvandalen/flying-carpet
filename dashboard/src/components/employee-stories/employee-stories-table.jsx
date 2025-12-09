import { handleLongNames } from "../../service/utils";
import UpdateModalEmployeeStories from "./update-modal-employee-stories";
import { useState } from "react";

export default function EmployeeStoryTable({ items }) {
    const columnNames = ["Id", "Quote", "EmployeeName", "JobTitle", "Description", "Image", "publishDate"];
    const [showModal, setShowModal] = useState(false);
    const [employeeStory, setEmployeeStory] = useState({});

    const openUpdateModal = (item) => {
        const object = { "id": item.id, "quote": item.quote, "employeeName": item.employeeName, "jobTitle": item.jobTitle, "description": item.description, "image": item.image, "publishDate": item.publishDate };
        setEmployeeStory(object);
        setShowModal(true);
    }

    if (items.length === 0) {
        return <p className="w-full text-center mt-5">There are no employee stories found.</p>
    }

    return (
        <div className="relative overflow-x-auto sm:rounded-lg w-full">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        {columnNames.map((columnName, index) => {
                            return <th scope="col" className="px-6 py-3" key={index}>{columnName}</th>
                        })}
                        <th scope="col" className="px-6 py-3">Edit</th>
                    </tr>
                </thead>
                <tbody className="w-full">
                    {items.map((item, index) => {
                        const date = new Date(item.publishDate);
                        return <tr className="odd:bg-white even:bg-gray-50 border-gray-200" key={index}>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                {item.id}
                            </th>
                            <td className="px-6 py-4">
                                {handleLongNames(item.quote)}
                            </td>
                            <td className="px-6 py-4">
                                {handleLongNames(item.employeeName)}
                            </td>
                            <td className="px-6 py-4">
                                {handleLongNames(item.jobTitle)}
                            </td>
                            <td className="px-6 py-4">
                                {handleLongNames(item.description)}
                            </td>
                            <td className="px-6 py-4">
                                {handleLongNames(item.image)}
                            </td>
                            <td className="px-6 py-4">
                                {date.toLocaleString()}
                            </td>
                            <td className="px-6 py-4">
                                <div onClick={() => openUpdateModal(item)} className="font-medium text-blue-600 cursor-pointer">Edit</div>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
            {showModal && <UpdateModalEmployeeStories employeeStory={employeeStory} handleShowModal={() => setShowModal(!showModal)} showModal={showModal} />}
        </div>
    );
}