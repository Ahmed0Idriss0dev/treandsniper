import Navigation from "@/components/sitemap/Navigation";

export default function Landing({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <>
   <Navigation/>
   {children}
   </>
  );
}
