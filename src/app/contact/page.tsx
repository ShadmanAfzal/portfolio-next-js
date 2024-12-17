'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { IoCall } from 'react-icons/io5';
import { MdAlternateEmail, MdLocationPin } from 'react-icons/md';

export default function Contact() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    console.log(formData);
    setIsLoading(true);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.4, ease: 'easeIn' },
      }}
    >
      <div className='flex flex-col md:flex-row py-4 lg:py-8 gap-8 lg:gap-16'>
        <div className='bg-card rounded-md py-4 px-5 w-full lg:w-[55%]'>
          <div className='text-2xl text-primary pb-2'>Lets Connect</div>
          <div className='text-white/80 leading-relaxed'>
            Reach out, and let&apos;s explore how we can create something
            exceptional together.
          </div>
          <form className='flex flex-col gap-4 mt-4' onSubmit={onFormSubmit}>
            <div className='flex lg:flex-row flex-col gap-4'>
              <input
                className='text-white flex-1 rounded-md p-2 bg-background border border-white/10 focus:border-primary text-sm outline-none'
                placeholder='Firstname'
                required
              />
              <input
                className='text-white flex-1 rounded-md p-2 bg-background border border-white/10 focus:border-primary text-sm outline-none'
                placeholder='Lastname'
                required
              />
            </div>
            <div className='flex lg:flex-row flex-col gap-4'>
              <input
                className='text-white flex-1 rounded-md p-2 bg-background border border-white/10 focus:border-primary text-sm outline-none'
                placeholder='Email Address'
                required
                type='email'
              />
              <input
                className='text-white flex-1 rounded-md p-2 bg-background border border-white/10 focus:border-primary text-sm outline-none'
                placeholder='Phone Number'
              />
            </div>
            <div className='flex md:flex-row flex-col gap-4'>
              <textarea
                className='text-white flex-1 rounded-md p-2 bg-background border border-white/10 focus:border-primary text-sm outline-none resize-none'
                placeholder='Please type for message...'
                required
                rows={5}
              />
            </div>
            <div className='flex justify-center md:justify-start'>
              <button
                className='rounded-full bg-primary text-background font-semibold text-sm active:scale-95 transition-all duration-200 h-8 w-52'
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className='flex justify-center items-center gap-2'>
                    <AiOutlineLoading
                      className='animate-spin'
                      size={18}
                      strokeWidth={36}
                    />
                    <span>Sending</span>
                  </div>
                ) : (
                  <span>Send Message</span>
                )}
              </button>
            </div>
          </form>
        </div>
        <div className='flex flex-col gap-8 flex-1 justify-center items-start'>
          <div className='flex gap-4'>
            <div className='bg-card p-4 text-primary rounded-md'>
              <IoCall size={26} />
            </div>
            <div className='flex flex-col justify-center gap-2'>
              <div className='text-white/80 leading-tight'>Phone</div>
              <div className='text-white'>
                <a
                  target='_blank'
                  href='tel:+919650560450'
                  rel='noopener noreferrer'
                >
                  +91 9650560450
                </a>
              </div>
            </div>
          </div>
          <div className='flex gap-4'>
            <div className='bg-card p-4 text-primary rounded-md'>
              <MdAlternateEmail size={26} />
            </div>
            <div className='flex flex-col justify-center gap-2'>
              <div className='text-white/80 leading-tight'>Email</div>
              <div className='text-white'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='mailto:shadman.afzal.7@gmail.com'
                >
                  shdman.afzal.7@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className='flex gap-4'>
            <div className='bg-card p-4 text-primary rounded-md'>
              <MdLocationPin size={26} />
            </div>
            <div className='flex flex-col justify-center gap-2'>
              <div className='text-white/80 leading-tight'>Address</div>
              <div className='text-white'>New Delhi, India</div>
            </div>
          </div>
          <div className='flex gap-4'>
            <div className='bg-card p-4 text-primary rounded-md'>
              <FaLinkedinIn size={26} />
            </div>
            <div className='flex flex-col justify-center gap-2'>
              <div className='text-white/80 leading-tight'>LinkedIn</div>
              <div className='text-white'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://www.linkedin.com/in/shadman-afzal'
                >
                  linkedin/shadman-afzal
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
