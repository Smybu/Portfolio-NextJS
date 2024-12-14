import Link from "next/link";
import Image from "next/image";

export default function Page() {
    return (
            <section>
                <Image
                    src="/image-portfolio.png"
                    alt="Photo de profil"
                    className="rounded-full mx-auto sm:float-right sm:ml-5"
                    width={160}
                    height={160}
                    priority
                    sizes="(max-width: 640px) 160px, 100vw"
                />

                <h1 className="mb-8 text-2xl font-medium tracking-tight prose">
                    Bienvenue sur mon <span className="text-purple-500">portfolio</span> !
                </h1>

                <div className="prose prose-invert space-y-4">
                    <p>
                        Je suis <span className="text-purple-500">Waeles Swann</span>, Développeur Full Stack.
                        Passionné par la création d'applications web performantes, intuitives et modernes,
                        je combine mes compétences en développement front-end et back-end pour transformer
                        des idées en solutions numériques concrètes.
                    </p>
                    <p>
                        J'aime concevoir et développer des sites et applications qui répondent aux besoins des
                        utilisateurs.
                        Encore en études, j’ai travaillé sur des projets de petites applications prototypes ou
                        bien sur des applications conséquentes lors d'un stage.
                    </p>
                    <p>
                        Si vous êtes intéressé par mon profil, n'hésitez pas à me contacter
                        sur mon{' '}
                        <a className="underline hover:text-purple-500" href="mailto:swaeles59@gmail.com"
                           title="Lien pour m'envoyer un mail" target="_blank">
                            mail
                        </a>
                        .
                    </p>
                    <p>
                        Pour voir mon CV vous pouvez cliquer <Link className="underline hover:text-purple-500" href="/CV_WAELES_Swann.pdf" download="CV_WAELES_Swann.pdf"
                                                                   title="Lien pour m'envoyer un mail" target="_blank">
                        ici
                    </Link>.
                    </p>
                </div>
            </section>
    );
}
