import {FC, ReactNode, useEffect} from "react"
import {useViewportSize, useMediaQuery, useSessionStorage} from "@mantine/hooks"

import {Nav} from "../../libs/ui/Nav/desktop/Nav"
import {useElementPosition} from "../../libs/hooks/useElementPosition"
import {NavMobile} from "../../libs/ui/Nav/mobile/NavMobile"
import {Loader} from "../../libs/ui/Loader/Loader";
import {useRouter} from "next/router";

type Props = {
  children: ReactNode
  nav: any
}

export const Layout: FC<Props> = ({ children, nav }) => {
  const router = useRouter()
  const { width } = useViewportSize()
  const { elementRef, scrollInfo } = useElementPosition(width)

  const matches = useMediaQuery('(min-width: 768px)', false, {
    getInitialValueInEffect: true,
  });

  const [loaderPlayed, setLoaderPlayed] = useSessionStorage({
    key: 'loader-played',
    defaultValue: false
  })

  useEffect(() => {
    if (router.route === '/') {
      setLoaderPlayed(false)
    }
  }, [router.route, setLoaderPlayed]);

  return (
    <main ref={elementRef}>
      {(router.route === '/' && !loaderPlayed) && <Loader onComplete={setLoaderPlayed} />}
      
      {width >= 768 && <Nav scrollInfo={scrollInfo} nav={nav} />}
      {!matches && <NavMobile nav={nav} />}

      {children}
    </main>
  )
}
