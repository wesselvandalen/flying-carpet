import { useEffect, useState } from "react";
import ProfileTable from "../components/profiles/profile-table";
import EventsTable from "../components/events/events-table";
import EmploymentTable from "../components/employment-conditions/employment-table";
import InternNetworksTable from "../components/intern-networks/intern-networks-table";
import VacanciesTable from "../components/vacancies/vacancies-table";
import CustomerCasesTable    from "../components/customer-cases/customer-cases-table";
import Toolbar from "../components/toolbar";
import CustomAlert from "../components/custom-alert";
import { getProfiles } from "../service/profile-service";
import CreateModalProfile from "../components/profiles/create-modal-profile";
import CreateModalInternNetwork from "../components/intern-networks/create-modal-intern-network";
import CreateModalCustomerCases from "../components/customer-cases/create-modal-customer-cases";
import CreateModalEmploymentCondition from "../components/employment-conditions/create-modal-employment-conditions";
import CreateModalVacancy from "../components/vacancies/create-modal-vacancy";
import CreateModalEvent from "../components/events/create-modal-event";
import { getVacancies } from "../service/vacancies-service";
import { getEmploymentConditions } from "../service/employment-conditions-service";
import { getEvents } from "../service/events-service";
import { getInternNetworks } from "../service/intern-networks-service";
import { getCustomerCases } from "../service/customer-cases-service";

export default function Dashboard() {
    const [profiles, setProfiles] = useState([]);
    const [internNetworks, setInternNetworks] = useState([]);
    const [vacancies, setVacancies] = useState([]);
    const [events, setEvents] = useState([]);
    const [employmentConditions, setEmploymentConditions] = useState([]);
    const [customerCases, setCustomerCases] = useState([]);
    const [showFilterMenu, setShowFilterMenu] = useState(false);
    const [chosenFilter, setChosenFilter] = useState(localStorage.getItem("filter") || "Profiles"); // Set the default view to profiles if nothing exists in the localStorage.
    const [activeAlert, setActiveAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [showCreateMenu, setShowCreateMenu] = useState(false);

    // All the different kind of boolean states for the create modals.
    const [showProfileCreateModal, setShowProfileCreateModal] = useState(false);
    const [showInternNetworkCreateModal, setShowInternNetworkCreateModal] = useState(false);
    const [showCustomerCaseCreateModal, setShowCustomerCasesCreateModal] = useState(false);
    const [showEmploymentConditionCreateModal, setShowEmploymentConditionCreateModal] = useState(false);
    const [showEventCreateModal, setShowEventCreateModal] = useState(false);
    const [showVacancyCreateModal, setShowVacancyCreateModal] = useState(false);

    useEffect(() => {
        fetchInternNetworks();
        fetchVacancies();
        fetchEvents();
        fetchEmploymentConditions();
        fetchCustomerCases();
        fetchProfiles();
    }, []);

    const fetchInternNetworks = async () => setInternNetworks(await getInternNetworks());
    const fetchVacancies = async () => setVacancies(await getVacancies());
    const fetchEvents = async () => setEvents(await getEvents());
    const fetchEmploymentConditions = async () => setEmploymentConditions(await getEmploymentConditions());
    const fetchCustomerCases = async () => setCustomerCases(await getCustomerCases());
    const fetchProfiles = async () => setProfiles(await getProfiles());

    // Handles the filter change, and also saves it to localStorage to remember your choice.
    const handleFilterChange = (filter) => {
        setShowFilterMenu(false);
        localStorage.setItem("filter", filter);
        setChosenFilter(filter);
    }

    const handleShowAlert = (message) => {
        setActiveAlert(true);
        setAlertMessage(message);
        setTimeout(() => {
            setActiveAlert(false);
        }, 5000);
    }

    const handleCreateButton = (element) => {
        switch (element) {
            case "profile": setShowProfileCreateModal(true); break;
            case "intern network": setShowInternNetworkCreateModal(true); break;
            case "customer case": setShowCustomerCasesCreateModal(true); break;
            case "employment condition": setShowEmploymentConditionCreateModal(true); break;
            case "vacancy": setShowVacancyCreateModal(true); break;
            case "event": setShowEventCreateModal(true); break;
        }
        setShowCreateMenu(!showCreateMenu);
    }

    return (
        <section className="w-full rounded-lg">
            {/* Top part for filtering, searching and adding new elements. */}
            <Toolbar setShowFilterMenu={setShowFilterMenu}
                handleFilterChange={handleFilterChange}
                chosenFilter={chosenFilter}
                showFilterMenu={showFilterMenu}
                showCreateMenu={showCreateMenu}
                handleShowCreateMenu={handleCreateButton}
            />

            {/* Create modals. */}
            <CreateModalProfile eventList={events} customerCaseList={customerCases} vacancyList={vacancies} internNetworkList={internNetworks} employmentConditionList={employmentConditions} triggerShowAlert={handleShowAlert} showProfileCreateModal={showProfileCreateModal} handleCreateModalPopUp={() => setShowProfileCreateModal(!showProfileCreateModal)} />
            <CreateModalInternNetwork triggerShowAlert={handleShowAlert} showInternNetworkCreateModal={showInternNetworkCreateModal} handleShowInternNetworkCreateModal={() => setShowInternNetworkCreateModal(!showInternNetworkCreateModal)} />
            <CreateModalCustomerCases triggerShowAlert={handleShowAlert} showCustomerCaseCreateModal={showCustomerCaseCreateModal} handleShowCustomerCaseCreateModal={() => setShowCustomerCasesCreateModal(!showCustomerCaseCreateModal)} />
            <CreateModalEmploymentCondition triggerShowAlert={handleShowAlert} showEmploymentConditionCreateModal={showEmploymentConditionCreateModal} handleShowEmploymentConditionCreateModal={() => setShowEmploymentConditionCreateModal(!showEmploymentConditionCreateModal)} />
            <CreateModalVacancy triggerShowAlert={handleShowAlert} showVacancyCreateModal={showVacancyCreateModal} handleShowVacancyCreateModal={() => setShowVacancyCreateModal(!showVacancyCreateModal)} />
            <CreateModalEvent triggerShowAlert={handleShowAlert} showEventCreateModal={showEventCreateModal} handleShowEventCreateModal={() => setShowEventCreateModal(!showEventCreateModal)} />

            {/* Table view. */}
            {chosenFilter === "Profiles" && <ProfileTable vacancyList={vacancies} eventList={events} employmentConditionList={employmentConditions} internNetworkList={internNetworks} customerCaseList={customerCases} profiles={profiles} />}
            {chosenFilter === "Events" && <EventsTable items={events} />}
            {chosenFilter === "Employment conditions" && <EmploymentTable items={employmentConditions} />}
            {chosenFilter === "Intern networks" && <InternNetworksTable items={internNetworks} />}
            {chosenFilter === "Vacancies" && <VacanciesTable items={vacancies} />}
            {chosenFilter === "Customer cases" && <CustomerCasesTable items={customerCases} />}

            <CustomAlert message={alertMessage} showAlert={activeAlert} />
        </section>
    );
}