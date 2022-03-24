import React from "react";
import axios from 'axios';
import "./Style.css";
import { Button } from 'antd';
import { Link } from 'react-router-dom';
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
            }).catch((e) => {
                setLoading(false);
                setError(true);
            });
    }, []);
    /* handleChecked function is filter out the checked out items from the list*/
    const handleChecked = (e) => {
        let check = e.checked;
        let updateData = data.map((el) => {
            return el._id === e._id ? { ...el, checked: !check } : el
        });
        setData(updateData)
    }
    /* handleDelete function is delete out the checked out items from the list*/
    const handleDelete = () => {
        let modifiedData = data.filter((el) => {
            return el.checked === false; 
        })
        setData(modifiedData)
    }
    /* handleFavourite function is move to favourite list the checked out items from the list*/
    const handleFavourite = () => {
        let favouriteData = data.filter((el) => {
            return el.checked === true;
        })
        console.log("favouriteData",favouriteData);
        let localData = JSON.parse(localStorage.getItem('favourite'));
        if (localData) {
            let totalData = [...localData, ...favouriteData];
        localStorage.setItem('favourite', JSON.stringify(totalData));
        } else {
            localStorage.setItem('favourite', JSON.stringify(favouriteData));
        }
    }
    return loading ? (
            <div>
            <img style={{width:'100%',height:"100vh"}} src='https://cdn.dribbble.com/users/2346349/screenshots/9246147/media/06971345603f8422d664fa0ea362b3a5.gif' alt="loading"/>
            </div>
            )
            :error ? (
            <div>
                <img style={{width:'100%',height:"100vh"}} src="https://media.moddb.com/images/downloads/1/195/194539/MOSHED-2020-2-20-22-48-16.gif" alt='error'/>
            </div>
            )
            : <div>
                <div className="btns">
                    <div>
                        <Button  type="danger" onClick={handleDelete}>
                            Delete Selected
                        </Button>
                    </div>
                    <div>
                        <Button  type='primary' onClick={handleFavourite}>
                            Add Selected to Favorite
                        </Button>
                    </div>
                    <div>
                          <Link to='/favourite'> <Button type="ghost" >Go to Favorite</Button></Link> 
                    </div>
                </div>
                <table style={{width:'100%',border:'1px solid black'}}>
                    <thead style={{border:"2px solid black"}}>
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
                            <tr className="tableRow" key={el._id} style={{backgroundColor:el.checked ? "#C1F4C5":'inherit'}} >
                                <td> <input type="checkbox"  onChange={()=>handleChecked(el)}  ref={checkedRef} ></input></td>
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