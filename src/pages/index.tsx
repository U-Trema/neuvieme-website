import {Scroll} from "../../libs/ui/Scroll/Scroll";
import {Hero} from "../../libs/ui/Hero/Hero";
import {BaseSection} from "../../libs/ui/Sections/components/BaseSection/BaseSection";
import {RealisationSection} from "../../libs/ui/Sections/components/RealisationSection/RealisationSection";
import {useEffect, useRef} from "react";
import {Footer} from "../../libs/ui/Footer/Footer";

export default function Home() {
  const ref = useRef<any>(null)
  const pref = useRef<any>(null)

  useEffect(() => {
    const cursorFollower = ref.current
    if (!ref.current) return
    if (!pref.current) return

    function updateCursorPosition(e: any) {
      const x = e.clientX;
      const y = e.clientY;

      cursorFollower.style.left = x + 'px';
      cursorFollower.style.top = y + 'px';
    }

    pref.current.addEventListener('mousemove', updateCursorPosition);

    pref.current.addEventListener('mouseleave', function() {
      cursorFollower.style.opacity = '0';
    });

    pref.current.addEventListener('mouseenter', function() {
      cursorFollower.style.opacity = '1';
    });

    return () => {
      if (pref.current) {
        return pref.current.removeEventListener('mousemove', updateCursorPosition);
      }
    }
  }, [ref.current]);

  return (
    <>
      <Hero />

      <div ref={pref} style={{ position: 'relative' }}>
        <Scroll />

        <BaseSection />

        <RealisationSection
          title='Communication'
          description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam autem delectus inventore, neque repellat sed tenetur. A eaque est modi saepe? Ab ad debitis delectus dolores earum impedit.'
          btn='Voir nos réalisations'
          link='#'
          image='https://images.pexels.com/photos/23475/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        />

        <RealisationSection
          title='Publicité'
          description='Professionnels de l’image, notre équipe réalise vos shootings et vidéos pour tous types de besoins.'
          btn='Voir nos réalisations'
          link='#'
          image='https://images.pexels.com/photos/23475/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        />

        <RealisationSection
          title='Production audiovisuelle'
          description='Notre objectif est de vous rendre unique. En créant une identité visuelle impactante et cohérente, votre marque fera la différence.'
          btn='Voir nos réalisations'
          link='#'
          image='https://images.pexels.com/photos/23475/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        />

        <Footer />
        <div className='cursor-follower' ref={ref} />
      </div>
    </>
  );
}
