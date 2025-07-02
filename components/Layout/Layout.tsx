import {FC, ReactNode} from "react"
import {useViewportSize, useMediaQuery} from "@mantine/hooks"

import {Nav} from "../../libs/ui/Nav/desktop/Nav"
import {useElementPosition} from "../../libs/hooks/useElementPosition"
import {NavMobile} from "../../libs/ui/Nav/mobile/NavMobile"

type Props = {
  children: ReactNode
  nav: any
}

export const Layout: FC<Props> = ({ children, nav }) => {
  const { width } = useViewportSize()
  const { elementRef, scrollInfo } = useElementPosition(width)

  const matches = useMediaQuery('(min-width: 768px)', false, {
    getInitialValueInEffect: true,
  });

  return (
    <main ref={elementRef}>
      {width >= 768 && <Nav scrollInfo={scrollInfo} nav={nav} />}
      {!matches && <NavMobile nav={nav} />}

      {children}
    </main>
  )
}
