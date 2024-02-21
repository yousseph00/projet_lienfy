/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { Img } from "@/components/ui/img";
import { Input } from "@/components/ui/input";
import { List } from "@/components/ui/list";
import { Text} from "@/components/ui/Text";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <section>
      <div className="bg-gray-50 flex flex-col items-center justify-start p-5 w-full">
        <div className="flex items-center space-x-4">
          <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-6 w-[49%] md:w-full">
            <Text
              className="leading-[55.00px] text-5xl sm:text-[38px] md:text-[44px] text-black-900"
              size="txtPoppinsBold48"
            >
              <span className="text-black-900 font-poppins text-left font-bold">
                Simplifier vos liens pour une navigation fluide <br /> 
                grace à notre <br />
                raccourcisseur lien
              </span> 
              <span className="text-orange-500 font-poppins text-left font-bold">
              fy
              </span>
            </Text>
            <Text
            className="leading-[24.00px] text-blue_gray-400 text-xl"
              size="txtPoppinsMedium20"
              >
            <>
                Lienfy est le raccourcisseur d&#39;url panafricain le plus
                simple. <br />
                Raccourcissez vos liens et faciliter vos partage url.
            </>
            </Text>
            <Button
              className="cursor-pointer font-medium h-[66px] min-w-[354px] mt-[51px] text-2xl md:text-[22px] text-center sm:text-xl bg-orange-500"
            >
              Commencez gratuitement
            </Button>
          </div>
          <div className="md:flex-1 max-w-full h-auto object-cover rounded-[126px] w-[52%] md:w-full">
            <img src="images/img_454ff04e4b8d37e.png" alt="454ff04e4b8d37e" />
          </div>
        </div>
      </div>
      </section>

      <section>
      <div className="bg-gray-200 flex flex-col gap-[21px] items-center justify-start p-[45px] md:px-10 sm:px-5 w-full">
          <Text
            className="text-4xl sm:text-[32px] md:text-[34px] text-black-900"
            size="txtPoppinsBold36"
          >
            Creez un compte et commencez à raccourcir vos liens
          </Text>
          <div className="bg-white-A700 border border-gray-600 border-solid flex flex-col md:gap-10 gap-[65px] items-start justify-end max-w-[1232px] mb-10 mx-auto p-[45px] md:px-5 rounded-[12px] w-full">
            <div className="flex flex-col gap-[9px] justify-start ml-1 md:ml-[0] mt-[30px] w-full">
              <Text
                className="ml-2.5 md:ml-[0] text-base text-black-900 text-center"
                size="txtPoppinsMedium16"
              >
                Entrer le lien à raccourcir
              </Text>
              <Input
                name="groupTwo"
                placeholder="https : // aefrduje458gfghgjGJKfvv7azeegbk;ckbldjdtkgllgl"
                className="font-medium p-0 placeholder:text-gray-400 text-center text-xl w-full"
              ></Input>
            </div>
            <Button
              className="bg-orange-500 cursor-pointer font-medium h-[66px] min-w-[839px] md:min-w-full ml-1 md:ml-[0] text-2xl md:text-[22px] text-center sm:text-xl"
            >
              Inscrivez-vous gratuitement et commencez à raccourcir vos liens !
            </Button>
        </div>
      </div> 
      </section>

      <section>
      <div className="bg-white flex flex-col items-center justify-end p-7 sm:px-5 w-full">
        <div className="flex flex-col gap-[37px] items-center justify-start max-w-[1233px] mt-[19px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[19px] items-center justify-start w-full">
            <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                size="txtPoppinsBold36"
            >
                C’est quoi lienfy ?
            </Text>
            <div className="flex items-center space-x-4 justify-between">
              <Text
                  className="leading-[48.00px] md:mt-0 mt-[18px] text-2xl md:text-[22px] text-gray-700 sm:text-xl"
                  size="txtPoppinsMedium24"
                >
                  <>
                    Lienfy simplifie le partage d&#39;URL en fournissant une
                    solution de raccourcissement de liens rapide, sécurisée et
                    conviviale. Explorez nos fonctionnalités pour comprendre
                    comment Lienfy peut rendre votre expérience de partage en
                    ligne plus efficace.&quot;
                  </>
              </Text>
              <div className="h-[175px] relative w-[28%] md:w-full">
                <img src="images/img_lienfy.png" alt="img_lienfy" />
              </div>
            </div>
          </div>
          <div className="bg-orange-50 flex flex-col gap-[11px] items-center justify-center p-[7px] rounded-[12px] w-[49%] md:w-full">
              <Text
                className="mt-2.5 sm:text-[16.43px] md:text-[18.43px] text-[20.43px] text-orange-500"
                size="txtPoppinsBold2043"
              >
                Facilité
              </Text>
              <Img
                className="h-12 md:h-auto object-cover w-12"
                src="images/img_maskgroup.png"
                alt="maskgroup"
              />
              <Text
                className="leading-[25.00px] mb-2.5 text-base text-center text-gray-600_01 w-[90%] sm:w-full"
                size="txtPoppinsRegular16"
              >
                <>
                  Utilisez notre raccourcisseur d&#39;URL pour rendre vos liens
                  plus faciles à partager. Rassemblez gratuitement des
                  statistiques et des informations sur le trafic généré par vos
                  liens et impressionnez vos cibles avec des liens mémorables et
                  faciles à retenir.
                </>
              </Text>
            </div>     
          </div>
          <div className="flex flex gap-[19px] items-center content-center item-stretch justify-around w-full">
            <div className="md:h-[238px] h-[241px] relative w-1/2 md:w-full">
              <div className="absolute bg-orange-50 flex flex-col gap-[9px] h-full inset-[0] items-center justify-center m-auto p-5 rounded-[12px] w-full">
                <Text
                  className="mt-1.5 sm:text-[16.43px] md:text-[18.43px] text-[20.43px] text-orange-500"
                  size="txtPoppinsBold2043"
                >
                  Optimisation
                </Text>
                <Img
                  className="h-12 md:h-auto object-cover w-12"
                  src="images/img_maskgroup_49x48.png"
                  alt="maskgroup_One"
                />
              </div>
              <Text
                className="absolute bottom-[0] inset-x-[0] leading-[25.00px] mx-auto text-base text-center text-gray-600_01 w-[92%] sm:w-full"
                size="txtPoppinsRegular16"
              >
                Une solution pour optimiser l&#39;information face aux limites de caractères posées par certains canaux de communication. Notre plateforme vous aide à élargir l&#39;étendu de votre message et captiver votre cible par des liens simples et attractifs
              </Text>
            </div>
            <div className="mt-12 bg-orange-50 flex md:flex-1 flex-col items-center justify-center p-3 rounded-[12px] w-1/2 md:w-full">
              <Text
                className="mt-1.5 sm:text-[16.43px] md:text-[18.43px] text-[20.43px] text-orange-500"
                size="txtPoppinsBold2043"
              >
                Fiabilité
              </Text>
              <Img
                className="h-12 md:h-auto object-cover w-12"
                src="images/img_maskgroup_52x48.png"
                alt="maskgroup_Two"
              />
              <Text
                className="leading-[25.00px] mb-2 mt-1 text-base text-center text-gray-600_01 w-full"
                size="txtPoppinsRegular16"
              >
                Instaurez et Augmentez la fiabilité de vos liens lorsque ceux-ci sont longs et/ou incluent une série de variables ambigu. Lienfy est conçue pour vous aider à renforcer la sécurité de vos privilèges en générant des liens permanents depuis une source fiable.
              </Text>
            </div>
          </div>
        </div>
        </section>  
        <section>
          <div className="flex flex-col item-center justify-between bg-gray-200 p-7 sm:px-5 w-full "> 
            <div className="flex justify-center mt-5">
              <p className="text-3xl font-bold">Ce que disent nos visiteurs</p>
            </div>
            <div className="mt-5 flex flex-row justify-around space-x-8">
              <div className="mt-12 flex space-y-4 flex-col justify-center bg-white">
                <img src="images/img_ellipse1.png" alt="ellipseOne" className="h-[97px] inset-x-[0] mx-auto rounded-[50%] top-[0] w-[97px]" />
                <p ><span className="flex justify-center mt-5 font-bold ">Cody Fisher</span>  <br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore
                      <br />
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo con
                      <br />
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatu
                      <br />
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id es
                    </p>
              </div>
              <div className="flex space-y-4 flex-col justify-center bg-white">
                <img src="images/img_ellipse1.png" alt="ellipseOne" className="h-[97px] inset-x-[0] mx-auto rounded-[50%] top-[0] w-[97px]" />
                <p ><span className="flex justify-center mt-5 font-bold ">Cody Fisher</span>  <br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore
                      <br />
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo con
                      <br />
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatu
                      <br />
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id es
                    </p>
              </div>
              <div className="mt-12 flex space-y-4 flex-col justify-center bg-white">
                <img src="images/img_ellipse1.png" alt="ellipseOne" className="h-[97px] inset-x-[0] mx-auto rounded-[50%] top-[0] w-[97px]" />
                <p ><span className="flex justify-center mt-5 font-bold ">Cody Fisher</span>  <br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore
                      <br />
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo con
                      <br />
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatu
                      <br />
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id es
                    </p>
              </div>
            </div>
          </div>
        </section> 
        <section>
        <div className="bg-gray-50_01 flex flex-col gap-[37px] items-center justify-start p-[46px] md:px-10 sm:px-5 w-full">
          <Text
            className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center"
            size="txtPoppinsBold36"
          >
            FAQ
          </Text>
          <div className="flex flex-col gap-7 items-center justify-start max-w-[1230px] mb-[25px] mx-auto w-full">
            <div className="bg-white-A700 border border-gray-300_01 border-solid flex flex-col items-center justify-end p-[27px] sm:px-5 rounded-[14px] w-full">
              <Text
                className="leading-[17.00px] mt-0.5 md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
                size="txtPoppinsBold32"
              >
                <span className="md:text-[22px] sm:text-xl text-orange-500 font-poppins text-2xl font-medium leading-[normal]">
                  <>
                    1. Q : Pourquoi raccourcir un lien ?<br />R
                  </>
                </span>
                <span className="md:text-[22px] sm:text-xl text-gray-600 font-poppins text-2xl font-light leading-[normal]">
                  {" "}
                </span>
                <span className="md:text-[22px] sm:text-xl text-yellow-900 font-poppins text-2xl font-medium leading-[normal]">
                  :{" "}
                </span>
                <span className="md:text-[22px] sm:text-xl text-gray-600 font-poppins text-2xl font-light leading-[normal]">
                  <>
                    Les liens raccourcis sont plus esthétiques et prennent moins
                    de place. Ils sont souvent utilisés sur les plateformes de
                    médias sociaux où l&#39;espace est limité.
                  </>
                </span>
              </Text>
            </div>
            <div className="bg-white-A700 border border-gray-300_01 border-solid flex flex-col items-center justify-end p-[27px] sm:px-5 rounded-[14px] w-full">
              <Text
                className="leading-[17.00px] mt-0.5 md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
                size="txtPoppinsBold32"
              >
                <span className="md:text-[22px] sm:text-xl text-orange-500 font-poppins text-2xl font-medium leading-[normal]">
                  <>
                    2. Q : Quels sont les avantages de raccourcir un lien ?
                    <br />R
                  </>
                </span>
                <span className="md:text-[22px] sm:text-xl text-gray-600 font-poppins text-2xl font-light leading-[normal]">
                  {" "}
                </span>
                <span className="md:text-[22px] sm:text-xl text-yellow-900 font-poppins text-2xl font-medium leading-[normal]">
                  :
                </span>
                <span className="md:text-[22px] sm:text-xl text-gray-600 font-poppins text-2xl font-light leading-[normal]">
                  <>
                    {" "}
                    Amélioration de l&#39;esthétique des liens
                    <br />
                    Économie d&#39;espace sur les supports limités en caractères
                    <br />
                    Suivi des clics pour évaluer la popularité ou
                    l&#39;efficacité du lien
                  </>
                </span>
              </Text>
            </div>
            <div className="bg-white-A700 border border-gray-300_01 border-solid flex flex-col items-center justify-end p-[27px] sm:px-5 rounded-[14px] w-full">
              <Text
                className="leading-[17.00px] mt-0.5 md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
                size="txtPoppinsBold32"
              >
                <span className="md:text-[22px] sm:text-xl text-orange-500 font-poppins text-2xl font-medium leading-[normal]">
                  <>
                    3. Q : Est-ce sécuritaire d&#39;utiliser des liens
                    raccourcis ?Est-ce sécuritaire d&#39;utiliser des liens
                    raccourcis ?<br />R
                  </>
                </span>
                <span className="md:text-[22px] sm:text-xl text-gray-600 font-poppins text-2xl font-light leading-[normal]">
                  {" "}
                </span>
                <span className="md:text-[22px] sm:text-xl text-yellow-900 font-poppins text-2xl font-medium leading-[normal]">
                  :
                </span>
                <span className="md:text-[22px] sm:text-xl text-gray-600 font-poppins text-2xl font-light leading-[normal]">
                  {" "}
                  En général, oui. Cependant, soyez conscient que les liens
                  raccourcis peuvent masquer la destination réelle, ce qui
                  pourrait être exploité à des fins malveillantes. Utilisez des
                  services réputés pour minimiser les risques.
                </span>
              </Text>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col items-center justify-start p-2 shadow-bs w-full">
          <div className="flex items-center space-x-4">
            <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-full">
              <div className="flex flex-col gap-8 items-start justify-start mb-[3px] md:mt-0 mt-[55px]">
                <div className="flex flex-col items-center justify-start w-[568px] sm:w-full">
                  <div className="flex flex-col gap-3 items-start justify-start w-full">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                      size="txtPoppinsSemiBold32"
                    >
                      <>
                        Reduisez la longueur de vos liens <br />
                        d’un seul clic !
                      </>
                    </Text>
                    <Text
                      className="leading-[32.00px] max-w-[568px] md:max-w-full text-base text-gray-600"
                      size="txtPoppinsRegular16Gray600"
                    >
                      Raccourcissez vos url pour une expérience de partage plus
                      fluide et plus rapide
                    </Text>
                  </div>
                </div>
                <Button
                  className="cursor-pointer bg-orange-500 font-medium h-[66px] min-w-[280px] text-2xl md:text-[22px] text-center sm:text-xl"
                >
                  Raccourcir votre lien
                </Button>
              </div>
              <Img
                className="h-[348px] md:h-auto object-cover w-[348px]"
                src="images/img_link.png"
                alt="link"
              />
            </div>
          </div>
        </div>
        </section>    
      </>
  );
}

