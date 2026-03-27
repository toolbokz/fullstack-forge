import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="footer bg-dark text-white py-12">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-left">
                    <div>
                        <h4 className="font-bold text-lg mb-3">Fullstack Forge</h4>
                        <p className="text-gray-400 text-sm">
                            We build high-converting websites that generate customers for
                            small businesses in New Zealand.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-3">Services</h4>
                        <ul className="flex flex-col gap-2 text-sm">
                            <li><Link href="/web-design-christchurch" className="text-gray-400 hover:text-white transition-colors">Web Design Christchurch</Link></li>
                            <li><Link href="/ecommerce-websites-nz" className="text-gray-400 hover:text-white transition-colors">E-Commerce Websites NZ</Link></li>
                            <li><Link href="/website-design-for-small-business" className="text-gray-400 hover:text-white transition-colors">Small Business Websites</Link></li>
                            <li><Link href="/affordable-websites-nz" className="text-gray-400 hover:text-white transition-colors">Affordable Websites NZ</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-3">Resources</h4>
                        <ul className="flex flex-col gap-2 text-sm">
                            <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                            <li><Link href="/#solutions" className="text-gray-400 hover:text-white transition-colors">Solutions</Link></li>
                            <li><Link href="/#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
                            <li><Link href="/#audit" className="text-gray-400 hover:text-white transition-colors">Free Audit</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-3">Connect</h4>
                        <ul className="flex flex-col gap-2 text-sm">
                            <li>
                                <a href="https://github.com/toolbokz" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <Link href="/#contact" className="text-gray-400 hover:text-white transition-colors">
                                    Get in Touch
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
                    <span>&copy; {new Date().getFullYear()} Fullstack Forge. All rights reserved.</span>
                    <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
}
