import {Scroll} from "../../libs/ui/Scroll/Scroll";
import {Hero} from "../../libs/ui/Hero/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      <div style={{ position: 'relative' }}>
        <Scroll />

        <div style={{ width: '100%', height: '100vh', background: '#030708' }} />
        <div style={{ width: '100%', height: '100vh', background: '#030708' }} />
        <div style={{ width: '100%', height: '100vh', background: '#030708' }} />
      </div>
    </>
  );
}
