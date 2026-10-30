
import { useState } from "react";

type Page = "Home" | "About" | "Features" | "Team" | "Contact" | "Login" | "Register";

const team = [
  ["Osakwe Daniel", "Team Lead"],
  ["Ladenegan Success", "Team Member"],
  ["Iledbare Daniel", "Team Member"],
  ["Ayinlade Matthew", "Team Member"],
  ["Olajuwon Gideon", "Team Member"],
  ["Agunbiade Samuel", "Team Member"],
  ["Sunday Bright", "Team Member"],
];

const features = [
  ["Student Records", "Keep student information organized and accessible to authorized school staff."],
  ["Digital Attendance", "Record daily attendance without relying on paper registers."],
  ["Teacher Management", "Organize teacher accounts and assigned classes."],
  ["HOD Review", "Give Heads of Department a separate space to review attendance."],
  ["Principal Dashboard", "Help principals view school attendance summaries."],
  ["Attendance Reports", "Prepare daily, weekly, and monthly attendance summaries."],
];

export default function App() {
  const [page, setPage] = useState<Page>("Home");

  const nav: Page[] = ["Home", "About", "Features", "Team", "Contact"];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-5 py-4 flex flex-wrap items-center justify-between gap-4">
          <button onClick={() => setPage("Home")} className="text-left">
            <span className="text-2xl font-extrabold text-blue-800">SchoolHub</span>
            <span className="text-2xl font-extrabold text-slate-700"> Lagos</span>
            <p className="text-xs text-slate-500">Smarter Schools. Brighter Futures.</p>
          </button>
          <nav className="flex flex-wrap gap-3 items-center">
            {nav.map((item) => (
              <button key={item} onClick={() => setPage(item)}
                className={`text-sm font-semibold ${page === item ? "text-blue-700" : "text-slate-600"}`}>
                {item}
              </button>
            ))}
            <button onClick={() => setPage("Login")}
              className="bg-blue-700 text-white px-4 py-2 rounded-lg">Login</button>
            <button onClick={() => setPage("Register")}
              className="border border-blue-700 text-blue-700 px-4 py-2 rounded-lg">Register School</button>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-5 py-12">
        {page === "Home" && (
          <section className="py-12 md:py-24">
            <p className="text-blue-700 font-bold mb-4">WELCOME TO SCHOOLHUB LAGOS</p>
            <h1 className="text-4xl md:text-6xl font-extrabold max-w-3xl leading-tight">
              Smarter school management starts here.
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mt-6">
              A digital school management platform designed to help schools
              organize student records, manage teachers and record attendance.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <button onClick={() => setPage("Register")}
                className="bg-blue-700 text-white px-6 py-3 rounded-lg font-bold">
                Get Started
              </button>
              <button onClick={() => setPage("About")}
                className="border border-slate-300 px-6 py-3 rounded-lg font-bold">
                Learn More
              </button>
            </div>
          </section>
        )}

        {page === "About" && (
          <section>
            <h1 className="text-4xl font-bold text-blue-800">About SchoolHub Lagos</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              SchoolHub Lagos is a digital school management platform created
              to help schools move from paper-based registers to organized
              digital records. Our mission is to make school administration
              simpler, improve attendance management and support better
              communication between schools and families.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-10">
              <article className="bg-white rounded-2xl p-7 shadow-sm">
                <h2 className="text-xl font-bold">Our Mission</h2>
                <p className="mt-3 text-slate-600">To make school records and attendance easier to manage.</p>
              </article>
              <article className="bg-white rounded-2xl p-7 shadow-sm">
                <h2 className="text-xl font-bold">Our Vision</h2>
                <p className="mt-3 text-slate-600">To support smarter, more organized schools across Nigeria.</p>
              </article>
            </div>
          </section>
        )}

        {page === "Features" && (
          <section>
            <h1 className="text-4xl font-bold text-blue-800">Platform Features</h1>
            <p className="mt-3 text-slate-600">Tools designed to support everyday school administration.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {features.map(([title, description]) => (
                <article key={title} className="bg-white rounded-2xl p-7 shadow-sm">
                  <h2 className="text-xl font-bold text-blue-800">{title}</h2>
                  <p className="mt-3 text-slate-600">{description}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {page === "Team" && (
          <section>
            <h1 className="text-4xl font-bold text-blue-800">Meet Our Team</h1>
            <p className="mt-3 text-slate-600">The people behind SchoolHub Lagos.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
              {team.map(([name, role]) => (
                <article key={name} className="bg-white rounded-xl p-6 shadow-sm">
                  <h2 className="font-bold text-lg">{name}</h2>
                  <p className="text-blue-700 mt-2">{role}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {page === "Contact" && (
          <section className="max-w-xl">
            <h1 className="text-4xl font-bold text-blue-800">Contact Us</h1>
            <p className="mt-3 text-slate-600">Send our team a message.</p>
            <form className="bg-white rounded-2xl p-6 shadow-sm mt-6 space-y-4"
              onSubmit={(event) => { event.preventDefault(); alert("Contact form backend is not connected yet."); }}>
              <input required placeholder="Your name" className="w-full border rounded-lg p-3" />
              <input required type="email" placeholder="Your email" className="w-full border rounded-lg p-3" />
              <input required placeholder="Subject" className="w-full border rounded-lg p-3" />
              <textarea required placeholder="Your message" rows={5} className="w-full border rounded-lg p-3" />
              <button className="bg-blue-700 text-white px-6 py-3 rounded-lg">Send Message</button>
            </form>
          </section>
        )}

        {page === "Login" && (
          <section className="max-w-md mx-auto">
            <h1 className="text-3xl font-bold text-blue-800">School Login</h1>
            <form className="bg-white rounded-2xl p-6 shadow-sm mt-6 space-y-4"
              onSubmit={(event) => { event.preventDefault(); alert("Authentication is not connected yet."); }}>
              <input required type="email" placeholder="Email address" className="w-full border rounded-lg p-3" />
              <input required type="password" placeholder="Password" className="w-full border rounded-lg p-3" />
              <button className="w-full bg-blue-700 text-white p-3 rounded-lg">Login</button>
            </form>
          </section>
        )}

        {page === "Register" && (
          <section className="max-w-xl mx-auto">
            <h1 className="text-3xl font-bold text-blue-800">Register Your School</h1>
            <p className="mt-3 text-slate-600">Submit your school's details for approval.</p>
            <form className="bg-white rounded-2xl p-6 shadow-sm mt-6 space-y-4"
              onSubmit={(event) => { event.preventDefault(); alert("School registration backend is not connected yet."); }}>
              <input required placeholder="School name" className="w-full border rounded-lg p-3" />
              <input required type="email" placeholder="School email" className="w-full border rounded-lg p-3" />
              <input required type="tel" placeholder="School phone number" className="w-full border rounded-lg p-3" />
              <input required placeholder="School address" className="w-full border rounded-lg p-3" />
              <input required placeholder="Administrator name" className="w-full border rounded-lg p-3" />
              <input required type="email" placeholder="Administrator email" className="w-full border rounded-lg p-3" />
              <input required type="password" placeholder="Create password" className="w-full border rounded-lg p-3" />
              <button className="w-full bg-blue-700 text-white p-3 rounded-lg">Submit Registration</button>
            </form>
          </section>
        )}
      </main>

      <footer className="bg-slate-900 text-white mt-12">
        <div className="max-w-7xl mx-auto px-5 py-10">
          <h2 className="text-2xl font-bold">SchoolHub Lagos</h2>
          <p className="mt-2 text-slate-300">Smarter Schools. Brighter Futures.</p>
          <p className="mt-5 text-sm text-slate-400">Developed by the SchoolHub Lagos Team</p>
          <p className="text-sm text-slate-400">Tech Up Boys</p>
        </div>
      </footer>
    </div>
  );
}
