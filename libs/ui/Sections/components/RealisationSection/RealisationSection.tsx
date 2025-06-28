import {FC, ReactNode} from "react"
import {PrismicImage, PrismicRichText} from "@prismicio/react"

import {observerCVA} from "@/styles/global.classes"

import {useIntersectionObserver} from "../../../../hooks/useIntersectionObserver"
import {realisationSectionClasses} from "./realisation.section.classes"
import {Button} from "../../../Button/Button"
import {combineClasses} from "../../../../utils/combineClasses"
import {Facebook} from "../../../icons/Facebook"
import {Instagram} from "../../../icons/Instagram"
import {LinkedIn} from "../../../icons/LinkedIn"
import {Tiktok} from "../../../icons/Tiktok"
import {X} from "../../../icons/X"
import {WhatsApp} from "../../../icons/WhatsApp"


type Props = any

const components = {
  heading2: ({ children }: { children: ReactNode }) => (<h2 className={combineClasses(realisationSectionClasses.title(), 'relative z-[2000]')}>{children}</h2>),
  p: ({ children }: { children: ReactNode }) => (<p className='leading-[150%] md:text-base'>{children}</p>),
}

export const RealisationSection: FC<Props> = ({ slice }) => {
  const [ elementRef, hasBeenVisible ] = useIntersectionObserver({
    options: {
      rootMargin: '80px 0 0 0'
    }
  })
  const {title, description, medias = [], cta, contact_info, social_links, social_heading} = slice?.primary || {}

  return (
    <section className={combineClasses(realisationSectionClasses.root())}>
      <div
        ref={elementRef}
        className={
          combineClasses(
            observerCVA.root({ isVisible: hasBeenVisible }),
            realisationSectionClasses.wrapper()
          )
        }
      >
        <PrismicRichText field={title} components={components}/>

        <PrismicRichText field={description} components={components}/>

        {contact_info?.data && (
          <address className='not-italic'>
            <p>{contact_info.data.address}</p>
            <p>{contact_info.data.phone}</p>
            <a href={`mailto:${contact_info.data.email}`} className='block'>{contact_info.data.email}</a>
          </address>
        )}

        <div>
          {social_heading && (
            <PrismicRichText field={social_heading} components={components}/>
          )}
          {social_links?.data && (
            <div className='flex gap-16'>
              {social_links.data.social_links.map((social, index) => {
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

        <div className={realisationSectionClasses.imageMobile()}>
          {medias.map(({image}: { image: any }, index: any) => (
            <PrismicImage className='w-full h-full object-cover block' key={index} field={image} />
          ))}
        </div>

        {cta?.text && (
          <div className='flex justify-end md:mt-24'>
            <Button label={cta.text} href={cta.href} variant='violet' />
          </div>
        )}
      </div>

      <div className={
        combineClasses(
          realisationSectionClasses.imageDesktop(),
          observerCVA.root({ isVisible: hasBeenVisible }))
      }>
        {medias.map(({image}: { image: any }, index: any) => (
          <PrismicImage className='w-full h-full object-cover block' key={index} field={image} />
        ))}
      </div>
    </section>
  )
}

RealisationSection.displayName = "RealisationSection"
