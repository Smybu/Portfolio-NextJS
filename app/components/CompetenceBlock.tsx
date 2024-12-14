import React, {JSX} from "react";
import { FaHtml5, FaCss3Alt, FaPhp, FaJs, FaJava, FaPython, FaAngular, FaLaravel } from "react-icons/fa";
import { SiTypescript, SiCplusplus, SiSpring, SiFlask, SiNextdotjs } from "react-icons/si";

interface CompetenceElement {
    nom: string;
    niveau: number;
}

interface CompetenceBlockProps {
    categorie: string;
    elements: CompetenceElement[];
}

const iconsMap: Record<string, JSX.Element> = {
    HTML: <FaHtml5 className="text-orange-500" />,
    CSS: <FaCss3Alt className="text-blue-500" />,
    PHP: <FaPhp className="text-indigo-500" />,
    Javascript: <FaJs className="text-yellow-500" />,
    Typescript: <SiTypescript className="text-blue-600" />,
    Java: <FaJava className="text-red-500" />,
    Python: <FaPython className="text-green-500" />,
    "C++": <SiCplusplus className="text-blue-800" />,
    Laravel: <FaLaravel className="text-red-600" />,
    NextJS: <SiNextdotjs className="text-white" />,
    Spring: <SiSpring className="text-green-600" />,
    Flask: <SiFlask className="text-gray-500" />,
    Angular: <FaAngular className="text-red-700" />,
};

export default function CompetenceBlock({ categorie, elements }: CompetenceBlockProps) {
    return (
        <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 prose">{categorie}</h2>
            <ul className="space-y-4">
                {elements.map(({ nom, niveau }, index) => (
                    <li key={index}>
                        <div className="flex justify-between items-center mb-1">
                            <div className="flex items-center space-x-3">
                                <span className="text-lg">{iconsMap[nom] || <span className="text-gray-500">🔷</span>}</span>
                                <span className="text-purple-200 font-medium">{nom}</span>
                            </div>
                            <span className="text-purple-300 font-medium">{niveau}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div
                                className="bg-violet-500 h-2.5 rounded-full"
                                style={{ width: `${Math.min(niveau, 100)}%` }}
                            ></div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
