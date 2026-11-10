'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { IoCall, IoCheckmarkCircleOutline } from 'react-icons/io5';
import { MdAlternateEmail, MdLocationPin } from 'react-icons/md';
import confetti from 'canvas-confetti';

import saveContactInfoToDB from '../actions/saveContactInfo';
import { Geolocation } from '@/types/geolocation';

export default function Contact() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState<{
    message: string;
    success: boolean;
  } | null>(null);

  const formRef = useRef<HTMLFormElement>(null);
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER;

  const openModal = (message: string, success: boolean) => {
    setModalData({ message, success });
    setShowModal(true);

    if (success) {
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
      });
    }
  };

  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    setIsLoading(true);

    const geolocation = await fetchGeoLocation();

    const result = await saveContactInfoToDB(formData, geolocation);

    setIsLoading(false);

    formRef.current?.reset();

    openModal(result.message, result.success);
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
      <div className='flex flex-col gap-8 py-4 md:flex-row lg:gap-16 lg:py-4'>
        <div className='w-full rounded-3xl bg-card px-5 py-5 sm:px-7 sm:py-6 lg:w-[55%]'>
          <h1 className='pb-2 font-secondary text-2xl font-medium text-primary'>
            Let&apos;s connect
          </h1>
          <div className='leading-relaxed text-black/70'>
            Let&apos;s explore how we can create something exceptional together.
          </div>
          <form
            className='mt-5 flex flex-col gap-4'
            onSubmit={onFormSubmit}
            ref={formRef}
          >
            <div className='flex lg:flex-row flex-col gap-4'>
              <input
                name='firstname'
                className='flex-1 rounded-2xl border border-black/10 bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-black/45 focus:border-primary focus:ring-2 focus:ring-primary/15'
                placeholder='Firstname'
                aria-label='First name'
                required
                autoComplete='off'
              />
              <input
                name='lastname'
                className='flex-1 rounded-2xl border border-black/10 bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-black/45 focus:border-primary focus:ring-2 focus:ring-primary/15'
                placeholder='Lastname'
                aria-label='Last name'
                required
                autoComplete='off'
              />
            </div>
            <div className='flex lg:flex-row flex-col gap-4'>
              <input
                name='email'
                className='flex-1 rounded-2xl border border-black/10 bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-black/45 focus:border-primary focus:ring-2 focus:ring-primary/15'
                placeholder='Email Address'
                aria-label='Email address'
                required
                type='email'
                autoComplete='off'
              />
              <input
                name='phone'
                className='flex-1 rounded-2xl border border-black/10 bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-black/45 focus:border-primary focus:ring-2 focus:ring-primary/15'
                placeholder='Phone Number'
                aria-label='Phone number'
                autoComplete='off'
                type='tel'
                inputMode='tel'
              />
            </div>
            <div className='flex md:flex-row flex-col gap-4'>
              <textarea
                name='message'
                className='flex-1 resize-none rounded-2xl border border-black/10 bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-black/45 focus:border-primary focus:ring-2 focus:ring-primary/15'
                placeholder='Please enter your message...'
                aria-label='Message'
                required
                rows={5}
                autoComplete='off'
              />
            </div>
            <div className='flex justify-center md:justify-start'>
              <button
                type='submit'
                className='h-10 w-52 rounded-full bg-primary text-sm font-semibold text-white transition-all duration-200 ease-in-out hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-[0.98] disabled:cursor-wait disabled:opacity-70'
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
        <div className='flex flex-1 flex-col items-start justify-center gap-6'>
          {phoneNumber && (
            <div className='flex items-center gap-4'>
              <div className='rounded-3xl bg-card p-4 text-primary'>
                <IoCall size={26} />
              </div>
              <div className='flex flex-col justify-center gap-1'>
                <div className='text-sm leading-tight text-black/60'>Phone</div>
                <a
                  href={`tel:+91${phoneNumber}`}
                  className='transition-colors hover:text-primary'
                >
                  +91 {phoneNumber}
                </a>
              </div>
            </div>
          )}
          <div className='flex gap-4'>
            <div className='rounded-3xl bg-card p-4 text-primary'>
              <MdAlternateEmail size={26} />
            </div>
            <div className='flex flex-col justify-center gap-1'>
              <div className='text-sm leading-tight text-black/60'>Email</div>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='mailto:shadman.afzal.7@gmail.com'
                className='transition-colors hover:text-primary'
              >
                shadman.afzal.7@gmail.com
              </a>
            </div>
          </div>
          <div className='flex gap-4'>
            <div className='rounded-3xl bg-card p-4 text-primary'>
              <MdLocationPin size={26} />
            </div>
            <div className='flex flex-col justify-center gap-1'>
              <div className='text-sm leading-tight text-black/60'>Address</div>
              <div>New Delhi, India</div>
            </div>
          </div>
          <div className='flex gap-4'>
            <div className='rounded-3xl bg-card p-4 text-primary'>
              <FaLinkedinIn size={26} />
            </div>
            <div className='flex flex-col justify-center gap-1'>
              <div className='text-sm leading-tight text-black/60'>LinkedIn</div>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.linkedin.com/in/shadman-afzal'
                className='transition-colors hover:text-primary'
              >
                linkedin/shadman-afzal
              </a>
            </div>
          </div>
        </div>
      </div>
      {showModal && modalData && (
        <div
          className='fixed inset-0 backdrop-blur-sm bg-black/40 flex justify-center items-center z-50'
          onClick={() => setShowModal(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className='relative bg-card p-6 rounded-xl shadow-xl w-[90%] sm:w-[380px] flex flex-col gap-4 text-center'
            onClick={(e) => e.stopPropagation()}
          >
            <div className='flex justify-center'>
              <IoCheckmarkCircleOutline className='text-primary' size={56} />
            </div>

            <div className='text-lg font-semibold '>
              Thanks for reaching out!
            </div>

            <div className='px-2 text-sm leading-relaxed text-black/70'>
              {modalData.message}
            </div>

            <button
              onClick={() => setShowModal(false)}
              className='mt-2 rounded-full bg-primary text-background font-secondary font-semibold text-sm px-5 py-2 active:scale-95 transition-all hover:opacity-90'
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </motion.section>
  );
}
