import Banner from "./$element/banner";
import Clients from "./$element/clients";
import Header from "./$element/header";

export default function Home() {
  return (
    <main className="w-screen h-screen">
      <Header />
      <Banner />
      <Clients />
    </main>
  );
}
