import React, { Fragment, useState } from 'react';
import {
    Link,
    Outlet,
    useLocation,
    useResolvedPath,
    useRoutes,
    useParams,
    NavLink
} from "react-router-dom";
import DownArrow from '../svg/DownArrow';
import Cloud from '../svg/Cloud';
import Tick from '../svg/Tick';
import { Verified, Check, Arrow, Book, Speakerphone, AddPerson, Hashtag } from '../svg/Icons';
import * as Icons from '../svg/Icons';
import channels from '../data.json'
import Message from '../components/Message';

function Servers() {
    const location = useLocation();
    const { serverId } = useParams();

    let [closedCategories, setClosedCategories] = useState([]);

    function toggleCategory(categoryId) {
        setClosedCategories((closedCategories) =>
            closedCategories.includes(categoryId)
                ? closedCategories.filter((id) => id !== categoryId)
                : [...closedCategories, categoryId]
        );
    }

    return (
        <Fragment>

            <div className='bg-gray-800  text-white w-60  flex-col hidden md:flex'>
                <button className='px-4 h-12 shadow-sm shrink-0 hover:bg-gray-700 cursor-pointer transition-all duration-300 flex items-center font-serif'>

                    <div className='relative w-4 h-4'>
                        <Tick className="w-4 h-4 absolute text-slate-50" />
                        <Cloud className="w-4 h-4   text-gray-600 " />
                    </div>
                    <p className='ml-1 text-[15px] font-title font-semibold'>
                        Tailwind CSS
                    </p>
                    <div className='ml-auto'>
                        <Arrow className="w-[24px] h-[24px] opacity-80" />
                    </div>

                </button>

                <div className='overflow-y-auto no-scrollbar mt-[17px]'>
                    <div className='space-y-0.5'>
                        <div className='group mx-3 p-1 rounded cursor-pointer hover:bg-gray-550/30'>
                            <div className='flex items-center'>
                                <Book className="w-5 h-5 text-gray-500 mr-1.5 group-hover:text-gray-400" />
                                <p className='text-gray-300  text-md group-hover:text-gray-100'>
                                    welcome
                                </p>
                                <AddPerson className="w-5 h-5 text-gray-200 ml-auto opacity-0 group-hover:opacity-100" />
                            </div>
                        </div>
                        <div className='group mx-3 p-1 rounded cursor-pointer hover:bg-gray-550/30'>
                            <div className='flex items-center  '>
                                <Speakerphone className="w-5 h-5 text-gray-500 mr-1.5 group-hover:text-gray-400 " />
                                <p className='text-gray-300  text-md group-hover:text-gray-100'>
                                    announcements
                                </p>
                                <AddPerson className="w-5 h-5 text-gray-200 ml-auto opacity-0 group-hover:opacity-100" />
                            </div>
                        </div>
                    </div>


                    {channels["1"].categories.map(channel => {
                        return (
                            <div className='mt-5 ' key={channel.id}>
                                <div className='flex items-center mx-0.5 cursor-pointer group' onClick={() => toggleCategory(channel.id)}>
                                    <Arrow className={`${closedCategories.includes(channel.id) ? "-rotate-90" : ""
                                        } w-3 h-3 mr-0.5 transition duration-200`} />
                                    <p className='uppercase font-title ml-[2px] text-gray-300 group-hover:text-gray-50  text-[12px] tracking-wide' >
                                        {channel.label}
                                    </p>
                                </div>

                                <div className='mt-[4px] space-y-0.5'>

                                    {channel.channels.map(item => {
                                        return (<ChannelDetails item={item} pathname={`server/${serverId}`} />)
                                    })}
                                </div>
                            </div>
                        )
                    }
                    )}
                </div>
            </div>
            <Outlet />

        </Fragment>
    );
}

export default Servers;



function ChannelDetails({ item, pathname }) {
    const location = useLocation();
    let url = '/' + pathname + '/channel/' + item.id
    let isChannelIsActive = location.pathname === url ? true : false;

    return (
        <NavLink to={`${url}`}
            className={(props) => { }}
        >
            <div className={` ${isChannelIsActive ? 'bg-gray-100/10 text-gray-100' : 'hover:bg-gray-100/10 hover:text-gray-100'} 
            group mx-3 p-1 rounded cursor-pointer
            font-medium text-md
            flex items-center
            relative
            `}>
                <div className='w-1 h-2 bg-white rounded-r-md absolute -left-3'></div>
                <Hashtag className="w-5 h-5 mr-1.5 text-gray-500 group-hover:text-gray-400" />
                {item.label}
                <AddPerson className={`w-5 h-5 text-gray-200 ml-auto ${isChannelIsActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} `} />
            </div>
        </NavLink>
    )
}



export function MessageDetail(props) {
    return (

        <div className='bg-gray-700 text-white flex-1 flex flex-col flex-shrink min-w-0 overflow-clip'>
            <div className='shadow-sm h-12 flex items-center p-3'>
                <p className='font-bold text-lg tracking-wider'>TailwindCSS</p>

                <div className='whitespace-nowrap overflow-hidden truncate ml-3 hidden md:block '>
                    lorem Tailwind includes an expertly-crafted default color palette out-of-the-box that is a great starting
                    point if you don’t have your own specific branding in mind.
                </div>

                <div className="flex items-center ml-auto">
                    <button className="text-gray-200 hover:text-gray-100">
                        <Icons.HashtagWithSpeechBubble className="w-6 h-6 mx-2" />
                    </button>
                    <button className="text-gray-200 hover:text-gray-100">
                        <Icons.Bell className="w-6 h-6 mx-2" />
                    </button>
                    <button className="text-gray-200 hover:text-gray-100 hidden md:block">
                        <Icons.Pin className="w-6 h-6 mx-2" />
                    </button>
                    <button className="text-gray-200 hover:text-gray-100 hidden md:block">
                        <Icons.People className="w-6 h-6 mx-2" />
                    </button>
                    <div className='relative hidden md:block'>
                        <input placeholder='Search' type="text"
                            className="
                            bg-gray-900 w-[144px] h-6 placeholder-gray-300 pl-2 rounded 
                            focus-within::border-0 focus-within:outline-none" />
                        <div className='absolute right-1 inset-y-0 flex items-center'>
                            <Icons.Spyglass className="w-5 h-5   text-gray-600" />
                        </div>
                    </div>
                    <button className="text-gray-200 hover:text-gray-100 hidden md:block">
                        <Icons.Inbox className="w-6 h-6 mx-2" />
                    </button>
                    <button className="text-gray-200 hover:text-gray-100 hidden md:block">
                        <Icons.QuestionCircle className="w-6 h-6 mx-2" />
                    </button>
                </div>
            </div>

            <div className=' p-3 h-full overflow-y-auto space-y-3 mr-16 no-scrollbar'>

                <Message />
            </div>
        </div>
    )
}
