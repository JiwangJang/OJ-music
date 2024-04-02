import Header from "@/components/layoutComp/Header";
import "@/public/css/reset.css";
import "@/public/css/globals.css";
import Footer from "@/components/layoutComp/Footer";
import Script from "next/script";

declare global {
    interface Window {
        kakao: any;
    }
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='ko'>
            <body>
                <Script
                    src='//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=d7d5e2b55c03d6d787e2693777d8e74c'
                    strategy='beforeInteractive'
                />
                <div style={{ overflowX: "hidden" }}>
                    <Header />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
}
