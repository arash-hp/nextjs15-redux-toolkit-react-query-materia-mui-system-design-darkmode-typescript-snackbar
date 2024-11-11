import AppBar from "@/layouts/DefaultLayout";
import ThemeProvider from "@/theme/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body dir="rtl">
        <ThemeProvider>
          <AppBar>{children}</AppBar>
        </ThemeProvider>
      </body>
    </html>
  );
}
