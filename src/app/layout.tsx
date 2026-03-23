import type { Metadata } from "next";
import { Crimson_Text, Exo } from "next/font/google";
import "./globals.css";

const crimsonText = Crimson_Text({
  variable: "--font-crimson",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const exo = Exo({
  variable: "--font-exo",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luxury Real Estate | Premium Properties",
  description: "Discover premium luxury real estate properties with world-class amenities and prime locations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${crimsonText.variable} ${exo.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    colors: {
                      primary: {
                        DEFAULT: '#0F3D3E',
                        dark: '#0A2829',
                        light: '#1A5456'
                      },
                      accent: {
                        gold: '#C9A96E',
                        'gold-light': '#D4B87E',
                        'gold-dark': '#B8985E'
                      },
                      neutral: {
                        white: '#FFFFFF',
                        gray: {
                          50: '#F9FAFB',
                          100: '#F3F4F6',
                          200: '#E5E7EB',
                          300: '#D1D5DB',
                          800: '#1F2937',
                          900: '#111827'
                        }
                      }
                    },
                    fontFamily: {
                      crimson: ['var(--font-crimson)', 'serif'],
                      exo: ['var(--font-exo)', 'sans-serif']
                    },
                    borderRadius: {
                      '2xl': '1rem'
                    }
                  }
                }
              }
            `,
          }}
        />
      </head>
      <body className="font-exo" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
