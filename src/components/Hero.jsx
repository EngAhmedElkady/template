import React from 'react';

const Hero = () => {

    const downloadFile = () => {
        const link = document.createElement('a');
        link.href = './warsha-3.apk'; // Use the correct path to the file in the public folder
        link.setAttribute('download', 'app-v1.0.apk'); // Filename when downloaded
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); // Clean up link after download
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-white to-blue-500">
            <div className="text-center max-w-lg">
                <h1 className="text-5xl font-extrabold text-black lg:text-6xl animate-fade-in-up">
                    Alwarsha
                </h1>
                <p className="mt-6 text-xl text-gray-900 dark:text-gray-800 animate-fade-in-up delay-200">
                    We have an app with version 1.0 you can download it from here.
                </p>
                <button
                    onClick={downloadFile}
                    className="px-8 py-4 mt-10 text-lg font-semibold text-center text-blue-600 capitalize bg-white rounded-full shadow-lg hover:bg-gray-200 focus:outline-none animate-bounce delay-300"
                >
                    Download
                </button>
            </div>
        </div>
    );
}

export default Hero;
