import React from "react";
import CompetenceBlock from "@/app/components/CompetenceBlock";
import DetailsCard, {Details} from "@/app/components/DetailsBlock";
import Link from "next/link";
import Banner from "@/app/components/Banner";



const details: Details =
    {
        title: "Réseau social Watif",
        presentation: "Dans le cadre d’un projet de six semaines en équipe de six personnes, nous travaillons actuellement sur le développement d’un réseau social complet basé sur la curiosité des utilisateurs, intégrant de l’intelligence artificielle, de la gestion des utilisateurs et des interactions sociales. Ce projet mobilise nos compétences en développement full-stack, en bases de données et en technologies modernes pour concevoir une plateforme performante et intuitive.",
        details: "Le projet comprend plusieurs volets techniques. Nous avons déjà conçu un générateur d’images aléatoires basé sur l’intelligence artificielle en Python, enrichissant ainsi les fonctionnalités créatives de la plateforme. Nous sommes en train de développer une API robuste avec Spring Boot pour gérer les requêtes liées au site, couvrant des fonctionnalités essentielles comme l’authentification, la création de posts, les likes, les intérêts, les profils utilisateurs et les commentaires. Côté bases de données, nous utilisons MongoDB pour le stockage des données principales, complété par une base relationnelle en Neo4j afin d’exploiter les relations entre utilisateurs et posts. Une API de recommandation en Python est en cours d’élaboration pour proposer des contenus et des profils pertinents en fonction des centres d’intérêt des utilisateurs. Parallèlement, nous travaillons avec React pour concevoir le frontend, en apportant un soin particulier au design et à l’expérience utilisateur.",
        experience: "Ce projet en cours m’offre une expérience précieuse de travail en groupe, favorisant la collaboration et la répartition des tâches. J’ai l’occasion d’approfondir mes compétences en développement full-stack, notamment en Python, Spring Boot et React, ainsi qu’en bases de données avec MongoDB et Neo4j. Travailler sur une plateforme combinant intelligence artificielle, API, bases de données avancées et design frontend constitue un vrai défi, qui me permet de mieux comprendre les différentes facettes du développement d’une application web complète. Cette expérience est également une opportunité d’apprendre à gérer un projet complexe tout en respectant les délais et en veillant à la qualité du produit final.",
        date: "Projet en cours",
    };

export default function Watif() {
    return (
        <section>
            <DetailsCard details={details}/>
            <Banner></Banner>
        </section>
    );
}
