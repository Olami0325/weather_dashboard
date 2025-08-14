import React from 'react';

function ErrorBanner () {

    return (
        <div className="bg-red-100 text-red text-[10px] 800 max-w-[150px] mx-auto p-3 rounded-md shadow-md text-center">
            <strong className="font-bold">Error!</strong>
            <span className="block">Unable to fetch weather data, please try again later.</span>
        </div>
    );
}

export default ErrorBanner;

