import { Header } from "@/components/Header";
import { LinkList } from "@/components/LinkList";
import { SocialLinks } from "@/components/SocialLinks";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-zinc-100 to-white dark:from-zinc-900 dark:to-black px-4 text-center text-zinc-800 dark:text-zinc-100 transition-colors duration-300 lg:py-16 py-0">
      <Header />
      <SocialLinks />
      <LinkList />
    </main>
  );
}