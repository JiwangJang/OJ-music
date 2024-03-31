import Header from "@/components/layoutComp/Header";
import "@/public/css/reset.css";
import "@/public/css/globals.css";
import Footer from "@/components/layoutComp/Footer";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='ko'>
            <body>
                <div style={{ overflowX: "hidden" }}>
                    <Header />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
}
