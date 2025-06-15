import {Button} from "../../../Button/Button";
import {useIntersectionObserver} from "../../../../hooks/useIntersectionObserver";
import {combineClasses} from "../../../../utils/combineClasses";
import {observerCVA} from "@/styles/global.classes";
import {baseSectionClasses} from "./base.section.classes";

export const BaseSection = () => {
  const [ elementRef, hasBeenVisible ] = useIntersectionObserver({
    options: {
      rootMargin: '80px 0px 0px 0px'
    }
  })

  return (
    <section className={baseSectionClasses.root()}>
      <div ref={elementRef} className={combineClasses(baseSectionClasses.wrapper(), observerCVA.root({ isVisible: hasBeenVisible }))}>
        <span className='block pb-16 text-lg text-nowrap'>À propos</span>

        <div>
          <h1 className={baseSectionClasses.title()}>
            <strong className='font-black'>Notre agence</strong> propose aux entreprises une
            stratégie de <strong className='font-black'>communication 360°</strong> avec des
            concepts <strong className='font-black'>créatifs, innovants et
            impactants.</strong>
          </h1>

          <div className='w-fit'>
            <Button label='En savoir plus' href='#' variant='red' />
          </div>
        </div>
      </div>
    </section>
  )
}
