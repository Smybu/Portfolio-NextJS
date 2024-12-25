import React from "react";
import CompetenceBlock from "@/app/components/CompetenceBlock";
import DetailsCard, {Details} from "@/app/components/DetailsBlock";
import Link from "next/link";



const details: Details =
    {
        title: "Marathon du Web",
        presentation: "Dans le cadre de notre programme de BUT, nous avons eu l’opportunité de participer à un hackathon intense de 36 heures sur le thème \"Construire votre propre histoire\". L'objectif de cet événement était de concevoir une application web interactive où les utilisateurs peuvent influencer le déroulement de l’histoire en fonction des choix qu'ils font, créant ainsi une expérience unique pour chaque lecture.",
        details: "Ce projet a permis de mettre en pratique nos compétences acquises tout au long de notre formation. En effet, chaque équipe était composée d’étudiants issus des départements BUT Informatique et BUT Métiers du Multimédia et de l'Internet (MMI), favorisant ainsi une collaboration interdisciplinaire. D’un côté, les étudiants en informatique se sont concentrés sur la partie back-end et le développement de la logique de l’application, tandis que les étudiants en MMI ont pris en charge la conception de l’interface utilisateur (UI), l’expérience utilisateur (UX) ainsi que l’aspect visuel global du projet. Cette collaboration a permis de donner naissance à une application à la fois fonctionnelle, agréable à utiliser et esthétiquement réussie.",
        experience: "Ce projet a été une excellente occasion de travailler sur des compétences techniques et créatives dans un environnement collaboratif, en appliquant des méthodologies agiles et en luttant contre la fatigue.",
        date: "20 Décembre 2023 - 21 Décembre 2023",
    };

export default function Marathon() {
    return (
        <section>
            <DetailsCard details={details}/>
            <div className="mb-6 text-center">
                <Link
                    href="https://github.com/Smybu/Marathon-web"
                    className="bg-purple-500 text-white text-center py-2 px-4 rounded-lg hover:bg-purple-300 transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Lien vers le projet Github
                </Link>
            </div>
        </section>
    );
}
