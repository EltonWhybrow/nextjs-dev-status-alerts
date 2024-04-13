import Image from 'next/image';
import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="py-10">

      <div className="text-2xl dark:text-white text-center">
        <div className='relative group'>
          <Image src="/alerts.webp" alt="alert" height="98" width="339" />
          <div className='light-flash group-hover:animate-spin origin-center'>
            <Image src="/flash.png" alt="flash" height="29" width="29" />
          </div>
        </div>
      </div>
    </header>
  );
}
