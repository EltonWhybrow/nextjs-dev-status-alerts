import Image from 'next/image';
import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="py-10">

      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <a> <Image src="/alerts.webp" alt="alert" height="98" width="339" /></a>
        </Link>
      </p>
    </header>
  );
}
