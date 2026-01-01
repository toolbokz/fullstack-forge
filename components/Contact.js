export default function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="container center-all">
                <h2>Contact</h2>
                <p>Tell us about your project — we reply within one business day.</p>
                <form action="/api/contact" method="post">
                    <input name="name" placeholder="Your name" required />
                    <input name="email" type="email" placeholder="Email" required />
                    <textarea name="message" placeholder="Project details" rows="4" />
                    <button type="submit" className="btn">Send</button>
                </form>
            </div>
        </section>
    )
}
