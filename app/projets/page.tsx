import { Navbar } from "@/app/ui/dashboard/nav";
import Footer from "@/app/ui/dashboard/footer";

export default function Projets() {
    return (
        <>
            <Navbar />
            <section className="prose prose-neutral dark:prose-invert">
                <h1>Compétences</h1>
                <p>
                    Ici, vous pouvez présenter les compétences que vous possédez.
                    Par exemple :
                </p>
                <ul>
                    <li>Développement web (HTML, CSS, JavaScript, React)</li>
                    <li>Gestion de projets (agiles, SCRUM)</li>
                    <li>Connaissances en base de données (SQL, NoSQL)</li>
                    {/* Ajoutez d'autres compétences ici */}
                </ul>
            </section>
            <Footer />
        </>
    );
}
