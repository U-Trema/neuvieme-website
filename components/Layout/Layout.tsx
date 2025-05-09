import {FC, ReactNode} from "react";
import {Nav} from "../../libs/ui/Nav/Nav";
import {useElementPosition} from "../../libs/hooks/useElementPosition";

type Props = {
  children: ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
  const { elementRef, scrollInfo } = useElementPosition()

  return (
    <main ref={elementRef}>
      <Nav scrollInfo={scrollInfo} />
      {children}
    </main>
  )
}
