import "./globals.css";

//providers
import { TelegramProvider } from "../hooks/webApp/TelegramProvider";
import { ReduxProvider } from "../redux/provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <TelegramProvider>{children}</TelegramProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
