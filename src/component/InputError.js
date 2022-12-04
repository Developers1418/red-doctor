import React from "react";

export const InputError = (props) => {
  return (
    <div className={`${props.styles}`}>
      <p className=' flex items-center  px-2 py-1 rounded-[18px] font-semibold text-[10px] text-[#FF0000] bg-[#FF000020]'>
        <svg
          width='10'
          height='10'
          viewBox='0 0 10 10'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M5 4.0625V5.3125'
            stroke='#FF0000'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M4.45908 1.5619L1.02251 7.4991C0.967521 7.5941 0.938522 7.70191 0.938431 7.81168C0.93834 7.92145 0.967161 8.02931 1.02199 8.1244C1.07683 8.21949 1.15573 8.29847 1.25078 8.35338C1.34583 8.40829 1.45366 8.4372 1.56343 8.4372H8.43658C8.54635 8.4372 8.65418 8.40829 8.74923 8.35338C8.84428 8.29847 8.92319 8.2195 8.97802 8.1244C9.03285 8.02931 9.06167 7.92145 9.06158 7.81168C9.06149 7.70191 9.03249 7.5941 8.9775 7.4991L5.54092 1.5619C5.48602 1.46705 5.40715 1.38831 5.31221 1.33356C5.21726 1.27882 5.1096 1.25 5 1.25C4.89041 1.25 4.78274 1.27882 4.6878 1.33356C4.59286 1.38831 4.51398 1.46705 4.45908 1.5619V1.5619Z'
            stroke='#FF0000'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M5 7.5C5.34518 7.5 5.625 7.22018 5.625 6.875C5.625 6.52982 5.34518 6.25 5 6.25C4.65482 6.25 4.375 6.52982 4.375 6.875C4.375 7.22018 4.65482 7.5 5 7.5Z'
            fill='#FF0000'
          />
        </svg>{" "}
        <span className='ml-2'>{props.children}</span>
      </p>
    </div>
  );
};
export const InputError2 = (props) => {
  return (
    <div className={`${props.styles}`}>
      <p className=' flex items-center  px-2 py-1 rounded-[18px] font-semibold text-[10px] text-[#FF0000] bg-[#FF000020]'>
        <svg
          width='15'
          height='15'
          viewBox='0 0 10 10'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M5 4.0625V5.3125'
            stroke='#FF0000'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M4.45908 1.5619L1.02251 7.4991C0.967521 7.5941 0.938522 7.70191 0.938431 7.81168C0.93834 7.92145 0.967161 8.02931 1.02199 8.1244C1.07683 8.21949 1.15573 8.29847 1.25078 8.35338C1.34583 8.40829 1.45366 8.4372 1.56343 8.4372H8.43658C8.54635 8.4372 8.65418 8.40829 8.74923 8.35338C8.84428 8.29847 8.92319 8.2195 8.97802 8.1244C9.03285 8.02931 9.06167 7.92145 9.06158 7.81168C9.06149 7.70191 9.03249 7.5941 8.9775 7.4991L5.54092 1.5619C5.48602 1.46705 5.40715 1.38831 5.31221 1.33356C5.21726 1.27882 5.1096 1.25 5 1.25C4.89041 1.25 4.78274 1.27882 4.6878 1.33356C4.59286 1.38831 4.51398 1.46705 4.45908 1.5619V1.5619Z'
            stroke='#FF0000'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M5 7.5C5.34518 7.5 5.625 7.22018 5.625 6.875C5.625 6.52982 5.34518 6.25 5 6.25C4.65482 6.25 4.375 6.52982 4.375 6.875C4.375 7.22018 4.65482 7.5 5 7.5Z'
            fill='#FF0000'
          />
        </svg>{" "}
        <span className='ml-2'>{props.children}</span>
      </p>
    </div>
  );
};
