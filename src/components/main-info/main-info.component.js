import './main-info.styles.scss';
import technologies from 'information/technologies';
import profileInfo from 'information/profileinfo';
import TechInfo from 'components/tech-info/tech-info.component';
import Link from 'components/link/link.component';

const MainInfo = ({
  allFilters,
  setAllFilters,
  filteredTechnologies,
  setFilteredTechnologies,
  githubProfile,
  linkedInProfile,
}) => {
  const filterTechnologies = (tech) => () => {
    setFilteredTechnologies({
      ...filteredTechnologies,
      [tech]: !filteredTechnologies[tech],
    });
    setAllFilters(false);
  };
  const clearTechnologiesFilter = () => {
    setFilteredTechnologies(
      Object.fromEntries(technologies.map((tech) => [[tech], false]))
    );
    setAllFilters((oldAllFilters) => !oldAllFilters);
  };

  return (
    <div className='maininfo'>
      <div className='headline'>Web Developer</div>
      <div className='about'>
        <div className='avatar'>
          <Link href={githubProfile}>
            <img src='images/avatar.jpg' alt='avatar' />
          </Link>
        </div>
        <div className='my-info'>
          <p className='name'>Nikita Mägistu</p>
          <p>
            Github:
            <Link href={githubProfile}>@vsensei</Link>
          </p>
          <p>
            LinkedIn:
            <Link href={linkedInProfile}>@nikitamyagistu</Link>
          </p>
          <p>{profileInfo}</p>
        </div>
      </div>
      <TechInfo
        filteredTechnologies={filteredTechnologies}
        allFilters={allFilters}
        clearTechnologiesFilter={clearTechnologiesFilter}
        filterTechnologies={filterTechnologies}
      />
    </div>
  );
};

export default MainInfo;
