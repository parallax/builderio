import "../styles/globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"bg-gray-50"}>
        <div className="relative">
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
