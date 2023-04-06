import Header from "@/components/header";
import "./globals.css";
import Footer from "@/components/footer";

export const metadata = {
  title: "Neighbuddy",
  description: "Find Neighbuddies near you!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col w-full max-w-screen mx-auto">
        <Header />
        <main className="grow max-h-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
