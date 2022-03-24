import React from "react";
import "./Style.css";
import { useNavigate } from 'react-router-dom';
import { Button ,Empty} from 'antd';
import { Link } from "react-router-dom";
export const Favourite = () => {
    const [data, setData] =  React.useState([]);
    React.useEffect(() => {
        let localData = JSON.parse(localStorage.getItem('favourite'));
        console.log("localData", localData)
        if (localData) {
            setData(localData)
        }
        
    }, []);
    const navigate = useNavigate();
    const handleFavourite = () => {
        localStorage.removeItem('favourite');
        navigate('/')
    }
    return (
        <div>
            { data.length> 0 ?<div> <div className="header">
                            <Button type="danger" onClick={handleFavourite}>Clearout Favourite</Button> 
                            <h1>Favourite's Page</h1>
                            <Link to='/' ><Button type="primary">Go to MainPage</Button></Link> 
            </div>
                <table style={{width:'100%',border:'1px solid black'}}>
                    <thead style={{border:"2px solid black"}}>
                    <tr>
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
                            <tr className="tableRow" key={el._id} style={{backgroundColor:el.checked ? "#C1F4C5":'inherit'}} >
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
                            {/* <div>
                        {data.map((el) => {
                            return (
                                <div className="favoritesDiv" key={el._id}>
                                    <img src={el.avatar} alt={el._id} />
                                    <p>{el.first_name + " " + el.last_name}</p>
                                    <p>{el.email}</p>
                                    <p>{el.city}</p>
                                </div>
                            )
                        })}
                    </div> */}
            </div> : <div>
                <h1 style={{ textAlign: 'center' }}>Favourite's Page</h1>
                <Link to="/"><Button type="primary" style={{marginLeft:'5em'}} >Goto Mainpage</Button></Link>
            <Empty style={{marginTop:'2em'}} /></div>}
        </div>
    )
}