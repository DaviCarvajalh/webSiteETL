import Image from "next/image";
import Container from "@/components/ui/Container";
import { clients } from "@/data/clients";

export default function Clients() {
  return (
    <section id="clientes" className="scroll-mt-24 border-t border-slate-100 bg-white py-16">
      <Container>
        <h2 className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">
          Nuestros clientes
        </h2>
        <ul className="mt-10 grid grid-cols-2 items-center gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {clients.map((client) => (
            <li key={client.name} className="flex items-center justify-center">
              <Image
                src={client.logo}
                alt={client.name}
                width={176}
                height={48}
                className="h-12 w-auto max-w-[176px] object-contain opacity-80 grayscale transition duration-200 hover:opacity-100 hover:grayscale-0"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
