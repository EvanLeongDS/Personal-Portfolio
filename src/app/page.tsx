"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

type SplineApp = {
  setBackgroundColor: (color: string) => void;
};

export default function Home() {
  const splineRef = useRef<SplineApp | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const updateSplineBackground = () => {
    if (!splineRef.current) return;
    const theme = document.documentElement.getAttribute("data-theme");
    splineRef.current.setBackgroundColor(theme === "light" ? "#f8fafc" : "#000000");
  };

  useEffect(() => {
    const observer = new MutationObserver(updateSplineBackground);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  const onSplineLoad = (spline: SplineApp) => {
    splineRef.current = spline;
    updateSplineBackground();
  };

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="theme-bg overflow-x-hidden">
      <nav className="navbar">
        <Link href="/" className="logo" onClick={() => setMenuOpen(false)}>
          Evan Leong
        </Link>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <button onClick={() => scrollToSection("about")}>About</button>
          <button onClick={() => scrollToSection("experience")}>Experience</button>
          <button onClick={() => scrollToSection("projects")}>Projects</button>
          <Link href="/coursework" onClick={() => setMenuOpen(false)}>
            Coursework
          </Link>
          <Link href="/skills" onClick={() => setMenuOpen(false)}>
            Skills
          </Link>
          <a
            href="https://leongevan.vercel.app/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            Resume
          </a>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <p className="hero-subtitle">
            Boston University | AI/ML &amp; Software Engineer
          </p>

          <h1 className="hero-title">
            Evan <br /> Leong
          </h1>

          <div className="hero-text-and-icons">
            <p className="hero-description">
              A sophomore at Boston University exploring AI, machine learning,
              and backend systems.
            </p>

            <div className="hero-social-icons">
              <a
                href="https://github.com/EvanLeongDS"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-circle"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/evansleong/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-square"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="spline-wrapper">
          <div className="spline-bg" />
          <div className="spline-container">
            <Spline
              scene="https://prod.spline.design/PxDyhxEehSwcCuDd/scene.splinecode"
              onLoad={onSplineLoad}
            />
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <h2 className="about-title">About Me</h2>

        <div className="about-text">
          <p className="about-paragraph">
            Hi there! I&apos;m Evan. Right now, I&apos;m a student at Boston University
            studying data science and business with a passion for exploring the
            cutting edge of technology and what we can do with it. I&apos;m especially
            interested in AI, machine learning, business analytics, and backend
            software development.
          </p>
          <p className="about-paragraph">
            When I&apos;m not coding, you can find me playing chess, basketball,
            violin, exploring the outdoors, and rooting for the Golden State
            Warriors. I&apos;m always looking to learn new things and connect with
            new people. Feel free to contact me!
          </p>
        </div>
      </section>

      <section id="experience" className="section">
        <h2 className="experience-title">Experience</h2>

        <div className="experience-list">
          <div className="experience-item">
            <div className="experience-logo">
              <img src="/spacelab.png" alt="Space Lab" />
            </div>

            <div className="experience-content">
              <h3 className="experience-heading">
                Machine Learning and AI Researcher |
                <span className="experience-company">
                  SPACE Lab – Faculty of Computing and Data Sciences
                </span>
              </h3>

              <p className="experience-date">January 2026 – Present</p>

              <p className="experience-description">
                Working to develop PaperBuddy, an AI chatbot and user interface
                to help students go through a more structured pre-reading process
                for classes in a more meticulous and critical manner. The overall
                goal of PaperBuddy is to allow students to develop a deeper
                understanding of readings for themselves while still having the
                ability to utilize AI. I am currently testing different LLM
                models and fine tuning them with prompt engineering to improve
                the responses from the AI.
              </p>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-logo">
              <img src="/quantum.png" alt="Quantum Aesthetics" />
            </div>

            <div className="experience-content">
              <h3 className="experience-heading">
                Software Engineering Intern |
                <span className="experience-company">Quantum Aesthetics</span>
              </h3>

              <p className="experience-date">June 2025 – Aug 2025</p>

              <p className="experience-description">
                Conducted ML benchmarking tests for QWEN and Med Gemma LLMs to
                determine base model for SkinGPT mini, a faster and more
                efficient version of Quantum Aesthetics&apos; SkinGPT. Utilized
                Python, Pydantic AI, Pillow, and OpenAI API along with fine
                tuning and prompt engineering to test the two LLMS on image
                classification, visual questioning answering, bounding boxes, and
                hallucination rates.
              </p>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-logo">
              <img src="/hackhardware.jpg" alt="HackHardware Club" />
            </div>

            <div className="experience-content">
              <h3 className="experience-heading">
                Vice President |
                <span className="experience-company">BU HackHardware Club</span>
              </h3>

              <p className="experience-date">March 2025 – Present</p>

              <p className="experience-description">
                This past year, I supported club operations by helping coordinate
                meetings and events, drafting external sponsorship emails and
                marketing designs, and contributing to logistics for a robotics
                hackathon of 50 participants. I also planned and co-developed a
                45 participant Nerf Gun hackathon, contributing to idea
                formation, funding proposals, documentation, bill of materials,
                and outreach to enable the event’s launch at scale. Next
                year, as VP of the club, I will continue to be
                responsible for coordinating events and operations while
                taking on a bigger project management role for the club. 
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <h2 className="projects-section-title">Projects</h2>

       
        <div className="projects-grid">
          <a
            href="https://connect-nil.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <img
              src="/connect-nil.png"
              alt="ConnectNIL"
              className="project-image"
            />

            <div className="project-body">
              <h3 className="project-title">ConnectNIL</h3>

              <p className="project-description">
                Born from Boston University's Entrepeneurship Course (SI 344), ConnectNIL brings together teams and brands that want to create a mutual win-win deal. 
                The problem with the NIL market is that it is easy for big teams and brands with billions of dollars to come to deal. It's much harder for smaller teams and brands to work through a deal. ConnectNIL solves this problem. 
                ConnectNIL handles all the complicated logisitics such as user and roster management, contract creation, deliverable tracking, and partnership creation. 
                All the user has to do is find a team or a brand, and strike up a conversation. ConnectNIL handles the rest.
              </p>

              <div className="project-tags">
                <span className="project-tag">TypeScript</span>
                <span className="project-tag">React</span>
                <span className="project-tag">Next.js</span>
                <span className="project-tag">Tailwind CSS</span>
                <span className="project-tag">Supabase</span>
                <span className="project-tag">Stripe</span>
                <span className="project-tag">SQL</span>
                <span className="project-tag">APIs</span>
                <span className="project-tag">CI/CD</span>
              </div>
            </div>
          </a>

          <a
            href="https://devpost.com/software/deaftones"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <img
              src="/deaftones.png"
              alt="DeafTones"
              className="project-image"
            />

            <div className="project-body">
              <h3 className="project-title">DeafTones</h3>

              <p className="project-description">
                DeafTones is a project that uses machine learning to convert
                audio to a visual image and bar chart of emotions for the Deaf
                and Hard of Hearing community. People can upload audio files and
                the project will algorithmically analyze the emotions of the
                audio based on metrics like speed, key, and volume and output
                emotions and images representative of the current audio segment.
              </p>

              <div className="project-tags">
                <span className="project-tag">Machine Learning</span>
                <span className="project-tag">Python</span>
                <span className="project-tag">Next.js</span>
                <span className="project-tag">Tailwind CSS</span>
                <span className="project-tag">OpenAI API</span>
                <span className="project-tag">Librosa</span>
              </div>
            </div>
          </a>

          <a
            href="https://github.com/EvanLeongDS/DS210-Final-Project-"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <img
              src="/twitter.jpg"
              alt="Twitter Analysis"
              className="project-image"
            />

            <div className="project-body">
              <h3 className="project-title">Twitter Discovery Graph Analysis</h3>

              <p className="project-description">
                I analyzed a 450,000-node graph about the Twitter social
                dynamics of the Higgs Boson discovery to see who found out about
                the discovery first and last, the user with the most tweets, and
                the average number of outgoing edges for each layer.
              </p>

              <div className="project-tags">
                <span className="project-tag">Rust</span>
                <span className="project-tag">Breadth-First Search</span>
                <span className="project-tag">Algorithms</span>
              </div>
            </div>
          </a>
        </div>
      </section>

      <section id="contact" className="section center">
        <div className="contact-content">
          <h2 className="contact-title">Contact</h2>

          <p className="contact-subheading">
            If you are interested in working together or just want to reach out,
            feel free to contact me!
          </p>

          <div className="contact-buttons-wrapper">
            <div className="hero-buttons">
              <a href="mailto:leonge1@bu.edu" className="contact-button">
                Email
              </a>

              <a
                href="https://github.com/EvanLeongDS"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-button"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/evansleong/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-button"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}