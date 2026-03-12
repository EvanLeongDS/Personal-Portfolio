import Link from "next/link";

export default function SkillsPage() {
  return (
    <main className="min-h-screen theme-bg">
      <nav className="navbar">
        <Link href="/" className="logo">
          Evan Leong
        </Link>
        <div className="nav-links">
          <Link href="/#about">About</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/coursework">Coursework</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/documents">Resume / Transcript</Link>
          <Link href="/#contact">Contact</Link>
        </div>
      </nav>

      <div className="section" style={{ paddingTop: "140px" }}>
        <Link href="/" className="section-text block mb-8 hover:opacity-100 transition-colors">
          ← Back to home
        </Link>
        <h1 className="section-title">Skills</h1>

        <div className="coursework-block">
          <h2 className="subsection-title">Programming Languages</h2>
          <div className="skills-grid">
            {[
              "Python",
              "PySpark",
              "SQL",
              "Flask",
              "Rust",
              "Bash",
              "Git",
              "NoSQL",
              "R",
              "React",
              "TypeScript",
              "HTML",
              "Tailwind CSS",
              "FastAPI",
              "C"
            ].map((skill) => (
              <span key={skill} className="skill-chip">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="coursework-block">
          <h2 className="subsection-title">Python Libraries</h2>
          <div className="skills-grid">
            {[
              "PydanticAI",
              "PyTorch",
              "Scikit Learn",
              "Pillow (PIL)",
              "Numpy",
              "Pandas",
              "Seaborn",
              "Matplotlib",
              "MapReduce",
              "Spark",
              "PySpark",
              "OpenAI API",
              "Librosa",
            ].map((skill) => (
              <span key={skill} className="skill-chip">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="coursework-block">
          <h2 className="subsection-title">Tools &amp; Skills</h2>
          <div className="skills-grid">
            {[
              "GitHub",
              "Poetry",
              "Docker",
              "Next.js",
              "PostgreSQL",
              "MongoDB",
              "Agile",
              "LM Studio",
              "Ollama",
              "Excel",
              "PowerPoint",
              "Google Drive",
              "Notion",
              "Jupyter",
              "Google Colab",
            ].map((skill) => (
              <span key={skill} className="skill-chip">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
