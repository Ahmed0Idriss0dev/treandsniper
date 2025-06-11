import ToolNav from "@/components/sitemap/ToolNav";

export default function Auth({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <main className="w-full  h-dvh">
  <ToolNav/>
   {children}
  </main>
  );
}
