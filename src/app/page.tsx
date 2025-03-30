import Header from "@/components/header";
import WeatherPage from '@/components/weatherapi';
import CallToAction from "@/components/calltoaction";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="grid place-items-center p-4">
        <Header />
        <CallToAction />
        <WeatherPage />
      </div>
    </main>
  );
}
