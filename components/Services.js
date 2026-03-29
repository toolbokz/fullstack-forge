'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, FadeInSection } from './motion'

export default function Services() {
    return (
        <section className="services" id="services">
            <div className="container center-all">
                <FadeInSection>
                    <h2>Services</h2>
                </FadeInSection>
                <motion.div
                    className="grid"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {[
                        { title: 'Custom Websites', desc: 'Pixel-perfect, fast-loading sites tailored to your brand.' },
                        { title: 'eCommerce', desc: 'Secure, scalable stores with easy product management.' },
                        { title: 'SEO & Performance', desc: 'On-page SEO, structured data, and performance tuning.' },
                    ].map((s) => (
                        <motion.div
                            key={s.title}
                            className="card"
                            variants={fadeUp}
                            whileHover={{ y: -4, transition: { duration: 0.2 } }}
                        >
                            <h3>{s.title}</h3>
                            <p>{s.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
