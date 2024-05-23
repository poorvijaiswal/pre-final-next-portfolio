
import React, { useState } from 'react';
import { LANGUAGE_VERSIONS } from './constants';

const languages = Object.entries(LANGUAGE_VERSIONS);

const LanguageSelector = ({ handleLanguageChange }) => {
    const [language, setLanguage] = useState(languages[0][0]); // Default to the first language
    const handleChange = (event) => {
        const selectedLanguage = event.target.value;
        setLanguage(selectedLanguage);
        handleLanguageChange(selectedLanguage);
    };
    return (
        <>
            <select
                onChange={handleChange}
                value={language}
                className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-color-dark-layer-1 text-[14px] border-none outline-none text-white"
            >
                {languages.map(([language, version]) => (
                    <option key={language} value={language}>
                        {language}
                        {/* v {version} */}
                    </option>
                ))}
            </select>
        </>
    );
};

export default LanguageSelector;