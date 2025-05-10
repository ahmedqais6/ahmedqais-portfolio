import React from "react";

export default function App() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      <header className="p-6 border-b shadow-sm flex justify-between items-center">
        <h1 className="text-2xl font-bold">Ahmed Qais</h1>
        <nav className="space-x-4">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#experience" className="hover:text-blue-600">Experience</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
      </header>

      <section className="text-center py-20 bg-gray-50">
        <img src="/ahmed-photo.jpeg" alt="Ahmed Qais" className="w-32 h-32 mx-auto rounded-full shadow-lg mb-6" />
        <h2 className="text-4xl font-semibold mb-4">Hi, I'm Ahmed 👋</h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Co-Founder & CTO at Orderii LLC and CEO at OTECH LLC — I build scalable tech for e-commerce,
          fintech, and logistics in Iraq.
        </p>
      </section>

      <section id="about" className="px-6 py-16 bg-white">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">About Me</h3>
          <p className="text-gray-700 leading-relaxed">
            I'm a tech entrepreneur and engineer based in Baghdad, Iraq. I specialize in designing and scaling
            apps across logistics, finance, and government sectors. I lead teams at Orderii and OTECH to deliver
            innovative mobile and backend systems.
          </p>
        </div>
      </section>

      <section id="experience" className="px-6 py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">Experience</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-6 border rounded-xl shadow-sm bg-white">
              <img src="/logos/orderii.png" alt="Orderii Logo" className="w-10 h-10 mb-3" />
              <h4 className="font-semibold text-lg">Orderii LLC</h4>
              <p className="text-sm text-gray-600">Co-Founder & CTO. Logistics & e-commerce platform enabling Iraqis to shop globally.</p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm bg-white">
              <img src="/logos/otech.png" alt="OTECH Logo" className="w-10 h-10 mb-3" />
              <h4 className="font-semibold text-lg">OTECH LLC</h4>
              <p className="text-sm text-gray-600">Co-Founder & CEO. Software development firm building apps for education, transport, and government.</p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm bg-white">
              <img src="/logos/masrafna.png" alt="Masrafna Logo" className="w-10 h-10 mb-3" />
              <h4 className="font-semibold text-lg">IPBL - Masrafna</h4>
              <p className="text-sm text-gray-600">Lead technical partner for the Masrafna financial education app, built for IPBL with GIZ support.</p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm bg-white">
              <img src="/logos/giz.jpg" alt="GIZ Logo" className="w-10 h-10 mb-3" />
              <h4 className="font-semibold text-lg">Consultant - GIZ Iraq</h4>
              <p className="text-sm text-gray-600">Providing fintech consulting and digital product development for the Strengthening Public Finance and Financial Markets (FFM) program.</p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm bg-white">
              <img src="/logos/raiya.jpeg" alt="Al Raiya Group Logo" className="w-10 h-10 mb-3" />
              <h4 className="font-semibold text-lg">Al Raiya Group</h4>
              <p className="text-sm text-gray-600">Senior Software Engineer leading development of systems like Iraq Ports, Central Connection, Raiya Garages, and Ticket System.</p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm bg-white">
              <img src="/logos/pegasus_cargo_iraq.jpeg" alt="Pegasus Cargo Iraq Logo" className="w-10 h-10 mb-3" />
              <h4 className="font-semibold text-lg">Pegasus Cargo Iraq</h4>
              <p className="text-sm text-gray-600">Led the development of a web-based import/export cargo system as Senior Software Engineer.</p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm bg-white">
              <img src="/logos/eucalyptus_iq.jpeg" alt="Eucalyptus Logo" className="w-10 h-10 mb-3" />
              <h4 className="font-semibold text-lg">Eucalyptus IQ</h4>
              <p className="text-sm text-gray-600">Head of Mobile Development for SACHACH, a school app designed for the Iraqi education sector.</p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm bg-white">
              <img src="/logos/urits.jpeg" alt="uRits Logo" className="w-10 h-10 mb-3" />
              <h4 className="font-semibold text-lg">uRiTS</h4>
              <p className="text-sm text-gray-600">Trained SCRATCH language for over 700 iraqi student on behalf of SAP and INJAZ ALARAB.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-16 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
          <p className="text-gray-700 mb-4">Email me at <a href="mailto:ahmed@orderii.co" className="text-blue-600 underline">ahmed@orderii.co</a></p>
          <div className="space-x-4">
            <a href="https://www.linkedin.com/in/ahmedqais6/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">LinkedIn</a>
            <a href="https://github.com/ahmedqais6" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">GitHub</a>
          </div>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500 py-6 border-t">
        &copy; {new Date().getFullYear()} Ahmed Qais. All rights reserved.
      </footer>
    </main>
  );
}
