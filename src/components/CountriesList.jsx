import { Link } from 'react-router-dom';

function CountriesList({countries}) {

    
    

  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      {countries.map((eachCountry) => {
        return (
          <div key={eachCountry.alpha3Code} className="list-group">
            <Link to={eachCountry.alpha3Code}>
          <img src={`https://flagpedia.net/data/flags/icon/72x54/${eachCountry.alpha2Code.toLowerCase()}.png`} alt="" width={30}/>
            {eachCountry.name.official}
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default CountriesList;
