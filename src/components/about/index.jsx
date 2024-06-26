"use client"

import ItemLayout from './ItemLayout'
import React from 'react'



const AboutDetails = () => {
    return (
        <section className='py-20 w-full'>
            <div className='grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full'>
                <ItemLayout className={'col-span-full lg:col-span-12 row-span-2 flex-col items-start'}>
                    <h2 className='text-xl md:text-2xl text-left w-full capitalize'>
                        Hi there! 👋
                    </h2>
                    <p className='font-light text-xs sm:text-sm md:text-base'>
                        I'm Ayushi, a passionate and creative frontend developer with a strong desire to create visually appealing and user-friendly web experiences. With a solid foundation in HTML, CSS, and JavaScript, I'm eager to contribute my skills to crafting modern and responsive websites.
                        During my journey as a learner, I've been fascinated by the power of frontend technologies to bring ideas to life on the web. I'm dedicated to staying up-to-date with the latest trends and techniques, and I'm excited to dive into frameworks like React and explore the ever-evolving world of frontend development.
                    </p>
                </ItemLayout>
                {/* <ItemLayout className={'col-span-full xs:col-span-6 lg:col-span-4 flex-col text-accent'}>
                    <img className='w-full h-auto' src='FA15FF.png' alt='Ayushi' loading='lazy' />
                </ItemLayout>
                <br />
                 <ItemLayout className={'col-span-full xs:col-span-6 lg:col-span-4 text-accent'}>
                    <p className='font-semibold w-full text-left text-2xl sm:text-5xl'>
                        4+<sub className='font-semibold text-base'>years of experience</sub>
                    </p>
                </ItemLayout>*/}
                <ItemLayout className={'col-span-full sm:col-span-6 md:col-span-4 !p-0'}>
                    <img className='w-full h-auto' src='https://github-readme-stats.vercel.app/api/top-langs?username=ayushisingh73448&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF' alt='Ayushi' loading='lazy' />
                </ItemLayout>
                <ItemLayout className={'col-span-full md:col-span-8 !p-0'}>
                    <img className='w-full h-auto' src='https://github-readme-stats.vercel.app/api?username=ayushisingh73448&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF' alt='Ayushi' loading='lazy' />
                </ItemLayout>
                <ItemLayout className={'col-span-full'}>
                    <img className='w-full h-auto' src='https://skillicons.dev/icons?i=js,html,css,bootstrap,cpp,figma,git,github,mysql,netlify,nextjs,nodejs,npm,py,react,sass,stackoverflow,tailwind,ts,vscode)' alt='Ayushi' loading='lazy' />
                </ItemLayout>
                <ItemLayout className={'col-span-full md:col-span-6 !p-0'}>
                    <img className='w-full h-auto' src="https://github-readme-streak-stats.herokuapp.com?user=ayushisingh73448&theme=dark&hide_border=true&type=png&ring=FEFE5B&background=EB545400&currStreakNum=FEFE5B" alt='Ayushi' loading='lazy' />
                </ItemLayout>
                <ItemLayout className={'col-span-full md:col-span-6'}>
                    <img className='w-full h-auto' src='https://github-readme-stats.vercel.app/api/pin/?username=ayushisingh73448&repo=caseburst&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&description_line_count=2' alt='Ayushi' loading='lazy' />
                </ItemLayout>

            </div>
        </section>
    )
}

export default AboutDetails