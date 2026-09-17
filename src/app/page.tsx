"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import TextType from "@/components/TextType";
import ShinyText from "@/components/ShinyText";
import BorderGlow from "@/components/BorderGlow";

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

  // Shared green border-glow config for the project cards (matches the site's green accent).
  const projectGlow = {
    className: "project-glow",
    glowColor: "142 70 50",
    colors: ["#86efac", "#22c55e", "#166534"],
    backgroundColor: "var(--glow-card-bg)",
    borderRadius: 18,
    glowRadius: 30,
    edgeSensitivity: 35,
    coneSpread: 25,
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
          <div className="hero-subtitle">
            Boston University |{" "}
            <TextType
              as="span"
              text={["AI Researcher", "Software Engineer", "Data Scientist", "Business Analyst"]}
              typingSpeed={75}
              pauseDuration={1500}
              deletingSpeed={40}
              showCursor={true}
              cursorCharacter="|"
            />
          </div>

          <h1 className="hero-title">
            <ShinyText text="Evan" color="var(--shiny-base)" shineColor="var(--shiny-shine)" speed={3} />
            <br />
            <ShinyText text="Leong" color="var(--shiny-base)" shineColor="var(--shiny-shine)" speed={3} delay={0.4} />
          </h1>

          <div className="hero-text-and-icons">
            <p className="hero-description">
              A student at Boston University exploring AI, machine learning,
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

              <ul className="experience-description">
                <li>
                  Developing PaperBuddy, an AI chatbot and interface that guides
                  students through a more structured, critical pre-reading process
                  for their classes. PaperBuddy intends to replace passive summarization
                   with active, intentional reading and critical thinking.
                </li>
                <li>
                  I designed the experience through prompt engineering to prevent students from outright summarizing a paper,
                  teach themselves through counterfactual questions, and guide them through the reading process in a more structured manner.
                </li>
                <li>
                  Currently building the user interface and backend for PaperBuddy using Python, React, and Django, and I
                  added an analytics dashboard to track student engagement, LLM performance, and reading progress.
                  Worked on quality of life features such as the ability for both the LLM and student to properly highlight on a PDF 
                  and RAG pipelines for PaperBuddy to use for better responses.
                </li>
                <li>
                  Engineered CI/CD pipelines using Github Actions, Playwright, and Docker to automate testing and deployment. 
                  PaperBuddy is on track to be deployed in a graduate privacy and security course at BU by Fall 2026.
                </li>
              </ul>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-logo">
              <img src="/ngx.png" alt="NGX Ventures" />
            </div>

            <div className="experience-content">
              <h3 className="experience-heading">
                Backend Software Engineer |
                <span className="experience-company">NGX Ventures</span>
              </h3>

              <p className="experience-date">February 2026 – June 2026</p>

              <ul className="experience-description">
                <li>
                  Constructed a real-time dynamic pricing engine using Node.js and
                  TypeScript that computes dataset prices from 10 weighted signals,
                  fed by 15 background workers ingesting external feeds (SEC EDGAR,
                  NOAA, GDELT).
                </li>
                <li>
                  Integrated an LLM judge to classify events into impact scores,
                  triggering repricing when multiple feeds agree. 
                  Engineered the payments and access-control layer, integrating Stripe Connect marketplace settlement
                   (88/12 standard, 85/15 surge revenue splits) and scoped 
                   expiring API-key authentication for secure transactions.
                </li>
              </ul>
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

              <ul className="experience-description">
                <li>
                  Conducted ML benchmarking tests for the QWEN and Med Gemma LLMs
                  to select the base model for SkinGPT mini, a faster and more
                  efficient version of Quantum Aesthetics&apos; SkinGPT.
                </li>
                <li>
                  Used Python, Pydantic AI, Pillow, and the OpenAI API with fine
                  tuning and prompt engineering to run the evaluations.
                </li>
                <li>
                  Compared the two LLMs on image classification, visual question
                  answering, bounding boxes, and hallucination rates.
                </li>
              </ul>
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

              <ul className="experience-description">
                <li>
                  Supported club operations by coordinating meetings and events,
                  drafting sponsorship emails and marketing designs, and handling
                  logistics for a 50-participant robotics hackathon.
                </li>
                <li>
                  Planned and co-developed a 45-participant Nerf Gun hackathon,
                  contributing to idea formation, funding proposals, documentation,
                  bill of materials, and outreach to launch the event at scale.
                </li>
                <li>
                  As Vice President, I coordinate events and operations while taking
                  on a larger project management role as the eboard prepares for a
                  40-participant cybersecurity hackathon.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <h2 className="projects-section-title">Projects</h2>

       
        <div className="projects-grid">
          <BorderGlow {...projectGlow}>
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
          </BorderGlow>

          <BorderGlow {...projectGlow}>
          <a
            href="https://github.com/EvanLeongDS/ML-for-Business-Analytics-Project"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <img
              src="/fantasy-football.png"
              alt="ML Fantasy Football Projections"
              className="project-image"
            />

            <div className="project-body">
              <h3 className="project-title">
                ML Fantasy Football Projections
              </h3>

              <p className="project-description">
                For a semester-long project in Boston University's Business
                Analytics course (BA 576), I conducted exploratory data analysis
                on weekly NFL player data and built three iterations of random
                forests, along with ridge regressions, XGBoost, and LightGBM
                models, to find which historical features best predict a
                player's fantasy points going forward. I validated each model
                with K-fold cross validation and hyperparameter tuning, then
                trained a 50-epoch neural network in PyTorch on the strongest
                features. Total yards, total touchdowns, and their rolling
                averages carried most of the predictive signal, and the final
                six-feature model reached a 0.92 test R-squared with almost no
                overfitting gap.
              </p>

              <div className="project-tags">
                <span className="project-tag">Python</span>
                <span className="project-tag">Machine Learning</span>
                <span className="project-tag">PyTorch</span>
                <span className="project-tag">scikit-learn</span>
                <span className="project-tag">XGBoost</span>
                <span className="project-tag">LightGBM</span>
                <span className="project-tag">pandas</span>
                <span className="project-tag">Feature Engineering</span>
              </div>
            </div>
          </a>
          </BorderGlow>

          <BorderGlow {...projectGlow}>
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
          </BorderGlow>

          <BorderGlow {...projectGlow}>
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
          </BorderGlow>
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