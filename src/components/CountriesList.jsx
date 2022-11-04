import { Link } from 'react-router-dom';

function CountriesList({ countries }) {
  return (
    <div className="container" >
      <div className="row" >
        <div
          className="col-5"
          style={{ maxHeight: '90vh', overflow: 'scroll', width: '30vw' }}
        >
          {countries.map((eachCountry) => {
            return (
              <div key={eachCountry.alpha3Code} className="list-group">
                <Link to={eachCountry.alpha3Code} className="list-group-item list-group-item-action">
                  <img
                    src={`https://flagpedia.net/data/flags/icon/72x54/${eachCountry.alpha2Code.toLowerCase()}.png`}
                    alt=""
                    width={75}
                  />
                  <br />
                  {eachCountry.name.official}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CountriesList;
