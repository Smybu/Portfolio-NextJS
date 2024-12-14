interface Parcours {
    nom: string;
    ville: string;
    anneeDebut: number;
    anneeFin: number | string;
    description: string;
}

const parcours: Parcours[] = [
    {
        nom: "Lycée des Flandres",
        ville: "Hazebrouck",
        anneeDebut: 2018,
        anneeFin: 2021,
        description:
            "Section Générale avec comme spécialités : NSI, Mathématiques et Physique Chimie",
    },
    {
        nom: "Lycée Gustave Eiffel",
        ville: "Armentières",
        anneeDebut: 2021,
        anneeFin: 2023,
        description:
            "BTS SNIR (Systèmes Numériques option A : Informatique et Réseaux",
    },
    {
        nom: "IUT de Lens - Université d'Artois",
        ville: "Lens",
        anneeDebut: 2023,
        anneeFin: "actuel",
        description:
            "BUT informatique parcours réalisation d'applications, conception, développement, validation",
    },
];

export default function Parcours() {
    return (
        <section>
            <h1 className="mb-8 text-2xl font-medium tracking-tight prose">Mon Parcours</h1>
            <h2 className="mb-8 text-xl font-medium tracking-tight prose">Voici mon parcours scolaire en plusieurs étapes.</h2>
            <div>
                {parcours.map((item, index) => (
                    <div key={index} className="mb-6 border-b pb-4 prose">
                        <h3 className="text-xl font-semibold prose">
                            <span className="text-purple-500">{item.nom}</span>, <span className="text-purple-300 italic">{item.ville} ({item.anneeDebut} - {item.anneeFin})</span>
                        </h3>
                        <p className="mt-2 text-purple-200">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}