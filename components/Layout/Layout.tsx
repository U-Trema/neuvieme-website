import {FC, ReactNode, useEffect, useState} from "react";
import {Nav} from "../../libs/ui/Nav/Nav";
import {useElementPosition} from "../../libs/hooks/useElementPosition";

type Props = {
  children: ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
  const { elementRef, scrollInfo } = useElementPosition()

  /*const [top, setTop] = useState<string>('-100%');

  useEffect(() => {
    if (scrollInfo.scrollY > 400) return

    setTop(`${-(100 - (scrollInfo.scrollY / 4))}%`)
  }, [scrollInfo.scrollY]);*/

  return (
    <main ref={elementRef}>
      <Nav scrollInfo={scrollInfo} />
      {children}
    </main>
  )
}
