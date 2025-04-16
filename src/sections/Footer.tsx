import logoImage from "@/assets/images/logo.svg";
import Image from "next/image";

const footerLinks = [
  { href: "#", label: "Contact" },
  { href: "#", label: "info@virza.tech" },
  { href: "#", label: "+977 9761780429" },
];

export default function Footer() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-6">
          <Image src={logoImage} alt="Virza Logo" />

          <nav className="flex gap-6">
            {footerLinks.map((link, index) => (
              <a
                href={link.href}
                className="text-white/50 text-sm hover:text-white "
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
