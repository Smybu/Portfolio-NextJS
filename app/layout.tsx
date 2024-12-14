import '@/app/ui/global.css';
import {Navbar} from "@/app/ui/dashboard/nav";
import Footer from "@/app/ui/dashboard/footer";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr">
        <head>
            <link rel="icon" href="/favicon.svg" type="image/svg+xml"/>
        </head>
        <body className="flex flex-col items-center justify-center mx-auto my-8">
        <main className="flex-auto w-full max-w-[640px] px-4">
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </main>
        </body>
        </html>
    );
}

