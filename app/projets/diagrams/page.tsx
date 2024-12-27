import React from "react";
import CompetenceBlock from "@/app/components/CompetenceBlock";
import DetailsCard, {Details} from "@/app/components/DetailsBlock";
import Link from "next/link";



const details: Details =
    {
        title: "Stage chez DiagRAMS Technologies",
        presentation: "J’ai effectué un stage de 10 semaines chez DiagRAMS Technologies, une entreprise spécialisée dans la maintenance prédictive. Ce stage m’a permis de m’immerger dans le monde professionnel et de contribuer activement à divers projets, en mettant en pratique mes compétences en développement.",
        details: "Au cours de ce stage, j’ai mené une gestion complète de projets de machine learning, incluant la création d’une table SQL pour organiser les données, le développement d’un CRUD pour la manipulation de ces données, et la conception d’un affichage frontend pour une expérience utilisateur optimale. J’ai également participé à des missions secondaires, telles que la correction de bugs et l’ajout de fonctionnalités spécifiques comme une popup dédiée à l’affichage des statistiques d’un capteur. Ces missions m’ont permis de mieux comprendre les processus de développement et de répondre efficacement aux besoins des utilisateurs.",
        experience: "Cette expérience a été particulièrement enrichissante sur le plan professionnel et personnel. J’ai découvert les dynamiques du travail en équipe et approfondi mes compétences en développement full-stack et en gestion de projets techniques. Travailler dans un environnement collaboratif m’a également permis d’apprendre aux côtés d’une équipe accueillante et compétente, avec qui j’ai partagé de précieux moments d’apprentissage et de convivialité. Ce stage a renforcé ma passion pour le développement technologique et m’a donné confiance dans ma capacité à m’adapter et à contribuer dans un cadre professionnel.",
        date: "15 Avril 2024 - 21 Juin 2024",
    };

export default function Diagrams() {
    return (
        <section>
            <DetailsCard details={details}/>
        </section>
    );
}
