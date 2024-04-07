import { Poppins } from 'next/font/google';
import "../globals.css"

export const metadata = {
    title: "Invest Guru",
    description: "Invest Guru is a platform that helps you make better investment decisions.",
};

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export default function RootLayout({ children }) {
    return (
        <html lang="en">

            <body className={`${poppins.className }  bg-black`}>


                <div className="container mx-auto">
                    {children}
                </div>

            </body>
        </html>
    );
}
