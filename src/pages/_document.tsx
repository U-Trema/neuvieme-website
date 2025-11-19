import {Html, Head, Main, NextScript} from "next/document"
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="fr">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
        <Script src="/js/gsap.js"  strategy='afterInteractive'/>
        <Script src="/js/Draggable.js" strategy='afterInteractive' />
        <Script src="/js/Flip.js" strategy='afterInteractive' />
        <Script src="/js/SplitText.js" strategy='afterInteractive' />
        <Script src="/js/imagesloaded.pkgd.min.js" strategy='beforeInteractive' />
      </body>
    </Html>
  )
}
