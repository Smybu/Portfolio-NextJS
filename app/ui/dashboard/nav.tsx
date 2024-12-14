import { metaData } from "../config";

const navItems = {
    "/competences": { name: "Compétences", tooltip: "Mes compétences en informatique" },
    "/parcours": { name: "Parcours", tooltip: "Pour mon parcours scolaire" },
    "/projets": { name: "Projets", tooltip: "Divers projets réalisés" },
};

export function Navbar() {
    return (
        <nav className="lg:mb-16 mb-12 py-5 prose">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex items-center">
                    <a href="/" className="underline hover:text-purple-500 text-3xl font-semibold tracking-tight">
                        {metaData.title}
                    </a>
                </div>
                <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
                    {Object.entries(navItems).map(([path, { name, tooltip }]) => (
                        <a
                            key={path}
                            href={path}
                            className="underline transition-all hover:text-purple-500 text-neutral-200 flex align-middle relative"
                            title={tooltip}
                        >
                            {name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}
