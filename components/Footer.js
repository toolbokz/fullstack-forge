export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-links">
                    <a href="https://linkedin.com/" target="_blank" rel="noopener">LinkedIn</a>
                    <a href="https://github.com/" target="_blank" rel="noopener">GitHub</a>
                    <a href="/privacy-policy" target="_blank">Privacy Policy</a>
                </div>
                <div className="copyright">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</div>
            </div>
        </footer>
    );
}
