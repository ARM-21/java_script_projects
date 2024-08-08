import './searchBy.css'

export default function SearchBy({ src ,oninput,onchange}) {
    return (

        <span className='search_section_container'>
            <div className="search_section">
                <span className='search_country'>
                    <img src={src} alt="search-icon" />
                    <input type="text" placeholder="search for a country" onInput={(e)=>{
                        oninput(e.target.value)
                    }} />
                </span>
                <span className='filter_section'>
                    <select onChange={(e)=>{
                        onchange(e.target.value)
                    }}>
                        <option value="Filter By Region" hidden>Filter By Region</option>
                        {/* <option value="All">All</option> */}
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="America">America</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </span>
            </div>
        </span>
    )
}