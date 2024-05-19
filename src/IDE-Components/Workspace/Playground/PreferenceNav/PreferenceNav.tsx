import React from 'react'
import { AiOutlineFullscreen, AiOutlineSetting } from 'react-icons/ai';

type PreferenceNavProps = {}

const PreferenceNav = (props: PreferenceNavProps) => {
    return (
        <div className='flex items-center justify-between bg-color-dark-layer-2 h-11 w-full '>
            <div className='flex items-center text-white'>
                <button className='flex cursor-pointer items-center rounded focus:outline-none bg-color-dark-fill-3 text-dark-label-2 hover:bg-color-dark-fill-2  px-2 py-1.5 font-medium'>
                    <div className='flex items-center px-1'>
                        <div className='text-xs text-label-2 dark:text-color-dark-label-2'>JavaScript</div>
                    </div>
                </button>
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
