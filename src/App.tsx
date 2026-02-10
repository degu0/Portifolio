import React, {
  useState,
  useEffect,
  type ChangeEvent,
  type FormEvent,
} from "react";

import github from "../public/logo/bxl-github.svg.svg";
import linkedin from "../public/logo/bxl-linkedin.svg.svg";
import meHome from "../public/Me_2.png";
import meAbout from "../public/Me.jpeg";
import code from "../public/modular-coding.png";
import machine from "../public/machine-learning.png";
import { projects, skills } from "./data/data";
import { Skill } from "./components/Skill";
import { ProjectCarousel } from "./components/ProjectCarousel";
import { Menu, X } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const App: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');

      if (anchor) {
        e.preventDefault();
        const href = anchor.getAttribute("href");

        if (href && href !== "#") {
          const targetElement = document.querySelector(href);

          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });

            window.history.pushState(null, "", href);
          }
        }
      }
    };

    document.addEventListener("click", handleSmoothScroll);

    return () => {
      document.removeEventListener("click", handleSmoothScroll);
    };
  }, []);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form data:", formData);

    alert("Mensagem enviada! (simulação)");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <div id="mode" className="min-h-screen bg-zinc-950">
      <nav className="mx-auto max-w-7xl flex items-center justify-between gap-4 px-4 py-6 sm:px-6 lg:px-8">
        <div>
          <a
            href="#"
            className="text-white text-xl sm:text-2xl font-light no-underline"
          >
            Deyvid Gustavo
          </a>
        </div>

        <ul className="hidden md:flex items-center gap-1 list-none">
          {[
            { id: "home", label: "Home" },
            { id: "about", label: "Sobre mim" },
            { id: "skills", label: "Skills" },
            { id: "projects", label: "Projetos" },
            { id: "contact", label: "Contato" },
          ].map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.id}`}
                className="px-3 py-2 text-sm uppercase text-white transition-colors hover:text-green-500"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2 hover:bg-zinc-800 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {menuOpen && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}

        <div
          className={`
        fixed top-0 right-0 h-full w-64 bg-zinc-900 z-50 
        transform transition-transform duration-300 ease-in-out
        md:hidden
        ${menuOpen ? "translate-x-0" : "translate-x-full"}
      `}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white p-2 hover:bg-zinc-800 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <ul className="flex flex-col gap-2 px-4">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "Sobre mim" },
              { id: "skills", label: "Skills" },
              { id: "projects", label: "Projetos" },
              { id: "contact", label: "Contato" },
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.id}`}
                  onClick={handleLinkClick}
                  className="block px-4 py-3 text-base uppercase text-white transition-colors hover:text-green-500 hover:bg-zinc-800 rounded-lg"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section className="min-h-screen flex flex-col-reverse items-center justify-center gap-8 px-4 py-12 sm:px-6 lg:flex-row lg:px-8 max-w-7xl mx-auto">
        <div className="w-full text-center lg:w-1/2 lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white font-semibold uppercase mb-2">
            Olá, eu sou
          </h1>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white font-semibold uppercase mb-6">
            Deyvid Gustavo
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-white font-light mb-8 max-w-xl mx-auto lg:mx-0">
            Bem-vindo ao meu portfólio! Sou Deyvid, um desenvolvedor apaixonado
            por criar soluções inovadoras e funcionais. Explore meu portfólio
            para ver alguns dos projetos que desenvolvi!
          </p>

          <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start">
            <a href="#contact">
              <button className="bg-green-500 flex items-center justify-center gap-3 text-zinc-950 border-0 rounded-full py-3 px-6 cursor-pointer transition hover:bg-green-600">
                <span className="text-sm sm:text-base">ME CONTATE</span>
                <div className="bg-zinc-950 w-2 h-2 rounded-full"></div>
              </button>
            </a>

            <a
              href="https://www.linkedin.com/in/deyvid-gustavo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-zinc-800 border-0 rounded-full p-2.5 cursor-pointer hover:bg-zinc-700 transition">
                <img src={linkedin} alt="Logo LinkedIn" className="w-6 h-6" />
              </button>
            </a>

            <a
              href="https://github.com/degu0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-zinc-800 border-0 rounded-full p-2.5 cursor-pointer hover:bg-zinc-700 transition">
                <img src={github} alt="Logo GitHub" className="w-6 h-6" />
              </button>
            </a>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={meHome}
            alt="Me em pic"
            className="h-64 sm:h-80 md:h-96 lg:h-[425px]
               rounded-lg object-cover relative z-10"
          />
        </div>
      </section>

      <section
        id="about"
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white mb-4">
            Sobre mim
          </h2>
          <h3 className="text-base sm:text-lg text-white font-normal">
            Transformando café em código desde 2023.
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="w-full lg:w-1/2 flex justify-center relative">
            <img
              src={code}
              alt="Code"
              className="animate-float absolute -top-10 -right-10 sm:-right-16 lg:-right-1
               h-24 sm:h-28 md:h-32 w-24 sm:w-28 md:w-32
               rounded-lg object-cover z-20 shadow-xl
               animate-float"
            />

            <img
              src={meAbout}
              alt="Me em pic"
              className="h-64 sm:h-80 md:h-96 lg:h-[425px]
               rounded-lg object-cover relative z-10"
            />

            <img
              src={machine}
              alt="Machine"
              className="animate-float absolute bottom-0 left-10 sm:-right-16 lg:left-1
               h-24 sm:h-28 md:h-32 w-24 sm:w-28 md:w-32
               rounded-lg object-cover z-20 shadow-xl
               animate-floatSlow"
            />
          </div>

          <div className="w-full lg:w-1/2 text-white">
            <h3 className="text-xl sm:text-2xl lg:text-3xl mb-4">
              Engenheiro de software
            </h3>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
              Desenvolvedor full-stack com experiência comprovada em projetos
              que variam de sistemas de pagamento digital a plataformas de
              gestão pública. Comecei minha jornada na programação movido pela
              curiosidade de entender como as coisas funcionam, e hoje crio
              soluções que vão desde APIs robustas até aplicativos mobile
              intuitivos. Quando não estou codando, você me encontra estudando
              novas tecnologias ou contribuindo com a comunidade dev.
            </p>
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center text-white mb-12">
          Skills
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <Skill
              key={index}
              src={skill.src}
              alt={skill.alt}
              name={skill.alt}
              shadowColor={skill.shadowColor}
            />
          ))}
        </div>
      </section>

      <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center text-white mb-12">
          Projetos
        </h2>
        <div className="max-w-7xl mx-auto">
          <ProjectCarousel projects={projects} />
        </div>
      </section>

      <section
        id="contact"
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="w-full lg:w-1/3 flex flex-col gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white mb-4">
                Contato
              </h2>
              <p className="text-sm sm:text-base text-zinc-300 mb-6">
                Pronto para tirar sua ideia do papel?
                <br />
                Entre em contato através do{" "}
                <span className="font-bold underline decoration-green-500">
                  yatog2013@gmail.com
                </span>
                <br />
                Vamos construir algo incrível juntos!
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/deyvid-gustavo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition"
                >
                  <img src={linkedin} alt="Logo LinkedIn" className="w-8 h-8" />
                </a>

                <a
                  href="https://github.com/degu0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition"
                >
                  <img src={github} alt="Logo GitHub" className="w-8 h-8" />
                </a>
              </div>
            </div>

            <p className="text-sm text-white mt-auto">© 2026 Deyvid Gustavo</p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-full lg:w-2/3 flex flex-col gap-4"
          >
            {[
              { id: "name", label: "Nome", type: "text" },
              { id: "email", label: "Email", type: "email" },
              { id: "subject", label: "Título", type: "text" },
            ].map((field) => (
              <div key={field.id} className="flex flex-col gap-2">
                <label className="text-sm text-zinc-300">{field.label}</label>
                <input
                  type={field.type}
                  name={field.id}
                  value={formData[field.id as keyof FormData]}
                  onChange={handleInputChange}
                  className="bg-zinc-700 text-white px-4 py-3 rounded-lg text-sm sm:text-base outline-none focus:ring-2 focus:ring-green-500 transition"
                  required
                />
              </div>
            ))}

            <div className="flex flex-col gap-2">
              <label className="text-sm text-zinc-300">Mensagem</label>
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                className="bg-zinc-700 text-white px-4 py-3 rounded-lg text-sm sm:text-base outline-none resize-none focus:ring-2 focus:ring-green-500 transition"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-4 self-start bg-green-500 text-zinc-950 uppercase font-medium rounded-full px-8 py-3 text-sm sm:text-base transition-all duration-300 hover:bg-green-600 hover:-translate-y-1 hover:shadow-lg"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default App;
