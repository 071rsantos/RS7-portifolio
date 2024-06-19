import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'FullStack Developer',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'Java, JavaScript, TypeScript, React, Node.JS',
        1500,
        'Estudante de ADS',
        1500,
        'Técnico em Desenvolvimento de Sistemas',
        1500,
        'Natural de Salvador',
        1500,
      ]}
      speed={50}
      className="text-[2rem] md:text-[3rem] text-[#55e6a5] font-bold uppercase"
      repeat={Infinity}
    />
  );
};

export default TextEffect;