import { ReactNode } from "react";


export const Loading = () =>
<button
    type="button"
        className="
        tw-inline-flex
        tw-items-center
        tw-px-4
        tw-py-2
        tw-font-semibold
        tw-leading-6
        tw-text-sm
        tw-shadow
        tw-rounded-md
        tw-text-white
        tw-bg-indigo-500
        tw-hover:bg-indigo-400
        tw-transition
        tw-ease-in-out
        tw-duration-150
        tw-cursor-not-allowed"
    disabled
>
    <svg 
        className="
            tw-animate-spin
            tw--ml-1
            tw-mr-3
            tw-h-5
            tw-w-5
            tw-text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
    >
        <circle className="tw-opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="tw-opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    
    Processing...
</button>