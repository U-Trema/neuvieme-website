import {FC, ReactNode} from "react";
import {Nav} from "../../libs/ui/Nav/desktop/Nav";
import {useElementPosition} from "../../libs/hooks/useElementPosition";
import {useViewportSize} from "@mantine/hooks";
import {NavMobile} from "../../libs/ui/Nav/mobile/NavMobile";

type Props = {
  children: ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
  const { width } = useViewportSize()
  const { elementRef, scrollInfo } = useElementPosition(width)

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
