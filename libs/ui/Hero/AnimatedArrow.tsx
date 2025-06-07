import {ChevronDown} from "../icons/ChevronDown";
import styles from "./animatedArrow.module.css";

export const AnimatedArrow = () => {
  return (
    <div className={styles.arrow}>
      <div className='bg-black p-px rounded-full w-[34px] h-[34px] flex justify-center items-center'>
        <ChevronDown width={24} height={24} />
        <ChevronDown width={24} height={24} />
      </div>
    </div>
  )
}
