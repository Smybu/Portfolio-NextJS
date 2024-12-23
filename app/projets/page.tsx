import React from "react";
import ProjetsList from "@/app/components/ProjetBlock";

const projets = [
    {
        titre: "Site WATIF",
        description: "Projet en groupe sur 6 semaines de réalisation d'un réseau social",
        link: "/projets/watif",
        langages: ["React", "Spring", "MongoDB", "Python"],
    },
    {
        titre: "Stage chez DiagRAMS Technologies",
        description: "Stage de 10 semaines chez une entreprise de maintenance prédictive",
        link: "/projets/diagrams",
        langages: ["React", "Typescript", "SQL"],
    },
    {
        titre: "Application de maintenance prédictive",
        description: "Projet de BTS consistant aux mesures des vibrations d'un moteur",
        link: "/projets/vibrations",
        langages: ["NodeJS", "ESP32", "MQTT"],
    },
    {
        titre: "Marathon du Web",
        description: "La réalisation d'un site web en 48h",
        link: "/projets/marathon",
        langages: ["Laravel", "BDD", "HTML", "CSS"],
    },
];

const Projets: React.FC = () => {
    return <ProjetsList projets={projets} />;
};

export default Projets;