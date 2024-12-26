import React from "react";
import CompetenceBlock from "@/app/components/CompetenceBlock";
import DetailsCard, {Details} from "@/app/components/DetailsBlock";
import Link from "next/link";



const details: Details =
    {
        title: "Projet Vibrations",
        presentation: "Ce projet consiste en la création d’une application innovante permettant de surveiller les vibrations d’un moteur en temps réel. Grâce à cette solution, il est possible de détecter les anomalies rapidement et d’évaluer l’état de santé du moteur, favorisant ainsi une maintenance prédictive efficace et une réduction des risques de panne. Ce projet fut réalisé en groupe de 4 lors de mon BTS SNIR.",
        details: "L’application repose sur un microcontrôleur ESP32 chargé de collecter les données de vibration et de les transmettre via le protocole MQTT à un serveur Node.js pour analyse. Parmi ses fonctionnalités, on retrouve la collecte en temps réel des vibrations, la transmission des données pour un traitement rapide, et l’utilisation d’une colonne lumineuse pour indiquer visuellement l’état de santé du moteur. Les données sont sauvegardées localement tout en étant synchronisées avec le cloud. Une interface utilisateur intuitive a également été développée, permettant de visualiser l’état de santé du moteur sous forme de graphiques, ce qui facilite le suivi et la prise de décision.",
        experience: "Ce projet a été une opportunité de consolider mes compétences dans le domaine des objets connectés, avec la configuration et l’utilisation du microcontrôleur ESP32 pour capturer et transmettre des données précises. J’ai approfondi mes connaissances sur les protocoles de communication comme MQTT. Ce fut le premier gros projet que j'ai réalisé et j'ai vraiment apprécié le produire avec mes camarades de classe",
        date: "9 Janvier 2023 - 13 Juin 2023",
    };

export default function Vibrations() {
    return (
        <section>
            <DetailsCard details={details}/>
            <div className="mb-6 text-center">
                <Link
                    href={"/Projet_vibrations.pdf"}
                    className="bg-purple-500 text-white text-center py-2 px-4 rounded-lg hover:bg-purple-300 transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Lien vers le rapport de projet
                </Link>
            </div>
        </section>
    );
}
