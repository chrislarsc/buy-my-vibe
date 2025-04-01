import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buy The Vibes - Positive Energy for $1",
  description: "Experience pure positive energy that will brighten your day and enhance your mood. Just $1 for good vibes.",
  openGraph: {
    title: "Buy The Vibes - Positive Energy for $1",
    description: "Experience pure positive energy that will brighten your day and enhance your mood. Just $1 for good vibes.",
    images: [
      {
        url: "https://d1wqzb5bdbcre6.cloudfront.net/97843bb9d0cbf8268cf82e392ceb1e9d693fea0b33be49d8f8fee141e3bfa766/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a64463878556a6c44536a5a4c5432563062335a515655597a66475a7358327870646d56666232786d556d6442526d64335530465a624767354e5446585732597851304a7730305751787542385564",
        width: 1200,
        height: 630,
        alt: "Buy The Vibes",
      },
    ],
    siteName: "Buy The Vibes",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy The Vibes - Positive Energy for $1",
    description: "Experience pure positive energy that will brighten your day and enhance your mood. Just $1 for good vibes.",
    images: ["https://d1wqzb5bdbcre6.cloudfront.net/97843bb9d0cbf8268cf82e392ceb1e9d693fea0b33be49d8f8fee141e3bfa766/68747470733a2f2f66696c65732e7374726970652e636f6d2f6c696e6b732f4d44423859574e6a64463878556a6c44536a5a4c5432563062335a515655597a66475a7358327870646d56666232786d556d6442526d64335530465a624767354e5446585732597851304a7730305751787542385564"],
  },
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-8">
      <div className="container max-w-6xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Buy The <span className="text-gradient">Vibes</span>
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto mt-4">
            Experience pure positive energy that will brighten your day and enhance your mood. Just $1 for good vibes.
          </p>
        </header>
        
        <div className="flex items-center justify-center">
          <Card className="w-full max-w-md border-2 border-border">
            <CardHeader>
              <CardTitle className="text-2xl">Good Vibes Package</CardTitle>
              <CardDescription>Instant mood enhancement</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-5xl font-bold">$1</div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5 text-primary">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  Positive Energy
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5 text-primary">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  Good Mood
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5 text-primary">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  Digital Delivery
                </li>
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col gap-3">
              <Button asChild className="w-full glow">
                <Link href="https://buy.stripe.com/7sIeXla5I9RH0kU8ww" target="_blank" rel="noopener noreferrer">
                  Purchase Vibes
                </Link>
              </Button>
              <div className="flex items-center justify-center w-full text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  Powered by Stripe
                </span>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
      
      <footer className="mt-12 text-center text-muted-foreground">
        <p>
          vibed with ❤️ by{" "}
          <Link href="https://warpcast.com/chrislarsc.eth" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            @chrislarsc
          </Link>
        </p>
      </footer>
    </div>
  );
}
