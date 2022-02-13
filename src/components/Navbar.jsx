import { React, useEffect, useState } from 'react'
import axios from 'axios'
const Navbar = () => {

    const [Exchanges, setExchanges] = useState([]);
    const [nameCr, setnameCr] = useState("");
    useEffect(() => {
      axios.get('https://api.coingecko.com/api/v3/exchanges').then((res) =>{
          setnameCr(res.data[0].name)
          setExchanges(res.data);
      }).catch((error) => console.log(error))
    }, [])
    console.log(nameCr)
    // useEffect(() => {
    //     fetchUsers();
    // }, [])

    // const fetchUsers = async () => {
    //     const res = await fetch("https://api.coingecko.com/api/v3/exchanges");
    //     const data = await res.json();
    //     try {
    //         setExchanges(data);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };


    // console.log(Exchanges);

    // axios.get('https://api.coingecko.com/api/v3/exchanges').then((res) => {
    //     console.log(res);
    // }).catch((error) => console.log(error))

    


    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Cryptos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">News</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Exchanges</a>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
            <h1>API Data {nameCr}</h1>
            <div className="container mx-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">YearESTD</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Exchanges.map((coin) => {
                            return (
                                <tr>
                                    <td>{coin.name}</td>
                                    <td>{coin.year_established}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Navbar