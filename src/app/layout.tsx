import { ThemeContextProvider } from '@/context';
import { MainLayout } from '@/layouts';
import { QueryProvider, SnackbarProvider, StoreProvider } from '@/providers';
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
            <ThemeContextProvider>
              <SnackbarProvider>
                <MainLayout>{children}</MainLayout>
              </SnackbarProvider>
            </ThemeContextProvider>
          </QueryProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
