import Link from "next/link";

export default function CourseworkPage() {
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
        <h1 className="section-title">Coursework</h1>

        <div className="coursework-block">
          <h2 className="subsection-title">Data Science</h2>
          <div className="skills-grid">
            {[
              "Algorithms",
              "Data Structures & Rust",
              "Machine Learning for Business Analytics",
              "Database Management Systems",
              "Probability & Markov Chains",
              "Applied Statistics",
              "Computational Linear Algebra",
              "Discrete Math",
              "Spark! Software Engineering Prep Workshop",
            ].map((course) => (
              <span key={course} className="skill-chip">
                {course}
              </span>
            ))}
          </div>
        </div>

        <div className="coursework-block">
          <h2 className="subsection-title">Business</h2>
          <div className="skills-grid">
            {[
              "Public Speaking",
              "Financial Accounting",
              "Measuring Financial Value",
              "Microeconomics",
              "Macroeconomics",
              "Business Ethics and the Creation of Value",
              "Entrepreneurship: Solving Problems in a Dynamic World",
            ].map((course) => (
              <span key={course} className="skill-chip">
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
