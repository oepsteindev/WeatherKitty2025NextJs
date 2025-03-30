import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const defaultLogo = 'https://static.scientificamerican.com/sciam/cache/file/9CAE9C60-8BC5-4CA3-95C180EFACDD99FD_source.jpg?w=900';

  return (
    <div>
      <Image src={defaultLogo} alt="logo" height={300} width={300} className="mb-4" loading="lazy" />
      <header className="text-center py-4 text-4xl font-bold">
        <Link href="/" className="hover:underline">
          WeatherKitty
        </Link>
      </header>
    </div>
  );
}
