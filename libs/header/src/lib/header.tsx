import Link from 'next/link';
import styles from './header.module.scss'

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
    <div className={styles.header}>
        <Link href={'/'}>
            <img id='logo-img' src={'https://s3.amazonaws.com/heights-photos/wp-content/uploads/2021/09/26192503/the_heights_header-1.png'}
            width={375} height={110} alt={'Logo'} />
        </Link>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <div className={styles.navbar}>
                {navItems.map((item, index) => (
                    <div className={styles.navcontainer} key={index}>
                        <div className={styles.navitem}>
                            <Link href={`/${item.label.toLowerCase()}`}>
                                {item.label}
                            </Link>
                            {item.dropdownOptions.length > 0 && (
                                <div className={styles.dropdown}>
                                    {item.dropdownOptions.map((option, index) => (
                                        <Link key={index} href={`/${item.label.toLowerCase()}/${option.toLowerCase().replace(' ', '-')}`}>
                                            {option}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                        {index < navItems.length - 1 && (
                            <div className={styles.divider}/>
                        )}
                    </div>
                ))}
            </div>
        </div>
    </div>
    )
}

export default Header;
