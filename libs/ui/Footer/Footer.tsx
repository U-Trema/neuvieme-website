import {FC, ReactNode} from "react"
import {PrismicRichText} from "@prismicio/react"

import {observerCVA} from "@/styles/global.classes"

import {footerClasses} from "./footer.classes"
import {Facebook} from "../icons/Facebook"
import {useIntersectionObserver} from "../../hooks/useIntersectionObserver"
import {combineClasses} from "../../utils/combineClasses"

type Props = any

const components = {
  heading3: ({ children }: { children: ReactNode }) => (<h3 className='mb-4 font-black'>{children}</h3>),
}

export const Footer: FC<Props> = ({ slice }) => {
  const [ elementRef, hasBeenVisible ] = useIntersectionObserver({
    options: {
      rootMargin: '80px 0 0 0'
    }
  })

  const { contact_heading, contact_info, language_heading, languages, social_heading, social_links } = slice?.primary || {}

  return (
    <footer ref={elementRef} className={combineClasses(footerClasses.root(), observerCVA.root({ isVisible: hasBeenVisible }))}>
      <div className='flex flex-col gap-32 md:gap-64 lg:flex-row'>
        <div>
          {contact_heading && (
            <PrismicRichText field={contact_heading} components={components}/>
          )}
          {contact_info?.data && (
            <address className='not-italic'>
              <p>{contact_info.data.address}</p>
              <p>{contact_info.data.phone}</p>
              <a href={`mailto:${contact_info.data.email}`} className='block'>{contact_info.data.email}</a>
            </address>
          )}
        </div>

        <div>
          {social_heading && (
            <PrismicRichText field={social_heading} components={components}/>
          )}
          {social_links?.data && (
            <div className='flex gap-16'>
              {social_links.data.social_links.map((social, index) => (
                social.icon === 'Facebook' && <div key={index}><Facebook /></div>
              ))}
            </div>
          )}
        </div>

        <div>
          {language_heading && (
            <PrismicRichText field={language_heading} components={components}/>
          )}
          {languages?.data && (
            <div className='flex gap-12'>
              {languages.data.lang
                .filter(({active}) => active)
                .map((lang, index) => (
                  <button key={index} className='leading-[150%] cursor-pointer'>{lang.label}</button>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}

Footer.displayName = "Footer"
