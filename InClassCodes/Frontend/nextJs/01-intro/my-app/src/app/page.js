import ClientComponent from "@/components/ClientComponent";
import ServerComponent from "@/components/ServerComponent";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className=" text-3xl">SElam Dünyalı</h1>
      <ServerComponent/>
      <ClientComponent/>
    </main>
  );
}
