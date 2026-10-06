const projects = [
  {
    title: "InternCloud",
    type: "Web Platform",
    description:
      "An internship discovery and management platform designed around the NEP 2020 internship workflow, helping students discover opportunities and track applications.",
    tags: ["Next.js", "React", "UI/UX"],
    link: "https://bit.ly/InternCloud",
  },
  {
    title: "Guardian Herd",
    type: "Social Impact",
    description:
      "A low-cost, non-invasive early warning concept for reducing human-elephant conflict by connecting public observations, forest officers and timely alerts.",
    tags: ["Python", "Flask", "Database"],
    link: "#",
  },
  {
    title: "UPI Fraud Reporting Portal",
    type: "Bootcamp Project",
    description:
      "A web application concept for reporting UPI scams and fraud incidents, with an API-driven workflow for submitting and managing reports.",
    tags: ["JavaScript", "Node.js", "API"],
    link: "#",
  },
];

const skills = [
  "C", "Java", "Python", "JavaScript", "React", "Next.js",
  "HTML", "CSS", "Flask", "SQL", "Git", "GitHub"
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="logo" href="#top">TS.</a>
        <div className="navLinks">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="navButton" href="mailto:tejas@example.com">Let's talk</a>
      </nav>

      <section className="hero" id="top">
        <div className="heroGlow" />
        <div className="heroContent">
          <p className="eyebrow">COMPUTER SCIENCE & ENGINEERING</p>
          <h1>
            Building digital
            <span> experiences.</span>
          </h1>
          <p className="heroText">
            I&apos;m Tejas S Shetty, a CSE student and developer focused on
            building practical products, learning modern technologies and
            turning ideas into working experiences.
          </p>
          <div className="heroActions">
            <a className="primaryButton" href="#projects">View my work <span>↗</span></a>
            <a className="secondaryButton" href="https://github.com/tejasshettyyy" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
        <div className="heroMeta">
          <div><span>01</span><p>Developer</p></div>
          <div><span>02</span><p>Problem Solver</p></div>
          <div><span>03</span><p>Community Builder</p></div>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="sectionLabel">01 / ABOUT</div>
        <div className="aboutGrid">
          <h2>Curious by nature.<br /><span>Builder by choice.</span></h2>
          <div>
            <p>
              I&apos;m pursuing a B.E. in Computer Science & Engineering at
              Sahyadri College of Engineering & Management. I enjoy working
              across development, design and community-focused projects.
            </p>
            <p>
              From internship platforms to social-impact applications, I like
              taking an idea from a rough concept to something people can
              actually interact with.
            </p>
            <a className="textLink" href="https://www.linkedin.com/in/tejas-s-shetty-34750436b/" target="_blank" rel="noreferrer">
              More about me ↗
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="skills">
        <div className="sectionLabel">02 / SKILLS</div>
        <div className="skillsHeader">
          <h2>Tools I use to<br /><span>build things.</span></h2>
          <p>Always learning. Always experimenting.</p>
        </div>
        <div className="skillsGrid">
          {skills.map((skill, index) => (
            <div className="skillCard" key={skill}>
              <span>0{index + 1}</span>
              <strong>{skill}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section projects" id="projects">
        <div className="sectionLabel">03 / SELECTED WORK</div>
        <div className="projectsHeader">
          <h2>Projects that<br /><span>matter.</span></h2>
          <p>Some things I&apos;ve built while learning, experimenting and solving real problems.</p>
        </div>
        <div className="projectList">
          {projects.map((project, index) => (
            <article className="projectCard" key={project.title}>
              <div className="projectNumber">0{index + 1}</div>
              <div className="projectMain">
                <p className="projectType">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
              <a className="projectArrow" href={project.link} target={project.link.startsWith("http") ? "_blank" : undefined} rel="noreferrer">↗</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section experience" id="experience">
        <div className="sectionLabel">04 / EXPERIENCE</div>
        <div className="experienceGrid">
          <div>
            <p className="eyebrow">JUL 2025 — PRESENT</p>
            <h2>InUnity</h2>
            <p className="role">Community Development & Video Filming · Marketing</p>
          </div>
          <div>
            <p>
              Working on community-focused initiatives, content and outreach,
              combining communication, creativity and technology to support
              meaningful projects.
            </p>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contactInner">
          <p className="eyebrow">05 / CONTACT</p>
          <h2>Have an idea?<br /><span>Let&apos;s build it.</span></h2>
          <a className="email" href="mailto:tejas@example.com">tejas@example.com ↗</a>
          <div className="socials">
            <a href="https://github.com/tejasshettyyy" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/tejas-s-shetty-34750436b/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 Tejas S Shetty</p>
        <p>Designed & built with Next.js</p>
      </footer>
    </main>
  );
}