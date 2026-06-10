export default function Home() {
  return (
    <main>

      <section className="hero glass">
        <p className="badge">AVAILABLE FOR FREELANCE PROJECTS</p>

        <h1>
          Full Stack Developer
          <span> Building Modern Web Applications</span>
        </h1>

        <p className="subtitle">
          I help startups and businesses build scalable SaaS platforms,
          AI-powered applications, automation systems and custom software.
        </p>

        <div className="buttons">
          <a href="#services">Services</a>

          <a
            href="https://calendly.com/YOUR-CALENDLY-LINK"
            target="_blank"
          >
            Schedule Meeting
          </a>
        </div>
      </section>

      <section id="services">
        <h2>Services</h2>

        <div className="grid">

          <div className="glass card">
            <h3>Full Stack Development</h3>
            <p>
              Next.js, React, Node.js, PostgreSQL and modern cloud
              architecture.
            </p>
          </div>

          <div className="glass card">
            <h3>AI Integration</h3>
            <p>
              OpenAI, Claude, RAG systems and workflow automation.
            </p>
          </div>

          <div className="glass card">
            <h3>SaaS MVP Development</h3>
            <p>
              Launch your startup idea quickly with production-ready code.
            </p>
          </div>

          <div className="glass card">
            <h3>API Development</h3>
            <p>
              Secure APIs, payments, authentication and integrations.
            </p>
          </div>

        </div>
      </section>

      <section>
        <h2>Featured Projects</h2>

        <div className="grid">

          <div className="glass card">
            <h3>AI Customer Support Platform</h3>
            <p>Next.js • OpenAI • PostgreSQL</p>
          </div>

          <div className="glass card">
            <h3>Healthcare Management System</h3>
            <p>React • Node.js • MongoDB</p>
          </div>

          <div className="glass card">
            <h3>SaaS Analytics Dashboard</h3>
            <p>Next.js • Prisma • Stripe</p>
          </div>

        </div>
      </section>

      <section className="glass contact">

        <h2>Let's Work Together</h2>

        <p>
          Looking for a developer to build your next product?
        </p>

        <div className="buttons">

          <a href="mailto:you@example.com">
            Email Me
          </a>

          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
          >
            LinkedIn
          </a>

          <a
            href="https://calendly.com/YOUR-CALENDLY-LINK"
            target="_blank"
          >
            Schedule Meeting
          </a>

        </div>

      </section>

    </main>
  );
}
