import { FaReact, FaNodeJs, FaAws, FaDocker } from 'react-icons/fa';
import { SiNextdotjs, SiExpress, SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql } from 'react-icons/si';

const techs = [
    { name: 'React', icon: <FaReact color="#61dafb" title="React" /> },
    { name: 'Next.js', icon: <SiNextdotjs color="#000" title="Next.js" /> },
    { name: 'Node.js', icon: <FaNodeJs color="#3c873a" title="Node.js" /> },
    { name: 'Express', icon: <SiExpress color="#000" title="Express" /> },
    { name: 'SQL', icon: <SiPostgresql color="#336791" title="PostgreSQL" /> },
    { name: 'NoSQL', icon: <SiMongodb color="#47A248" title="MongoDB" /> },
    { name: 'AWS', icon: <FaAws color="#FF9900" title="AWS" /> },
    { name: 'Docker', icon: <FaDocker color="#2496ed" title="Docker" /> },
    { name: 'TypeScript', icon: <SiTypescript color="#3178c6" title="TypeScript" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss color="#38bdf8" title="Tailwind CSS" /> },
];

export default function TechStack() {
    return (
        <section className="tech" id="tech">
            <div className="container center-all">
                <h2>Tech Stack & Skills</h2>
                <ul className="tech-list">
                    {techs.map(({ name, icon }) => (
                        <li key={name} className="tech-item">
                            <span className="tech-icon">{icon}</span>
                            <span>{name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
