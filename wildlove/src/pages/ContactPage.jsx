import { useState, useEffect } from "react";
import { CONSTANTS } from "../Utils/constant";
import axios from "axios";
import BelowHeader from "../components/Shared/BelowHeader";
import DataLoading from "../components/Shared/DataLoadingIcon";

function ContactPage() {
  const [contact, setContact] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get(`${CONSTANTS.API_URL}/api/v1/contact`);
        console.log(response.data);
        setContact(response.data);
      } catch (err) {
        console.error("Contacts couldn't be fetched:", err);
        setError("Could not load contacts.");
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[300px]">
        <DataLoading className="animate-spin text-4xl text-orange-600" />
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500 text-center mt-4">{error}</p>;
  }

  return (
    <>
    <div className="mt-15">
        <BelowHeader Header='Contact' Paragraph='Life is either a daring adventure or nothing'/>
    </div>
    <div className="min-h-[70vh] m-15 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 px-4 py-6">
      {contact.length === 0 ? (
        <p className="text-gray-500 text-center">No contact info available</p>
      ) : (
        contact.map((office, index) => (
          <div key={index} className="border-0 bg-red-100 shadow rounded-lg p-4 w-[360px] h-[280px]">
            <h1 className="text-lg font-semibold">{office.name}</h1>
            <p>{office.address}</p>
            <p>{office.office_timings}</p>
            <p>{office.contact_numbers}</p>
            <div className="text-right mt-24">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 underline"
              >
                View On Map
              </a>
            </div>
          </div>
        ))
      )}
    </div>
    </>
  );
}

export default ContactPage;
