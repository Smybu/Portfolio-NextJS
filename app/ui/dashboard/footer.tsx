"use client";

import React from "react";

const GithubIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
    >
        <path d="M12 .5C5.648.5.5 5.648.5 12a11.5 11.5 0 007.846 10.951c.573.103.779-.248.779-.551v-1.94c-3.192.692-3.865-1.554-3.865-1.554-.523-1.33-1.278-1.686-1.278-1.686-1.044-.713.08-.698.08-.698 1.153.08 1.76 1.184 1.76 1.184 1.026 1.756 2.692 1.248 3.348.953.104-.744.401-1.248.73-1.535-2.548-.292-5.228-1.273-5.228-5.668 0-1.252.446-2.276 1.178-3.077-.117-.291-.51-1.464.112-3.053 0 0 .96-.308 3.144 1.175a10.85 10.85 0 015.728 0c2.185-1.483 3.144-1.175 3.144-1.175.622 1.589.23 2.762.112 3.053.733.801 1.177 1.825 1.177 3.077 0 4.405-2.685 5.37-5.242 5.653.413.355.781 1.059.781 2.138v3.169c0 .303.204.658.785.546A11.498 11.498 0 0023.5 12C23.5 5.648 18.352.5 12 .5z" />
    </svg>
);

const EmailIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
    >
        <path d="M1.5 6.75a3.25 3.25 0 013.25-3.25h14.5a3.25 3.25 0 013.25 3.25v10.5a3.25 3.25 0 01-3.25 3.25H4.75A3.25 3.25 0 011.5 17.25V6.75zM5.25 5a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75V5.75a.75.75 0 00-.75-.75H5.25zM2.94 6.24L12 12.47l9.06-6.23a.75.75 0 11.88 1.22L12 13.53a.75.75 0 01-.88 0L2.06 7.46a.75.75 0 01.88-1.22z" />
    </svg>
);

const YoutubeIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
    >
        <path d="M9.75 9.75v4.5l4.5-2.25-4.5-2.25z" />
        <path
            fillRule="evenodd"
            d="M3.5 6.25C3.5 5.01 4.51 4 5.75 4h12.5c1.24 0 2.25 1.01 2.25 2.25v11.5c0 1.24-1.01 2.25-2.25 2.25H5.75C4.51 20 3.5 18.99 3.5 17.75V6.25zm2.25-.25a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V6.25a.25.25 0 00-.25-.25H5.75z"
            clipRule="evenodd"
        />
    </svg>
);

const YEAR = new Date().getFullYear();
const SOCIAL_LINKS = {
    github: "https://github.com/Smybu",
    email: "mailto:swaeles59@gmail.com",
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
};

const SOCIAL_TITLES = {
    github: "Visitez mon GitHub",
    email: "Envoyez-moi un email",
    youtube: "Regardez ma chaîne YouTube",
};

function SocialLink({ href, title, Icon }: { href: string; title: string; Icon: React.FC }) {
    return (
        <a
            href={href}
            title={title}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500"
        >
            <Icon />
        </a>
    );
}

export default function Footer() {
    return (
        <footer className="flex justify-between items-center text-gray-300 text-sm mt-16 lg:mt-24">
            <small className="text-[#D4D4D4]">
                <time>© {YEAR}</time>
                {" "}
                <a
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-500"
                >
                    Waeles Swann
                </a>
            </small>
            <div className="flex text-lg gap-3.5 transition-opacity duration-300 hover:opacity-90">
                <SocialLink
                    href={SOCIAL_LINKS.github}
                    title={SOCIAL_TITLES.github}
                    Icon={GithubIcon}
                />
                <SocialLink
                    href={SOCIAL_LINKS.email}
                    title={SOCIAL_TITLES.email}
                    Icon={EmailIcon}
                />
                <SocialLink
                    href={SOCIAL_LINKS.youtube}
                    title={SOCIAL_TITLES.youtube}
                    Icon={YoutubeIcon}
                />
            </div>
        </footer>

    );
}
