import React, {FC, ReactNode} from "react"
import {isFilled} from "@prismicio/client"
import {PrismicRichText} from "@prismicio/react"

import {observerCVA} from "@/styles/global.classes"

import {footerClasses} from "./footer.classes"
import {Facebook} from "../icons/Facebook"
import {Instagram} from "../icons/Instagram"
import {LinkedIn} from "../icons/LinkedIn"
import {Tiktok} from "../icons/Tiktok"
import {Threads} from "../icons/Threads"
import {YouTube} from "../icons/YouTube"
import {WhatsApp} from "../icons/WhatsApp"
import {X} from "../icons/X"
import {LanguageSwitcher} from "../../../components/LanguageSwitcher/LanguageSwitcher"
import {useIntersectionObserver} from "../../hooks/useIntersectionObserver"

type Props = any

const components = {
  heading3: ({ children }: { children: ReactNode }) => (<h3 className='mb-4 font-black'>{children}</h3>),
}

function renderSocialIcon(icon: string) {
  if (icon === 'Facebook') return <Facebook />
  if (icon === 'Instagram') return <Instagram />
  if (icon === 'Linkedin') return <LinkedIn />
  if (icon === 'Tiktok') return <Tiktok />
  if (icon === 'Threads') return <Threads />
  if (icon === 'X') return <X />
  if (icon === 'Youtube') return <YouTube />
  if (icon === 'Whatsapp') return <WhatsApp />

  return null
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
                {social_links.data.agency_social_links.map((social: any, index: any) => {
                  const icon = renderSocialIcon(social.icon)
                  if (!icon) return null
                  if (!isFilled.link(social.profile_url) || !social.profile_url.url) return <div key={index}>{icon}</div>

                  return (
                    <a
                      key={index}
                      href={social.profile_url.url}
                      target={social.profile_url.target || undefined}
                      rel={social.profile_url.target === '_blank' ? 'noopener noreferrer' : undefined}
                      aria-label={social.icon}
                      className='block'
                    >
                      {icon}
                    </a>
                  )
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
