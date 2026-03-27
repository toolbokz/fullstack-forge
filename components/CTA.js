export default function CTA() {
    return (
        <section className="cta bg-primary text-white py-16">
            <div className="container center-all">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                    Ready to Turn Your Website Into a Lead Machine?
                </h2>
                <p className="text-white/80 text-lg max-w-2xl mb-8">
                    Stop losing customers to a website that doesn&apos;t convert. Get a
                    site that works as hard as you do — launching in just 7 days.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <a className="btn bg-white text-primary font-bold hover:bg-gray-100 px-8 py-3 text-lg" href="#contact">
                        Start Your Project
                    </a>
                    <a className="btn btn-outline-light px-8 py-3 text-lg" href="#audit">
                        Get a Free Audit First
                    </a>
                </div>
            </div>
        </section>
    );
}
