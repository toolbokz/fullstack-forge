import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="icon" href="/assets/favicon.ico" sizes="any" />

                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Monsieur+La+Doulaise&family=Shadows+Into+Light&family=Zalando+Sans+Expanded:ital,wght@0,200..900;1,200..900&display=swap"
                        rel="stylesheet"
                    />

                    <script src="/section-animate.js" defer></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
