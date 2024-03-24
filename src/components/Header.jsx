import { NavLink } from "react-router-dom";

export default function Header() {

    return (
        <div className="flex flex-row justify-between self-stretch max-md:flex-wrap max-lg:px-5 max-md:px-5 z-50 py-4">
            <div className="flex-auto my-auto text-3xl font-bold text-violet-100">
                <NavLink to="/" className={'px-2 py-1 rounded-t-2xl hover:border-b-2 transition'}>Alex Kefer</NavLink>
            </div>
            <div
                className="flex gap-8 justify-between text-2xl font-bold tracking-wide uppercase text-violet-100 max-md:flex-wrap max-md:max-w-full">
                <NavLink
                    to="/about"
                    className={({isActive}) =>
                        `whitespace-nowrap ${isActive ? 'border-b-2 border-violet-100' : 'hover:border-b-2'}`
                    }
                >
                    About
                </NavLink>

                <NavLink
                    to="/projects"
                    className={({isActive}) =>
                        `whitespace-nowrap ${isActive ? 'border-b-2 border-violet-100' : 'hover:border-b-2'}`
                    }
                >
                    Projects
                </NavLink>

                <NavLink
                    to="/contact"
                    className={({isActive}) =>
                        `whitespace-nowrap ${isActive ? 'border-b-2 border-violet-100' : 'hover:border-b-2'}`
                    }
                >
                    Contact
                </NavLink>
            </div>
        </div>
    );
}