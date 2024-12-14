import React from "react";
import CompetenceBlock from "@/app/components/CompetenceBlock";

interface Competence {
    categorie: string;
    elements: { nom: string; niveau: number }[];
}

const competences: Competence[] = [
    {
        categorie: "Langage",
        elements: [
            { nom: "HTML", niveau: 90 },
            { nom: "PHP", niveau: 80 },
            { nom: "Javascript", niveau: 80 },
            { nom: "Typescript", niveau: 80 },
            { nom: "CSS", niveau: 75 },
            { nom: "Java", niveau: 75 },
            { nom: "Python", niveau: 70 },
            { nom: "C++", niveau: 60 },
        ],
    },
    {
        categorie: "Framework",
        elements: [
            { nom: "Laravel", niveau: 85 },
            { nom: "NextJS", niveau: 85 },
            { nom: "Spring", niveau: 80 },
            { nom: "Flask", niveau: 65 },
            { nom: "Angular", niveau: 60 },
        ],
    },
];

export default function CompetencesPage() {
    return (
        <section>
            <h1 className="mb-8 text-2xl font-medium tracking-tight prose">Mes Compétences</h1>
            <h3 className="mb-8 text-xl font-medium tracking-tight prose">Voici mes compétences sur différents aspects de l'informatique.</h3>
            <div>
                {competences.map(({ categorie, elements }, index) => (
                    <CompetenceBlock key={index} categorie={categorie} elements={elements} />
                ))}
            </div>
        </section>
    );
}
