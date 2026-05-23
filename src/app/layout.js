
import "./globals.css";



export const metadata = {
  title: "Portfolio",
  description: "A website to keep track of projects",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
