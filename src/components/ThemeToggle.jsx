import React from 'react';
import { WiMoonAltWaxingCrescent2 } from "react-icons/wi";

function ThemeToggle () {
    return (
        <div className='flex items-center justify-center gap-2'>
            <button><span><WiMoonAltWaxingCrescent2 className='text-gray-900' size={20} /></span></button>
        </div>
    );
}

export default ThemeToggle;