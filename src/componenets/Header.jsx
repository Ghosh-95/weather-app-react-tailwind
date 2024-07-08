import { useState } from "react"

export default function Header() {
    const [isSearrchViewActive, setSearchViewActive] = useState(false);
    const [searching, setSearching] = useState(false);

    return (
        <header className="lg:relative lg:h-[9rem] lg:top-0">
            <div className="container lg:h-full lg:pb-0 flex justify-between items-center">
                <a href="#">
                    <img
                        className="w-[150px] lg:w-[200px]"
                        src="../src/assets/weathers-logo-white.png" alt="logo" width={264} height={58} />
                </a>

                {/* data search view */}
                <div className={`fixed left-0 top-0 w-full h-[100svh] md:h-[100vh] bg-surface text-surfaceOn z-10 ${isSearrchViewActive ? 'search-view-clip-active' : 'search-view-clip'} lg:[all:unset] search-view`}>
                    {/* search wrapper */}
                    <form action=""
                        id="search-field"
                        className={`relative border-b border-outline border-solid lg:border-none search-loader ${searching ? 'before:block' : 'before:hidden'} mb-3`}>

                        <label htmlFor="search-bar">
                            <input
                                type="search" name="search-city" placeholder="Search city..." id="search-bar"
                                onChange={() => setSearching(true)}
                                onKeyUp={() => setTimeout(() => {
                                    setSearching(false);
                                }, 500)}

                                className="h-20 leading-[5rem] pl-[5rem] pr-4 placeholder:text-surfaceVariantOn-2 search lg:bg-surface lg:h-14 lg:rounded-28"
                                autoComplete="off" />

                            <span className={`m-icon hidden lg:block absolute top-[1.9rem] -translate-x-1/2 -translate-y-1/2 left-[2.5rem]`}>search</span>
                        </label>

                        <button className="icon-btn lg:hidden bg-transparent leading-icon has-state absolute -top-[2.3rem] -translate-x-1/2 -translate-y-1/2 left-[2.5rem]" aria-label="close-search"
                            onClick={() => setSearchViewActive(false)}>
                            <span className="m-icon lg:block">arrow_back</span>
                        </button>
                    </form>

                    {/* search result, data-search-result */}
                    <div className={`${isSearrchViewActive ? 'lg:block' : 'lg-hidden'} search-result`}>
                        {/* view list, data-search-list */}
                        <ul className="pt-2 pb-4 lg:bg-surface large-view-list z-[99999999]">
                            {/* view-item */}
                            <li className="relative h-[5.2rem] flex justify-start items-center gap-4 pl-4 pr-6 mb-8">
                                {/* icon */}
                                <span className="m-icon text-surfaceVariantOn">location_on</span>

                                <div>
                                    {/* title */}
                                    <p>London</p>

                                    {/* subtitle */}
                                    <p className="text-surfaceVariantOn">State of London, GB</p>
                                </div>

                                {/* data-search-toggler */}
                                <a href="#" id="item-link" className="has-state"></a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* header-actions */}
                <div className="flex justify-between items-center md:gap-6 gap-4">
                    {/* data-search-toggler */}
                    <button onClick={() => setSearchViewActive(true)} className="icon-btn lg:hidden bg-white-alpha-8 has-state">
                        <span className="m-icon">search</span>
                    </button>


                    {/* data-current-locatioin-butn */}
                    <a href="#/current-location" className="hidden btn-primary has-state">

                        <span className="m-icon">my_location</span>
                        <span className="span pr-1 hidden md:block">Current Location</span>
                    </a>
                </div>
            </div>
        </header>
    )
}