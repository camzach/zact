import "./globals.css";

import T3Wrapper from "actions/wrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <T3Wrapper>{children}</T3Wrapper>
      </body>
    </html>
  );
}