import { useEffect } from "react";

function App() {

  useEffect(() => {
    document.title = "Swapnil | DevOps Engineer";
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-black text-white font-mono">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur border-b border-gray-800 flex justify-center gap-8 py-4 z-50">
        {["home","about","projects","skills","contact"].map((item) => (
          <button
            key={item}
            onClick={() => scrollTo(item)}
            className="text-gray-400 hover:text-green-400 transition"
          >
            {item.toUpperCase()}
          </button>
        ))}
      </nav>

      {/* HERO */}
      <section id="home" className="h-screen flex flex-col justify-center items-center text-center px-6">
        <p className="text-green-400 mb-4">$ whoami</p>

        <h1 className="text-5xl md:text-7xl font-bold text-green-400">
          Swapnil
        </h1>

        <h2 className="mt-4 text-2xl text-gray-300">
          DevOps & Cloud Engineer
        </h2>

        <div className="mt-8 flex gap-4">
          <button
            onClick={() => scrollTo("projects")}
            className="border border-green-400 px-6 py-2 rounded hover:bg-green-400 hover:text-black transition"
          >
            View Projects
          </button>

          <button
            onClick={() => scrollTo("contact")}
            className="bg-gray-800 px-6 py-2 rounded hover:bg-gray-700 transition"
          >
            Contact Me
          </button>
        </div>
      </section>

      {/* ABOUT (UPDATED DESCRIPTION) */}
      <section id="about" className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl text-gray-400 leading-relaxed space-y-4">

          <h2 className="text-3xl mb-6 text-green-400 text-center">About</h2>

          <p>
            I prefer learning by building and testing systems rather than just studying concepts.
          </p>

          <p>
            My focus is on understanding how real-world security works — from logs and network traffic to authentication systems and cloud environments.
          </p>

          <p>
            I recently built a SIEM-based log analysis setup using ELK Stack, where I analyzed authentication logs and identified brute-force attack patterns by tracking repeated failed login attempts from a single IP.
          </p>

          <p>
            Alongside this, I have worked on network traffic analysis using Wireshark, vulnerability assessment using Nmap and Metasploit, and web security testing based on OWASP Top 10 using Burp Suite.
          </p>

          <p>
            I have also explored cloud and network security concepts through programs from Palo Alto Networks, Deloitte, and Siemens.
          </p>

          <p>
            On the development side, I build backend logic and secure web systems, focusing on authentication flows, input validation, and detection logic.
          </p>

          <p>
            I am working towards roles in security monitoring, threat detection, and building secure systems in real-world environments.
          </p>

        </div>
      </section>

      {/* PROJECTS WITH GITHUB */}
      <section id="projects" className="h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl w-full">
          <h2 className="text-3xl mb-8 text-green-400 text-center">Projects</h2>

          <div className="grid md:grid-cols-2 gap-6">

            {/* PROJECT 1 */}
            <div className="p-6 border border-gray-800 rounded hover:border-green-400 transition">
              <h3 className="text-xl">AI Intergrated Job Portal</h3>
              <p className="text-gray-400 mt-2">
                Dockerized React portfolio deployed with Nginx.
              </p>

              <a
                href="https://github.com/bishnu9798/job-portal"
                target="_blank"
                className="inline-block mt-4 text-green-400 hover:underline"
              >
                GitHub →
              </a>
            </div>

            {/* PROJECT 2 */}
            <div className="p-6 border border-gray-800 rounded hover:border-green-400 transition">
              <h3 className="text-xl">Cybersecurity Lab</h3>
              <p className="text-gray-400 mt-2">
                Kali Linux-based penetration testing & vulnerability analysis.
              </p>

              <a
                href="https://github.com/swapnil105/siem-elk-threat-detection/tree/main/Desktop/Junkie/siem-elk-threat-detection"
                target="_blank"
                className="inline-block mt-4 text-green-400 hover:underline"
              >
                GitHub →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="h-screen flex items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl mb-8 text-green-400">Skills</h2>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Docker","Kubernetes","Linux","Git","GitHub",
              "Cybersecurity","Networking","Wireshark",
              "Nmap","Metasploit","Burp Suite","React"
            ].map((s) => (
              <span key={s} className="border border-gray-700 px-4 py-2 rounded hover:border-green-400 transition">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="h-screen flex items-center justify-center px-6">
  <div className="text-center space-y-4">

    <h2 className="text-3xl text-green-400">Contact</h2>

    <p className="text-gray-400">Let’s connect and build systems 🚀</p>

    {/* Email */}
    <a
      href="mailto:resoniteswapnil@gmail.com"
      className="block text-green-400 hover:underline"
    >
      resoniteswapnil@gmail.com
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/swapnil-68164b180/"
      target="_blank"
      className="block text-blue-400 hover:underline"
    >
      LinkedIn →
    </a>

    {/* GitHub */}
    <a
      href="https://github.com/swapnil105"
      target="_blank"
      className="block text-gray-400 hover:text-white transition"
    >
      GitHub →
    </a>

  </div>
</section>
    </div>
  );
}

export default App;