import Container from "@/components/container";
import HeroImage from "@/components/hero-image";
import { MainTitle } from "@/components/main-title";
import { TranslationGroup } from "@/components/translation-group";


export default function Home() {
  return (
    <Container>
      <div className="w-full mx-auto">
        <MainTitle>« Nou lé fièr nout lang kréol »</MainTitle>
        <HeroImage src="/images/hero-image-tradmwin.webp" alt="la réunion métissage" imageText="Le créole réunionnais, né du métissage unique de La Réunion, est bien plus qu&apos;une langue : c&apos;est une mémoire vivante, un lien entre générations et cultures." />
        <div className="flex flex-col gap-4 text-slate-600 my-4">
          <p className="text-sm md:text-2xl text-justify">
            Traduisez instantanément d&apos;une langue vers le créole réunionnais. Que vous soyez curieux, apprenant, professionnel ou amoureux de l&apos;île, découvrez la richesse de ses expressions et préservez ce patrimoine linguistique.
          </p>
        </div>
      </div>
      <div className="w-full max-screen-sm md:max-w-screen-lg">
        <TranslationGroup />
      </div>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </Container>
  );
}
