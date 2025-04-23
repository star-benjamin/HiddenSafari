import BelowHeader from "../components/Shared/BelowHeader";
import { useState, useEffect } from 'react';
import { CONSTANTS } from "../Utils/constant";
import axios from "axios";
import DataLoading from "../components/Shared/DataLoadingIcon";

function AboutPage() {
    const [about, setabout] = useState(null);
    const [error, seterror] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAbout = async () => {
            try {
                const response = await axios.get(`${CONSTANTS.API_URL}/api/v1/info/about-us`);
                setabout(response.data);
            } catch (err) {
                console.error("Unable to fetch about data:", err);
                seterror("Could not load about data");
            } finally {
                setLoading(false);
            }
        };
        fetchAbout();
    }, []);

    return (
        <>
            <div className="mt-15">
                <BelowHeader Header="About Us" Paragraph="Who we are and where do we stand" />
            </div>

            <div className="px-6 py-8 max-w-4xl mx-auto">
                {loading ? (
                     <div className="flex justify-center items-center h-[300px]">
                        <DataLoading className="animate-spin text-4xl text-orange-600" />
                    </div>
                ) : error ? (
                    <p className="text-red-500 text-center">{error}</p>
                ) : (
                    about?.content.split("\n\n").map((section, index) => (
                        <p key={index} className="mb-4 text-lg leading-relaxed text-gray-700">
                            {section}
                        </p>
                    ))
                )}
            </div>
        </>
    );
}

export default AboutPage;
