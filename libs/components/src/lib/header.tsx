import Link from 'next/link';

export function Header() {
    const navItems = [
        { label: 'E-Edition', dropdownOptions: [] },
        { 
            label: 'News', 
            dropdownOptions: ['Academics', 'Administration', 'On Campus', 'Off Campus'] },
        { 
            label: 'Sports', 
            dropdownOptions: [
                "Fall",
                "Winter",
                "Spring",
                "Athletics News",
                "Sports Column",
                "Football",
                "Field Hockey",
                "Volleyball",
                "Soccer",
                "Tennis",
                "Basketball",
                "Hockey",
                "Baseball",
                "Softball",
                "Lacrosse"
            ] 
        },
            { 
                label: 'Arts', 
                dropdownOptions: [
                  "On Campus",
                  "Off Campus",
                  "Arts Features",
                  "Movies",
                  "Music",
                  "Television",
                  "Books",
                  "Arts Column",
                  "iEdit",
                  "Arts Festival 2022"
                ] 
              },
            { 
                label: 'Opinions', 
                dropdownOptions: [
                  "Editorials",
                  "Columns",
                  "Op-Ed",
                  "Letters to the Editor",
                  "Letter from the Editor",
                  "Thumbs Up, Thumbs Down"
                ] 
              },
              { 
                label: 'Newton', 
                dropdownOptions: [
                  "Newton",
                  "City Arts",
                  "Food",
                  "Metro Features",
                  "City Columns",
                  "Business",
                  "Politics",
                  "Newton Override Election"
                ] 
              },
        { 
            label: 'Magazine', 
            dropdownOptions: [
                "Homemade on the Heights",
                "Tips",
                "Trends",
                "Profiles",
                "Long-form Features"
              ] 
            },
        { label: 'Multimedia', dropdownOptions: [] },
        { label: 'Games', dropdownOptions: ["Crossword"] },
    ];

    return (
        <div className=" hidden w-full  lg:flex flex-col items-center">
            <Link href={'/'}>
                <img className="w-[375px] h-[110px]" 
                     src={'https://s3.amazonaws.com/heights-photos/wp-content/uploads/2021/09/26192503/the_heights_header-1.png'} 
                     alt={'Logo'} />
            </Link>
            <div className="w-[calc(90%-64px)] px-8 h-[2.5em] flex 
                            justify-center items-center 
                            border-t-2 border-b border-black gap-8">
                {navItems.map((item, index) => (
                    <div className="h-full flex items-center gap-8" key={index}>
                        <div className="relative font-medium group">
                            <Link href={`/${item.label.toLowerCase()}`}>
                                {item.label}
                            </Link>
                            {item.dropdownOptions.length > 0 && (
                                <div className="hidden absolute z-50 w-max font-normal 
                                                group-hover:grid grid-cols-[fit-content(200px)_fit-content(200px)]
                                                gap-x-5 shadow-md bg-white p-2 rounded border border-gray-300">
                                    {item.dropdownOptions.map((option, index) => (
                                        <Link key={index} href={`/${item.label.toLowerCase()}/${option.toLowerCase().replace(' ', '-')}`}>
                                            {option}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                        {index < navItems.length - 1 && (
                            <div className="w-px h-[60%] bg-gray-400"/>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Header;
