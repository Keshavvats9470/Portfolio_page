import Head from 'next/head'
import type { GetStaticProps } from 'next'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe';
import { Experience, PageInfo, Project, Skill, Social } from '../typings'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSocial } from '../utils/fetchSocials'

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

 const Home = ({pageInfo, experiences, skills, projects, socials}: Props) => {
  return (
    <div className='bg-[#ffff]
     text-blue-900 h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-500/40 scrollbar-thumb-[#FDA512]/80'>
      <Head>
        <title>{pageInfo?.name} - Portfolio </title>
      </Head>
      
      {/* header section  */}
      <Header socials={socials}/>

      {/* HERO SECTION  */}
      <section id='hero' className='snap-start'>
        <Hero 
        pageInfo={pageInfo}/>
      </section>

      {/* ABOUT  */}
      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo}/>
      </section>

      {/* EXPERIENCE  */}
      <section id="experience" className='snap-center'>
         <WorkExperience experiences={experiences}/>
      </section>

      {/* SKILLS  */}
      <section id='skills' className='snap-start'>
        <Skills skills={skills}/>
      </section>

      {/* Projects  */}
      <section id='projects' className='snap-start'>
        <Projects projects={projects}/>
      </section>

      {/* CONTACT  */}
      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>
  </div>    
  )
}

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();

  // WHEN WE DEPLOY THIS WILL FETCH THE DATA AND IT WONT REBOOT EVERYTIME SOMEONE REQUESTS IT. BUT A MINUTE LATER ITS OUTDATED. SO WE REVALIDATE THAT.
  return {
      props: {
        pageInfo,
        experiences,
        skills,
        projects,
        socials,
    },
    revalidate: 10,
  }
}