import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function CountryDetails({ countries }) {

    const [details, setDetails] = useState(null);
    const [isFetching, setIsFetching] = useState(true)
    const { id } = useParams();

  const findCountry = (alpha3code) => {
    let countryArr = countries.filter((eachCountry) => {
      return eachCountry.alpha3Code === alpha3code;
    });
    return countryArr[0]
  };

  
  
  useEffect(()=>{
    setIsFetching(true)
      let country = findCountry(id)
      setDetails(country)
      setIsFetching(false)
      console.log("DETAILLSLS1",details,"COUNTRYY", country, "PARAMMS", id)
  }, [id])

  if(isFetching === true) {
    return <h4>espera</h4>
  }

  return (
    <div className="col-7">
      <img src={`https://flagpedia.net/data/flags/icon/72x54/${details.alpha2Code.toLowerCase()}.png`} alt="" width={100}/>
      <h1>{details.name.official}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{details.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {details.area}
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {details.borders.map((eachBorder) => {
                  console.log("eachBorder",eachBorder)
                  return (
                    <li>
                      <Link to={`/${eachBorder}`}>{findCountry(eachBorder).name.official}</Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
