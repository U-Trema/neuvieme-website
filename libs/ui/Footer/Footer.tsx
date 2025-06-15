import {footerClasses} from "./footer.classes";
import {Facebook} from "../icons/Facebook";
import {useIntersectionObserver} from "../../hooks/useIntersectionObserver";
import {combineClasses} from "../../utils/combineClasses";
import {observerCVA} from "@/styles/global.classes";

export const Footer = () => {
  const [ elementRef, hasBeenVisible ] = useIntersectionObserver({
    options: {
      rootMargin: '80px 0px 0px 0px'
    }
  })

  return (
    <footer ref={elementRef} className={combineClasses(footerClasses.root(), observerCVA.root({ isVisible: hasBeenVisible }))}>
      <div className='flex flex-col gap-32 md:gap-64 lg:flex-row'>
        <div>
          <h3 className='mb-4 font-black'>Nous contacter</h3>
          <address className='not-italic'>
            <p>Boulevard du Général de Gaulle, Djibouti</p>
            <p>+253 77 17 18 21</p>
            <a href="mailto:contact@neuvieme.dj" className='block'>contact@neuvieme.dj</a>
          </address>
        </div>

        <div>
          <h3 className='mb-4 font-black'>Nos réseaux</h3>
          <div className='flex gap-16'>
            <Facebook />
            <Facebook />
            <Facebook />
          </div>
        </div>

        <div>
          <h3 className='mb-4 font-black'>Langues</h3>
          <div className='flex gap-12'>
            <button className='leading-[150%] cursor-pointer'>FR</button>
            <button className='leading-[150%] cursor-pointer'>EN</button>
          </div>
        </div>
      </div>
    </footer>
  )
}
