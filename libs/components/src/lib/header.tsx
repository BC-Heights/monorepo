import Link from 'next/link';

export function Header() {
  const navItems = [
    { label: 'E-Edition', dropdownOptions: [] },
    {
      label: 'News',
      dropdownOptions: [
        'Academics',
        'Administration',
        'On Campus',
        'Off Campus',
      ],
    },
    {
      label: 'Sports',
      dropdownOptions: [
        'Fall',
        'Winter',
        'Spring',
        'Athletics News',
        'Sports Column',
        'Football',
        'Field Hockey',
        'Volleyball',
        'Soccer',
        'Tennis',
        'Basketball',
        'Hockey',
        'Baseball',
        'Softball',
        'Lacrosse',
      ],
    },
    {
      label: 'Arts',
      dropdownOptions: [
        'On Campus',
        'Off Campus',
        'Arts Features',
        'Movies',
        'Music',
        'Television',
        'Books',
        'Arts Column',
        'iEdit',
        'Arts Festival 2022',
      ],
    },
    {
      label: 'Opinions',
      dropdownOptions: [
        'Editorials',
        'Columns',
        'Op-Ed',
        'Letters to the Editor',
        'Letter from the Editor',
        'Thumbs Up, Thumbs Down',
      ],
    },
    {
      label: 'Newton',
      dropdownOptions: [
        'Newton',
        'City Arts',
        'Food',
        'Metro Features',
        'City Columns',
        'Business',
        'Politics',
        'Newton Override Election',
      ],
    },
    {
      label: 'Magazine',
      dropdownOptions: [
        'Homemade on the Heights',
        'Tips',
        'Trends',
        'Profiles',
        'Long-form Features',
      ],
    },
    { label: 'Multimedia', dropdownOptions: [] },
    { label: 'Games', dropdownOptions: ['Crossword'] },
  ];

  return (
    <div className=" hidden w-full  flex-col items-center lg:flex">
      <Link href={'/'}>
        <img
          className="h-[110px] w-[375px]"
          src={
            'https://s3.amazonaws.com/heights-photos/wp-content/uploads/2021/09/26192503/the_heights_header-1.png'
          }
          alt={'Logo'}
        />
      </Link>
      <div
        className="flex h-[2.5em] w-[calc(90%-64px)] items-center justify-between gap-8 
                            border-b border-t-2 border-black px-8"
      >
        {navItems.map((item, index) => (
          <>
            <div className="flex h-full items-center gap-8">
              <div className="group relative font-medium">
                <Link href={`/${item.label.toLowerCase()}`}>{item.label}</Link>
                {item.dropdownOptions.length > 0 && (
                  <div
                    className="absolute z-50 hidden w-max grid-cols-[fit-content(200px)_fit-content(200px)] 
                                                gap-x-5 rounded
                                                border border-gray-300 bg-white p-2 font-normal shadow-md group-hover:grid"
                  >
                    {item.dropdownOptions.map((option, index) => (
                      <Link
                        key={index}
                        href={`/${item.label.toLowerCase()}/${option
                          .toLowerCase()
                          .replace(' ', '-')}`}
                      >
                        {option}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
            {index < navItems.length - 1 && (
              <div className="h-[60%] w-px bg-gray-400" />
            )}
          </>
        ))}
      </div>
    </div>
  );
}

export default Header;
