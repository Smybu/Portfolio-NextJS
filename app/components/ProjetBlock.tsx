import React from "react";
import Link from "next/link";

interface Projet {
    titre: string;
    description: string;
    link: string;
    langages: string[];
}

const ProjetsList: React.FC<{ projets: Projet[] }> = ({ projets }) => {
    return (
        <div className="flex flex-col items-center justify-center p-4">
            {projets.map((projet, index) => (
                <div
                    key={index}
                    className="max-w-md w-full shadow-md rounded-lg p-6 mb-4 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                >
                    <h2 className="text-xl font-semibold text-purple-500 text-center mb-2">{projet.titre}</h2>
                    <p className="prose mb-4 text-center">{projet.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4 justify-center">
                        {projet.langages.map((langage, i) => (
                            <span
                                key={i}
                                className="bg-purple-500 prose text-sm font-medium px-2 py-1 rounded-full"
                            >
                {langage}
              </span>
                        ))}
                    </div>
                    <div className="flex justify-center">
                        <Link
                            href={projet.link}
                            className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-300 transition-all"
                            aria-label={`En savoir plus sur ${projet.titre}`}
                        >
                            En savoir plus
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjetsList;