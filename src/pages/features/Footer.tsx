/* eslint-disable @next/next/no-img-element */
import { Text } from '@/components/ui/Text';
import Link from 'next/link';

const Footer = () => {
    return(
      <footer className="bg-gray-900 text-white py-8 px-4 md:px-8">
        <div className="container mx-auto flex flex-col md:flex-row items-start md:items-stretch justify-around ">
          <div className="mb-4 md:mb-0 ">
            {/* Redimensionner le logo avec une classe Tailwind */}
            <img src="images/img_logopng.png" alt="logopng" className="h-8" />
            <span>
              <>Le raccourcisseur d&#39;url panafricain. <br /></>
              <br />
              <br />
            </span>
            <span>
              <>Sicap Mbao <br />
              Boutique Baye Niass <br />
              Dakar, Senegal</><br /><br />
            </span>
            <span className="text-white-A700 font-inter text-left font-bold">
              Phone:
            </span><span> +221 77 860 60 64</span><br />
            <span className="text-white-A700 font-inter text-left font-bold">
              Email:
            </span><span> xaralatech@gmail.com</span>
          </div>
          <div className="mb-4 md:mb-0">
            <span className="text-white-A700 font-inter text-left font-bold">Lienfy</span><br />
            <ul className="flex mt-4 space-y-4 flex-col font-poppins gap-2.5 items-start justify-start mb-[21px] md:w-full common-column-list">
              <li>
                <Link href="/">
                  <span className="text-white-A700_99">Accueil</span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="text-white-A700_99">C&#39;est quoi lienfy? </span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="text-white-A700_99">Blog</span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="text-white-A700_99">Nous contacter</span>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="text-white-A700_99">Deconnexion</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0">
            <span className="text-white-A700 font-poppins font-bold mb-[30px]">
              Mes Liens
            </span><br />
            <span >
              <Link href="/">
                <span className="flex mt-4">Nombre de click</span>
              </Link>
            </span>
          </div>      
        </div>
        <div className="mt-20 flex flex-row justify-center ">
          {/* Mettre le texte du copyright et le nom du créateur ici */}
          <span className="text-white-A700 font-poppins font-normal">
            © Copyright{" "}
          </span>
          <span className="text-white-A700 font-poppins font-bold">
            Lienfy
          </span>
          <span className="text-white-A700 font-poppins font-normal">
            . All Rights Reserved. Crée par{" "}
          </span>
          <span className="text-orange-500 font-poppins font-normal">
            Xarala
          </span>
        </div>
      </footer>      
    )
}

export default Footer;