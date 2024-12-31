'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { IoCall } from 'react-icons/io5';
import { MdAlternateEmail, MdLocationPin } from 'react-icons/md';
import { toast } from 'react-toastify';

import saveContactInfoToDB from '../actions/saveContactInfo';
import { Geolocation } from '@/types/geolocation';

export default function Contact() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);

  const showToast = (message: string, type: 'success' | 'error') => {
    if (type === 'success') return toast.success(message);

    return toast.error(message);
  };

  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    setIsLoading(true);

    const geolocation = await fetchGeoLocation();

    const result = await saveContactInfoToDB(formData, geolocation);

    setIsLoading(false);

    formRef.current?.reset();

    showToast(result.message, result.success ? 'success' : 'error');
  };

  const fetchGeoLocation = async (): Promise<Geolocation | null> => {
    try {
      const response = await fetch('https://geolocation-db.com/json/');
      const geolocation = await response.json();
      return {
        country: {
          code: geolocation.country_code,
          name: geolocation.country_name,
        },
        city: geolocation.city,
        zipCode: geolocation.postal,
        coordinates: [geolocation.latitude, geolocation.longitude],
        state: geolocation.state,
      };
    } catch (error) {
      console.log('Error occured while fetching geolocation detail', error);
      return null;
    }
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
            Let&apos;s explore how we can create something exceptional together.
          </div>
          <form
            className='flex flex-col gap-4 mt-4'
            onSubmit={onFormSubmit}
            ref={formRef}
          >
            <div className='flex lg:flex-row flex-col gap-4'>
              <input
                name='firstname'
                className='text-white flex-1 rounded-md p-2 bg-background border border-white/10 focus:border-primary text-sm outline-none'
                placeholder='Firstname'
                required
                autoComplete='off'
              />
              <input
                name='lastname'
                className='text-white flex-1 rounded-md p-2 bg-background border border-white/10 focus:border-primary text-sm outline-none'
                placeholder='Lastname'
                required
                autoComplete='off'
              />
            </div>
            <div className='flex lg:flex-row flex-col gap-4'>
              <input
                name='email'
                className='text-white flex-1 rounded-md p-2 bg-background border border-white/10 focus:border-primary text-sm outline-none'
                placeholder='Email Address'
                required
                type='email'
                autoComplete='off'
              />
              <input
                name='phone'
                className='text-white flex-1 rounded-md p-2 bg-background border border-white/10 focus:border-primary text-sm outline-none'
                placeholder='Phone Number'
                autoComplete='off'
                type='number'
              />
            </div>
            <div className='flex md:flex-row flex-col gap-4'>
              <textarea
                name='message'
                className='text-white flex-1 rounded-md p-2 bg-background border border-white/10 focus:border-primary text-sm outline-none resize-none'
                placeholder='Please enter your message...'
                required
                rows={5}
                autoComplete='off'
              />
            </div>
            <div className='flex justify-center md:justify-start'>
              <button
                className='rounded-full bg-primary text-background font-semibold text-sm active:scale-95 transition-all duration-200 ease-in-out h-8 w-52'
                disabled={isLoading}
                aria-label='submit'
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
              <a
                target='_blank'
                href='tel:+919650560450'
                rel='noopener noreferrer'
                className='text-white'
              >
                +91 9650560450
              </a>
            </div>
          </div>
          <div className='flex gap-4'>
            <div className='bg-card p-4 text-primary rounded-md'>
              <MdAlternateEmail size={26} />
            </div>
            <div className='flex flex-col justify-center gap-2'>
              <div className='text-white/80 leading-tight'>Email</div>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='mailto:shadman.afzal.7@gmail.com'
                className='text-white'
              >
                shadman.afzal.7@gmail.com
              </a>
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
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.linkedin.com/in/shadman-afzal'
                className='text-white'
              >
                linkedin/shadman-afzal
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
