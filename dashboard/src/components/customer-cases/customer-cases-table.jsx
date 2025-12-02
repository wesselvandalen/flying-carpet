import { handleLongNames } from "../../service/utils";
import UpdateModalCustomerCases from "./update-modal-customer-cases";
import { useState } from "react";

export default function CustomerCasesTable({ items }) {
    const columnNames = ["Id", "Title", "Description", "Image", "Sector", "Clientname"];
    const [showModal, setShowModal] = useState(false);
    const [customerCase, setCustomerCase] = useState({});

    const openUpdateModal = (item) => {
        const object = { "id": item.id, "title": item.title, "description": item.description, "image": item.image, "sector": item.sector, "clientName": item.clientName };
        setCustomerCase(object);
        setShowModal(true);
    }

    if (items.length === 0) {
        return <p className="w-full text-center mt-5">There are no customer cases found.</p>
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
                        return <tr className="odd:bg-white even:bg-gray-50 border-gray-200" key={index}>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                {item.id}
                            </th>
                            <td className="px-6 py-4">
                                {handleLongNames(item.title)}
                            </td>
                            <td className="px-6 py-4">
                                {handleLongNames(item.description)}
                            </td>
                            <td className="px-6 py-4">
                                {item.image}
                            </td>
                            <td className="px-6 py-4">
                                {item.sector}
                            </td>
                            <td className="px-6 py-4">
                                {handleLongNames(item.clientName)}
                            </td>
                            <td className="px-6 py-4">
                                <div onClick={() => openUpdateModal(item)} className="font-medium text-blue-600 cursor-pointer">Edit</div>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
            {showModal && <UpdateModalCustomerCases customerCase={customerCase} handleShowModal={() => setShowModal(!showModal)} showModal={showModal} />}
        </div>
    );
}