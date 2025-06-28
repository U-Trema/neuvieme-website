import React, {FC, ReactNode} from "react"
import {PrismicRichText} from "@prismicio/react"

import {observerCVA} from "@/styles/global.classes"

import {footerClasses} from "./footer.classes"
import {Facebook} from "../icons/Facebook"
import {Instagram} from "../icons/Instagram"
import {LinkedIn} from "../icons/LinkedIn"
import {Tiktok} from "../icons/Tiktok"
import {WhatsApp} from "../icons/WhatsApp"
import {X} from "../icons/X"
import {LanguageSwitcher} from "../../../components/LanguageSwitcher/LanguageSwitcher"
import {useIntersectionObserver} from "../../hooks/useIntersectionObserver"

type Props = any

const components = {
  heading3: ({ children }: { children: ReactNode }) => (<h3 className='mb-4 font-black'>{children}</h3>),
}

export const Footer: FC<Props> = ({ slice }) => {
  const [ elementRef, hasBeenVisible ] = useIntersectionObserver({
    options: {
      rootMargin: '80px 0px 0px 0px'
    }
  })

  const { contact_heading, contact_info, language_heading, languages, social_heading, social_links } = slice?.primary || {}

  return (
    <footer className={footerClasses.root()}>
      <div
        ref={elementRef}
        className={observerCVA.root({ isVisible: hasBeenVisible })}
      >
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
                {social_links.data.social_links.map((social: any, index: any) => {
                  if (social.icon === 'Facebook') return <div key={index}><Facebook /></div>
                  if (social.icon === 'Instagram') return <div key={index}><Instagram /></div>
                  if (social.icon === 'Linkedin') return <div key={index}><LinkedIn /></div>
                  if (social.icon === 'Tiktok') return <div key={index}><Tiktok /></div>
                  if (social.icon === 'X') return <div key={index}><X /></div>
                  if (social.icon === 'Whatsapp') return <div key={index}><WhatsApp /></div>
                })}
              </div>
            )}
          </div>

          <div>
            {language_heading && <PrismicRichText field={language_heading} components={components}/>}
            {languages?.data && <LanguageSwitcher languages={languages.data.lang} />}
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer.displayName = "Footer"
