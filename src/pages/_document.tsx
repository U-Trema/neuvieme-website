import {Html, Head, Main, NextScript} from "next/document"
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
        <Script src="/js/gsap.js"  strategy='beforeInteractive'/>
        <Script src="/js/Draggable.js" strategy='beforeInteractive' />
        <Script src="/js/Flip.js" strategy='beforeInteractive' />
        <Script src="/js/SplitText.js" strategy='beforeInteractive' />
        <Script src="/js/imagesloaded.pkgd.min.js" strategy='beforeInteractive' />
        <Script type="module" src="/js/app.js" strategy='lazyOnload' />
        {/*<Script src="https://tympanus.net/codrops/adpacks/cda_sponsor.js" />*/}
      </body>
    </Html>
  )
}
