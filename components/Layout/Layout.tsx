import {FC, ReactNode} from "react"
import {useViewportSize} from "@mantine/hooks"

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
  console.log({ nav })

  return (
    <main ref={elementRef}>
      {width >= 768
        ? <Nav scrollInfo={scrollInfo} />
        : <NavMobile />
      }
      {children}
    </main>
  )
}
