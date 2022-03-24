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
        navigate('/favourite')
    }
    return (
        <div>
            { data.length> 0 ?<div> <div className="header">
                            <Button type="danger" onClick={handleFavourite}>Clearout Favourite</Button> 
                            <h1>Favourite's Page</h1>
                            <Link to='/' ><Button type="primary">Go to MainPage</Button></Link> 
                            </div>
                            <div>
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
                    </div>
            </div> : <div>
                <h1 style={{ textAlign: 'center' }}>Favourite's Page</h1>
                <Link to="/"><Button type="primary" style={{marginLeft:'5em'}} >Goto Mainpage</Button></Link>
            <Empty style={{marginTop:'2em'}} /></div>}
        </div>
    )
}