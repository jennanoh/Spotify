import Link from "next/link";
import Image from "next/image";
import logoImage from "/public/Spotify_Logo_CMYK_White.png";

export default function Home() {
  return (
    <main>
    <Link href="/">
      <Image 
        src= {logoImage} 
        width={80}
        alt='logo'
      />
    </Link>
    <div>
      Home
    </div>
    </main>
  );
}
