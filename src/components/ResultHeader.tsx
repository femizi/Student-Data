import React from 'react'

const ResultHeader = ({ logo, profilepicture }) => {
    return (
        <div className='header mt-6 flex  w-screen mb-20 text-center '>
            <div className='relative'>
                <img src={logo} alt='logo'></img>
                <div className='font-bold text-xl bg-white p-3 rounded-full absolute top-5 right-0 z-10'>FCE</div>
            </div>
            <div className='flex-grow'>
                <h2 className='font-bold text-base text-[#4F4F4F] mb-2'>FREMONT COLLEGE OF EDUCATION</h2>
                <address className='text-xs text-[#4F4F4F] mb-2'> No.5 Raymond Osuman Street, PMB 2191 Maitama, Abuja, Nigeria.</address>
                <h1 className='font-semibold text-xl text-[#333333] mb-3'>Post Graduate Diploma in Education</h1>
                <h3 className='font-bold text-xs text-[#333333] '>Student First Semester Statement Of Result</h3>
            </div>
            <div className='-ml-5'>
                <img src={profilepicture} alt="picture of student" />
            </div>
        </div>
    )
}

export default ResultHeader