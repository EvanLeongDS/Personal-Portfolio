import Link from "next/link";

export default function DocumentsPage() {
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

      <div className="mx-auto max-w-3xl px-10 py-24" style={{ paddingTop: "140px" }}>
        <h1 className="subsection-title documents-title">Resume &amp; Transcript</h1>
        <div className="documents-links mt-12">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="documents-link"
          >
            Resume
            <span className="documents-arrow">→</span>
          </a>
          <a
            href="/transcript.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="documents-link"
          >
            Transcript
            <span className="documents-arrow">→</span>
          </a>
        </div>
      </div>
    </main>
  );
}
