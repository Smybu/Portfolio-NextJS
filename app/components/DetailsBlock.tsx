import Link from "next/link";
import React from "react";

export interface Details {
    title: string;
    presentation: string;
    details: string;
    experience: string;
    date: string;
    link: string | null;
}

const DetailsCard: React.FC<{ details: Details }> = ({ details }) => {
    return (
        <div className="max-w">
            <div className="p-6">
                <h2 className="text-2xl font-semibold text-purple-500 text-center mb-4">{details.title}</h2>
                <p className="text-purple-300 text-xs text-center italic">{details.date}</p>

                {/* Section Présentation */}
                <div className="mb-6">
                    <h3 className="text-xl font-semibold text-purple-500 mb-2">Présentation</h3>
                    <p className="prose text-base text-justify">{details.presentation}</p>
                </div>

                {/* Section Détails */}
                <div className="mb-6">
                    <h3 className="text-xl font-semibold text-purple-500 mb-2">Détails</h3>
                    <p className="prose text-base text-justify">{details.details}</p>
                </div>

                {/* Section Expérience */}
                <div className="mb-6">
                    <h3 className="text-xl font-semibold text-purple-500 mb-2">Expérience</h3>
                    <p className="prose text-base text-justify">{details.experience}</p>
                </div>


                    {details?.link ?
                        <div className="mb-6 text-center">
                            <Link
                                href={details?.link}
                                className="bg-purple-500 text-white text-center py-2 px-4 rounded-lg hover:bg-purple-300 transition-all"
                            >
                                Lien vers le github
                            </Link>
                        </div>: null}
            </div>
        </div>
    );
};

export default DetailsCard;