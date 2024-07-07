import React from 'react'
import { MdOutlineHealthAndSafety , MdOutlineSyncLock} from "react-icons/md";
import { LuTestTube } from "react-icons/lu";
import { FaUserDoctor } from "react-icons/fa6";
import { BsClockHistory } from "react-icons/bs";
const Services = () => {
  return (
  

<section>
  <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
      <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
        <h2 className="text-3xl font-bold sm:text-4xl">Find your Reasons!</h2>

        <p className="mt-4 text-gray-600">
        We deliver unmatched results and comprehensive packages tailored to your needs. Experience superior care with transparent pricing and innovative solutions, guiding you towards optimal health with peace of mind.




        </p>

        <a
          href="#"
          className="mt-8 inline-block rounded bg-green-800 px-12 py-3 text-sm font-medium text-white transition hover:bg-black focus:outline-none focus:ring focus:ring-white-400"
        >
          Register Here
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        <a
          className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="#"
        >
          <span className="inline-block rounded-lg bg-gray-50 p-3">
          <MdOutlineHealthAndSafety className='text-2xl'/>
          </span>

          <h2 className="mt-2 font-bold">Shield</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Your forever shield against diseases
          </p>
        </a>

        <a
          className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="#"
        >
          <span className="inline-block rounded-lg bg-gray-50 p-3">
          <LuTestTube className='text-2xl' />
          </span>

          <h2 className="mt-2 font-bold">Tests</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Providing the best tests
          </p>
        </a>

        <a
          className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="#"
        >
          <span className="inline-block rounded-lg bg-gray-50 p-3">
          <FaUserDoctor className='text-2xl'/>
          </span>

          <h2 className="mt-2 font-bold">A+ Doctors</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
          Bringing you the best doctors
          </p>
        </a>

        <a
          className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="#"
        >
          <span className="inline-block rounded-lg bg-gray-50 p-3">
          <BsClockHistory className='text-2xl'/>
          </span>

          <h2 className="mt-2 font-bold">Bookings</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            24 hours booking always there
          </p>
        </a>

        <a
          className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="#"
        >
          <span className="inline-block rounded-lg bg-gray-50 p-3">
          <MdOutlineSyncLock  className='text-2xl'/>
          </span>

          <h2 className="mt-2 font-bold">History</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
          A complete track of your testing history
          </p>
        </a>

        <a
          className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="#"
        >
          <span className="inline-block rounded-lg bg-gray-50 p-3">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <h2 className="mt-2 font-bold">Service</h2>

          <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Top Notch Staff to guide you
          </p>
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Services