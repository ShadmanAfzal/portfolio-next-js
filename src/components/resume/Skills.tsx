import { IconType } from 'react-icons';
import { BiLogoPostgresql } from 'react-icons/bi';
import { DiMongodb } from 'react-icons/di';
import {
  FaAws,
  FaCss3,
  FaDocker,
  FaGit,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa';
import { FaFlutter } from 'react-icons/fa6';
import { IoLogoFirebase } from 'react-icons/io5';
import {
  SiDart,
  SiDjango,
  SiJavascript,
  SiKubernetes,
  SiNestjs,
  SiNextdotjs,
  SiPython,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { Tooltip } from 'react-tooltip';

type SkillType = {
  label: string;
  logo: IconType;
};

const Skills = () => {
  const skills: SkillType[] = [
    {
      label: 'AWS',
      logo: FaAws,
    },
    {
      label: 'Javascript',
      logo: SiJavascript,
    },
    {
      label: 'Typescript',
      logo: SiTypescript,
    },
    {
      label: 'Dart',
      logo: SiDart,
    },
    {
      label: 'Python',
      logo: SiPython,
    },
    {
      label: 'Node.js',
      logo: FaNodeJs,
    },
    {
      label: 'Nest.js',
      logo: SiNestjs,
    },
    {
      label: 'React.js',
      logo: FaReact,
    },
    {
      label: 'Next.js',
      logo: SiNextdotjs,
    },
    {
      label: 'Redux',
      logo: SiRedux,
    },
    {
      label: 'Tailwind CSS',
      logo: SiTailwindcss,
    },
    {
      label: 'Django',
      logo: SiDjango,
    },
    {
      label: 'Docker',
      logo: FaDocker,
    },
    {
      label: 'Kubernetes',
      logo: SiKubernetes,
    },
    {
      label: 'Firebase',
      logo: IoLogoFirebase,
    },
    {
      label: 'Flutter',
      logo: FaFlutter,
    },
    {
      label: 'HTML',
      logo: FaHtml5,
    },
    {
      label: 'CSS',
      logo: FaCss3,
    },
    {
      label: 'Git',
      logo: FaGit,
    },
    {
      label: 'MongoDB',
      logo: DiMongodb,
    },
    {
      label: 'PostgreSQL',
      logo: BiLogoPostgresql,
    },
  ];

  return (
    <>
      <div className='flex flex-col gap-2'>
        <div className='text-3xl text-white font-semibold'>My Skills</div>
        <div className='text-white/80 leading-relaxed text-[15px]'>
          Proficient in Node.js, Next.js, React.js, Tailwind CSS, TypeScript,
          AWS, Docker with a focus on building responsive and scalable web
          applications.
        </div>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 lg:h-[360px] lg:overflow-y-auto scrollbar-custom'>
        {skills.map((skill, idx) => {
          return (
            <div
              key={idx}
              data-tooltip-id='skills'
              data-tooltip-content={skill.label}
              data-tooltip-place='top'
              className='flex flex-col items-center justify-center gap-1 bg-card rounded-3xl py-4 px-6 transition-all duration-200 text-white hover:text-primary'
            >
              <Tooltip id='skills' noArrow className='rounded-3xl' />
              <skill.logo size={40} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Skills;
