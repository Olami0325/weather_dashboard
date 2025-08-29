import React from 'react';
import { BiError } from 'react-icons/bi';

function ErrorBanner () {

    return (
        <div className="bg-red-100 text-red text-[10px] max-w-[150px] mx-auto p-3 rounded-md shadow-md text-center">
            <strong className="font-bold mb-1">Error!</strong>
            <span className="block">Unable to fetch weather data, please enter a valid city name.</span>
        </div>
    );
}

export default ErrorBanner;

