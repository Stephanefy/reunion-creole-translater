import Container from "@/components/container";
import HeroImage from "@/components/hero-image";
import { MainTitle } from "@/components/main-title";

export default function Histoire() {
    return <Container>
        <MainTitle>Histoire du créole réunionnais</MainTitle>
        <HeroImage src="/images/mixite-reunion.webp" alt="la réunion métissage" />
        <p className="text-justify text-sm md:text-base">
            Le créole réunionnais : une langue vivante et unique

            Le créole réunionnais, parlé par la majorité des habitants de La Réunion, est né au XVIIᵉ siècle du contact entre colons français et populations venues d&apos;Afrique, de Madagascar, d&apos;Inde et d&apos;Asie. Cette langue à base lexicale française s&apos;est enrichie d&apos;influences malgaches, africaines, indiennes, portugaises et chinoises, reflétant le métissage culturel de l&apos;île.

            Son vocabulaire, sa prononciation et sa grammaire en font une langue distincte : sons simplifiés, absence d&apos;accords en genre ou nombre, conjugaison marquée par des particules (té pour le passé, sa pour le futur), et expressions imagées comme mi aim a ou (&quot;je t&apos;aime&quot;).

            Longtemps relégué au rang de &quot;patois&quot; et écarté des institutions, le créole a gagné en reconnaissance depuis les années 1970. Inscrit comme langue régionale en 2014, il est aujourd&apos;hui un symbole identitaire fort, présent dans la musique (maloya, séga), la littérature, le théâtre et les médias.

            Pont entre générations et cultures, le créole réunionnais continue d&apos;évoluer, affirmant son rôle de patrimoine vivant et de marqueur de l&apos;identité réunionnaise. Nou lé fièr dann nout lang kréol.        </p>
    </Container>
}