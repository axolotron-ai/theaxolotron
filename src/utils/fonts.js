import { Lato, Oswald } from "next/font/google";

const lato = Lato({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-lato',
});

const oswald = Oswald({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-oswald',
});

export { lato, oswald };