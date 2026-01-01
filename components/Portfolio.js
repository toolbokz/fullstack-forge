const projects = [
    {
        name: "Comfy store",
        desc: "Example website for a small business, showcasing features and pricing.",
        tech: "Next.js, Tailwind, Netlify",
        url: "https://react-vite-comfy-store-v2.netlify.app/",
        img: "/assets/portfolio-1.jpeg"
    },
    {
        name: "The Warriors Call",
        desc: "Example website for a bible community interested in faith and fellowship.",
        tech: "Next.js, Tailwind, Vercel",
        url: "https://www.thewarriorscall.org/",
        img: "/assets/portfolio-2.jpg"
    },
    {
        name: "Everclean Services",
        desc: "Example website for a small cleaning business, showcasing contact information and services.",
        tech: "Next.js, Tailwind, Netlify",
        url: "https://cleaning-site-001.netlify.app/",
        img: "/assets/portfolio-3.jpeg"
    },
    {
        name: "Good For business Accountant",
        desc: "Example website for an accounting business, showcasing contact information and services.",
        tech: "Next.js, Tailwind, Netlify",
        url: "https://accountant-good-for-business.netlify.app/",
        img: "/assets/portfolio-4.jpg"
    },
    {
        name: "PlumbFix Services",
        desc: "Example website for a plumbing business, showcasing contact information and services.",
        tech: "Next.js, Tailwind, Netlify",
        url: "https://plumbfix-site.netlify.app/",
        img: "/assets/portfolio-5.jpg"
    }

];

export default function Portfolio() {
    return (
        <section className="portfolio" id="portfolio">
            <div className="container center-all">
                <h2>Key Projects</h2>
                <div className="portfolio-list">
                    {projects.map((proj, idx) => (
                        <div className="portfolio-card" key={`${proj.name}-${idx}`}>
                            <img
                                className="portfolio-thumb"
                                src={proj.img}
                                alt="Project preview"
                                loading="lazy"
                            />
                            <h3>{proj.name}</h3>
                            <p>{proj.desc}</p>
                            <div className="portfolio-meta">
                                <span>{proj.tech}</span>
                            </div>
                            <div className="portfolio-links">
                                <a href={proj.url} target="_blank" rel="noopener" className="btn btn-sm">Live Site</a>
                            </div>
                        </div>
                    ))}
                </div>
                <p>Real results for real clients. <a href="#contact" className="btn">Claim Your Quote</a></p>
            </div>
        </section>
    );
}
