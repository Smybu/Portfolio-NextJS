import React from "react";
import { FaTools } from "react-icons/fa"; // Importation de l'icône

export default function Banner() {
    return (
        <div className="bg-yellow-100 bg-opacity-80 border-l-4 border-yellow-600 text-yellow-700 p-4 mb-6 rounded-md shadow flex items-center space-x-3">
            <FaTools className="text-yellow-600 text-xl" />
            <div className="flex-1 text-center">
                <h3 className="font-bold text-lg">Projet en cours</h3>
                <p className="text-sm">Les liens seront bientôt disponibles.</p>
            </div>
        </div>
    );
};