import React from "react";
import axios from 'axios';
import "./Style.css";
import { Button } from 'antd';
export const Dashboard = () => {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
    const checkedRef=React.useRef({current:null})
    React.useEffect(() => {
        setLoading(true);
        axios.get('https://airmeet-mock-server.herokuapp.com/products')
            .then(res => {
                setData(res.data.products);
                setLoading(false);
            }).catch(e=>setError(true));
    }, []);
    const handleChecked = (e) => {
        console.log(e.target.checked);
    }
    return loading ? (
            <div>
           <h1>... Loading</h1>
            </div>
            )
            :error ? (
            <div>
              <h1>  Error</h1>
            </div>
            )
            : <div>
                <div id="ButtonsDiv">
                    <div>
                        <Button  type="danger">
                            Delete Selected
                        </Button>
                    </div>
                    <div>
                        <Button  type='primary'>
                            Add Selected to Favorite
                        </Button>
                    </div>
                    <div>
                        {/* <Link to="/favorite">
                            <Button className="favoriteButton">Go to Favorite</Button>
                        </Link> */}
                    </div>
                </div>
                <table style={{width:'100%',border:'1px solid black'}}>
                    <thead>
                    <tr>
                        <th>Status</th>
                        <th>S.No</th>
                        <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                        <th>Avatar</th>
                            <th></th>
                    </tr>
                    </thead>
                     <tbody style={{padding:'1em'}}>
                    {data.map((el) => {
                        return (
                            <tr className="tableRow" key={el._id} >
                                <td> <input type="checkbox" name="vehicle1" onChange={handleChecked} style={{ backgroundColor: checkedRef.current.checked ? "red" : "inherit" }} ref={checkedRef} ></input></td>
                                <td>  <p>{el.s.no}</p></td>
                                <td>  <p className="extraSpace">{el.first_name + " " + el.last_name}</p></td>
                                <td>  <p className="extraSpace">{el.email}</p></td>
                                <td>  <p className="extraSpace">{el.city}</p></td>
                                <td><img src={el.avatar} alt={el._id} /></td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
}