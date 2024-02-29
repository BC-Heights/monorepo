import Link from 'next/link';

interface DropdownOption {
  name: string;
  link?: string;
}

interface HeaderOption {
  name: string;
  dropdownOptions: DropdownOption[];
  link?: string;
}

class HeaderOptions implements HeaderOption {
  name: string;
  dropdownOptions: DropdownOption[];
  link?: string;

  constructor(name: string, dropdownOptions: DropdownOption[], link?: string) {
    this.name = name;
    this.link = link || name.toLowerCase().replace(/ /g, '-');
    this.dropdownOptions = dropdownOptions.map((option) => ({
      ...option,
      link: `${this.link}/${option.link || option.name.toLowerCase().replace(/ /g, '-')}`,
    }));
  }
}

export function Header() {
  const navItems = [
    new HeaderOptions('E-Edition', []),
    new HeaderOptions('News', [
      { name: 'Academics' },
      { name: 'Administration' },
      { name: 'On Campus' },
      { name: 'Off Campus' },
    ]),
    new HeaderOptions('Sports', [
      { name: 'Fall' },
      { name: 'Winter' },
      { name: 'Spring' },
      { name: 'Athletics News' },
      { name: 'Sports Column', link: 'column' },
      { name: 'Football' },
      { name: 'Field Hockey' },
      { name: 'Volleyball' },
      { name: 'Soccer' },
      { name: 'Tennis' },
      { name: 'Basketball' },
      { name: 'Hockey' },
      { name: 'Baseball' },
      { name: 'Softball' },
      { name: 'Lacrosse' },
    ]),
    new HeaderOptions('Arts', [
      { name: 'On Campus' },
      { name: 'Off Campus' },
      { name: 'Arts Features', link: 'features' },
      { name: 'Movies' },
      { name: 'Music' },
      { name: 'Television' },
      { name: 'Books' },
      { name: 'Arts Column', link: 'column' },
      { name: 'iEdit' },
    ]),
    new HeaderOptions('Opinions', [
      { name: 'Editorials' },
      { name: 'Columns' },
      { name: 'Op-Ed' },
      { name: 'Letters to the Editor' },
      { name: 'Letter from the Editor' },
      { name: 'Thumbs Up, Thumbs Down', link: 'thumbs-up-thumbs-down' },
    ]),
    new HeaderOptions('Newton', [
      { name: 'City Arts' },
      { name: 'Food' },
      { name: 'Metro Features', link: 'features' },
      { name: 'City Columns', link: 'column' },
      { name: 'Business' },
      { name: 'Politics' },
      { name: 'Newton Override Election', link: 'override-election' },
    ]),
    new HeaderOptions('Magazine', [
      { name: 'Homemade on the Heights', link: 'homemade' },
      { name: 'Tips' },
      { name: 'Trends' },
      { name: 'Profiles' },
      { name: 'Long-form Features', link: 'long-form' },
    ]),
    new HeaderOptions('Multimedia', []),
    new HeaderOptions('Games', [{ name: 'Crossword' }]),
  ];

  return (
    <div className=" hidden w-full flex-col items-center lg:flex">
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
        className="flex h-[2.5em] w-[calc(90%-64px)] 
                   items-center justify-between gap-8 
                   border-b border-t-2 border-black px-8"
      >
        {navItems.map((item, index) => (
          <>
            <div className="flex h-full items-center gap-8">
              <div className="group relative font-medium">
                <Link href={`/${item.link}`}>{item.name}</Link>
                {item.dropdownOptions.length > 0 && (
                  <div
                    className="absolute z-50 hidden w-max 
                               grid-cols-[fit-content(200px)_fit-content(200px)] 
                               gap-x-5 rounded border border-gray-300 bg-white 
                               p-2 font-normal shadow-md group-hover:grid"
                  >
                    {item.dropdownOptions.map((option, index) => (
                      <Link key={index} href={option.link as string}>
                        {option.name}
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
