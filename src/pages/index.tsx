import {Scroll} from "../../libs/ui/Scroll/Scroll";
import {Hero} from "../../libs/ui/Hero/Hero";
import {BaseSection} from "../../libs/ui/Sections/components/BaseSection/BaseSection";

export default function Home() {
  return (
    <>
      <Hero />

      <div style={{ position: 'relative' }}>
        <Scroll />

        <BaseSection />

        <div style={{ width: '100%', height: '100vh', background: '#030708', paddingLeft: 240, paddingTop: 240 }}>
          <h1>Section test</h1>
        </div>
        <div style={{ width: '100%', height: '100vh', background: '#030708', paddingLeft: 240, paddingTop: 240 }}>
          <h1>Section test</h1>
        </div>
        <div style={{ width: '100%', height: '100vh', background: '#030708', paddingLeft: 240, paddingTop: 240 }}>
          <h1>Section test</h1>
        </div>
      </div>
    </>
  );
}
