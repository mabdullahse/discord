import {
  Link,
  Outlet,
  useLocation,
  Routes,
  Route
} from "react-router-dom";
import Servers from "./pages/Servers";
import DiscordIcon from './svg/DiscordIcon';

let servers = [
  { id: "1", img: "tailwind.png" },
  { id: "2", img: "next.png" },
  { id: "3", img: "mirage.png" },
];

function App() {
  const route = useLocation();

  return (
    <div className='flex flex-row h-screen'>
      <div className='bg-gray-900  flex-col text-white p-3 space-y-2 overflow-y-auto no-scrollbar hidden md:flex' >

        <NavLink href="/"> <DiscordIcon className="h-6 w-7" /> </NavLink>
        <hr className="border-t-white/10 w-8 border-t-2 mx-auto rounded-3xl" />

        {servers.map((server) => {
          return (<NavLink href={`/server/${server.id}`}> <img src={`/server/${server.img}`} key={server.id} /> </NavLink>)
        })}
        {
          [...Array(40)].map(e => Math.random() * 40 | 0).map((item, index) => {

            return (
              <NavLink href={`/server/${index + 10}`}>
                <img src={`https://picsum.photos/200/300?random=${index}`} key={index} />
              </NavLink>
            );
          })

        }
      </div>

      <Outlet />

    </div>
  )
}

export default App

function NavLink(props) {
  const route = useLocation();
  return (
    <Link to={props.href} >
      <div className="relative group">
        <div className="absolute -left-3 h-full flex items-center">
          <div className={`
        ${route.pathname === props.href ? 'h-10 opacity-100  scale-100' : ' h-5 opacity-0 group-hover:opacity-100  scale-0 group-hover:scale-100'}    
      bg-white  w-1 rounded-r
        transition-all duration-300
        origin-left
        `}></div>
        </div>
        <div className="group-active:translate-y-px">
          <div className={` 
           ${route.pathname == props.href ?
              'rounded-2xl bg-purple-800 text-white/80 ' : 'group-hover:rounded-2xl group-hover:bg-purple-800 bg-gray-700 group-hover:text-white/80'}
         text-sm  w-12 h-12 cursor-pointer flex items-center  rounded-3xl
          justify-center transition-all ease-out duration-300 
          overflow-hidden`}>
            {props.children}
          </div>
        </div>
      </div>
    </Link>
  )
}


