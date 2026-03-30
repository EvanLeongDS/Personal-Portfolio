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
          <a href="https://leongevan.vercel.app/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
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
              { name: "Algorithms", url: "https://www.bu.edu/academics/cds/courses/cds-ds-320/" },
              { name: "Data Structures & Rust", url: "https://www.bu.edu/academics/cds/courses/cds-ds-210/" },
              { name: "Machine Learning for Business Analytics", url: "https://www.bu.edu/academics/questrom/courses/qst-ba-576/" },
              { name: "Database Management Systems", url: "https://www.bu.edu/academics/cds/courses/cds-ds-310/" },
              { name: "Probability & Markov Chains", url: "https://www.bu.edu/academics/cds/courses/cds-ds-122/" },
              { name: "Applied Statistics", url: "https://www.bu.edu/academics/cas/courses/cas-ma-214/" },
              { name: "Computational Linear Algebra", url: "https://www.bu.edu/academics/cds/courses/cds-ds-121/" },
              { name: "Discrete Math", url: "https://www.bu.edu/academics/cds/courses/cds-ds-120/" },
              { name: "Spark! Software Engineering Prep Workshop", url: "https://www.bu.edu/academics/cds/courses/cds-ds-219/" },
            ].map((course) => (
              <a key={course.name} href={course.url} target="_blank" rel="noopener noreferrer" className="skill-chip">
                {course.name}
              </a>
            ))}
          </div>
        </div>

        <div className="coursework-block">
          <h2 className="subsection-title">Business</h2>
          <div className="skills-grid">
            {[
              { name: "Public Speaking", url: "https://www.bu.edu/academics/questrom/courses/qst-sm-275/" },
              { name: "Financial Accounting", url: "https://www.bu.edu/academics/questrom/courses/qst-ac-221/" },
              { name: "Measuring Financial Value", url: "https://www.bu.edu/academics/questrom/courses/qst-sm-132/" },
              { name: "Microeconomics", url: "https://www.bu.edu/academics/cas/courses/cas-ec-101/" },
              { name: "Macroeconomics", url: "https://www.bu.edu/academics/cas/courses/cas-ec-102/" },
              { name: "Business Ethics and the Creation of Value", url: "https://www.bu.edu/academics/questrom/courses/qst-sm-131/" },
              { name: "Entrepreneurship: Solving Problems in a Dynamic World", url: "https://www.bu.edu/academics/questrom/courses/qst-si-344/" },
            ].map((course) => (
              <a key={course.name} href={course.url} target="_blank" rel="noopener noreferrer" className="skill-chip">
                {course.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
