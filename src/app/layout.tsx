import MainLayout from "@/layouts/MainLayout";
import { QueryProvider, StoreProvider, ThemeProvider } from "@/providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body dir="rtl">
        <StoreProvider>
          <QueryProvider>
            <ThemeProvider>
              <MainLayout>{children}</MainLayout>
            </ThemeProvider>
          </QueryProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
