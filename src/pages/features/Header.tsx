/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
// Header.tsx

import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <img src="images/img_logopng.png" alt="logopng" className="h-8" />
      </div>
      <div>
        <nav>
          <ul className="flex space-x-4">
            <li>
            <Link href="/">
              <span className="text-orange-500 hover:underline cursor-pointer">Accueil</span>
            </Link>
            </li>
            <li>
              <Link href="/mes-liens">
                Mes Liens
              </Link>
            </li>
            <li>
              <Link href="/blog">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex space-x-4">
        <Button variant="test1">
            Se connecte
        </Button>
        <Button variant="test">
          S'inscrire
        </Button>
        
      </div>
    </header>
  );
};

export default Header;
