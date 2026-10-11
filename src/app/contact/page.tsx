import { Suspense } from "react";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { company, env } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { MapEmbed } from "@/components/MapEmbed";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Contactez BEST BUILDING IMMOBILIER (2BI SARL) à Abidjan : téléphone, email et formulaire pour demander une présentation du programme BEST BUILDING LUXURY ou un accompagnement.",
  path: "/contact",
});

const addressQuery = encodeURIComponent(`${company.address.street}, ${company.address.city}, Côte d’Ivoire`);

export default function ContactPage() {
  const whatsappHref = env.whatsapp
    ? `https://wa.me/${env.whatsapp}?text=${encodeURIComponent("Bonjour, je souhaite en savoir plus sur BEST BUILDING IMMOBILIER.")}`
    : null;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Parlons de votre projet."
        intro="Un conseiller de BEST BUILDING IMMOBILIER vous répond pour toute demande de présentation, d’information ou d’accompagnement."
        crumbs={[{ href: "/", label: "Accueil" }, { href: "/contact", label: "Contact" }]}
      />

      <section className="py-24 lg:py-32">
        <div className="wrap grid gap-16 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow">Coordonnées</p>
            <h2 className="display display-md mt-6">
              {company.name}
              <span className="mt-2 block text-[0.55em] italic text-ink-soft">{company.acronym}</span>
            </h2>

            <address className="mt-10 space-y-8 not-italic">
              <div className="flex gap-4">
                <MapPin className="mt-1 shrink-0 text-red" size={20} strokeWidth={1.5} aria-hidden="true" />
                <p>
                  {company.address.street}
                  <br />
                  {company.address.city}, {company.address.country}
                </p>
              </div>
              <div className="flex gap-4">
                <Phone className="mt-1 shrink-0 text-red" size={20} strokeWidth={1.5} aria-hidden="true" />
                <ul className="space-y-1">
                  {company.phones.map((p) => (
                    <li key={p.tel}>
                      <a href={`tel:${p.tel}`} className="hover:text-red hover:underline hover:underline-offset-4">
                        {p.display}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-4">
                <Mail className="mt-1 shrink-0 text-red" size={20} strokeWidth={1.5} aria-hidden="true" />
                <a href={`mailto:${company.email}`} className="break-all hover:text-red hover:underline hover:underline-offset-4">
                  {company.email}
                </a>
              </div>
            </address>

            {whatsappHref && (
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn-line mt-10">
                <MessageCircle size={16} strokeWidth={1.75} aria-hidden="true" />
                <span>Écrire sur WhatsApp</span>
              </a>
            )}
          </Reveal>

          <Reveal className="lg:col-span-7 lg:col-start-6" delay={0.1}>
            <p className="eyebrow">Formulaire</p>
            <h2 className="display display-md mt-6">Votre demande</h2>
            <p className="mt-4 text-sm text-ink-soft">Les champs marqués d’un astérisque (*) sont obligatoires.</p>
            <div className="mt-10">
              <Suspense fallback={<p className="text-ink-soft">Chargement du formulaire…</p>}>
                <ContactForm />
              </Suspense>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow">Siège social</p>
            <h2 className="display display-md mt-6">Nous rendre visite.</h2>
            <p className="mt-6 text-lg text-ink-soft">
              {company.address.street}, {company.address.city}.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-7 lg:col-start-6" delay={0.1}>
            {env.hq ? (
              <MapEmbed lat={env.hq.lat} lng={env.hq.lng} title="Carte du siège social de BEST BUILDING IMMOBILIER à Abidjan" note="Siège social — Riviera Palmeraie." />
            ) : (
              <div className="border border-navy/25 p-8 sm:p-10">
                <p className="display display-sm">Retrouvez-nous à la Riviera Palmeraie.</p>
                <p className="mt-4 text-ink-soft">
                  Pour faciliter votre venue, vous pouvez lancer une recherche de l’adresse dans votre application de cartographie.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={`https://www.openstreetmap.org/search?query=${addressQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-line"
                  >
                    Rechercher sur OpenStreetMap
                  </a>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${addressQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-line"
                  >
                    Rechercher sur Google Maps
                  </a>
                </div>
              </div>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
