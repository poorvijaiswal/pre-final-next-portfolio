import React from 'react'
import { AiOutlineFullscreen, AiOutlineSetting } from 'react-icons/ai';
import LanguageSelector from '@/IDE-Components/langSelector/LanguageSelector';
import { playgroundOP } from '@/utils/IDE-utils/types/problem';

type PreferenceNavProps = {
    handleLanguageChange: (language: string) => void;
    setWindow: (window: string) => void;
    window: string;
}

const PreferenceNav = ({ handleLanguageChange, window, setWindow }: PreferenceNavProps) => {

    return (
        <div className='flex items-center justify-between bg-color-dark-layer-2 h-11 w-full'>
            <div className='flex items-center'>
                <div className='flex cursor-pointer items-center rounded focus:outline-none bg-color-dark-fill-3 text-dark-label-2 hover:bg-color-dark-fill-2  px-2 py-1.5 font-medium'>
                    <div className='flex items-center px-1'>
                        <div className='text-xs text-label-2 dark:text-color-dark-label-2'>
                            <LanguageSelector handleLanguageChange={handleLanguageChange} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex'>
                <div>
                    {playgroundOP.map((op, index) => (
                        <div
                            key={index}
                            className={`cursor-pointer ${window === op.name ? 'bg-color-dark-fill-3 text-white' : 'text-color-dark-label-2'} font-medium px-2 py-1.5 float-start rounded-md mx-1`}
                            onClick={() => setWindow(op.name)}
                        >
                            {op.name}
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex items-center m-2'>
                <button
                    className='preferenceBtn group'
                // onClick={() => setSettings({ ...settings, settingsModalIsOpen: true })}
                >
                    <div className='h-4 w-4 text-color-dark-gray-6 font-bold text-lg'>
                        <AiOutlineSetting />
                    </div>
                    <div className='preferenceBtn-tooltip'>Settings</div>
                </button>

                <button className='preferenceBtn group'
                // onClick={handleFullScreen}
                >
                    <div className='h-4 w-4 text-color-dark-gray-6 font-bold text-lg'>
                        <AiOutlineFullscreen />
                    </div>
                    <div className='preferenceBtn-tooltip'>Full Screen</div>
                </button>
            </div>
            {/* {settings.settingsModalIsOpen && <SettingsModal settings={settings} setSettings={setSettings} />} */}
        </div>
    );
}

export default PreferenceNav
