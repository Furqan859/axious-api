
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios'
import { useState } from 'react';
import { Input } from '@mui/material';
export default function Fetchdata() {

    const [user, setUser] = useState([]);
    const [name, setName] = useState([]);
    const [username , setUsername] = useState([]);
    const buttonFetch = () => {

        axios.get("http://restapi.adequateshop.com/api/users/134207")
            .then((response) =>
                setUser(response.data)
            )
    }

    async function saveUser  (){


    const {data} =     await axios.post("http://restapi.adequateshop.com/api/authaccount/login",{
        "email":"furqanrasool2@gmail.com",
        "password":"abcdefgh"

        })
        console.log(data)
        
           
            
            }

    //     console.warn({name,username}) 
    //     let valudata = {name,username} 
    // fetch("https://jsonplaceholder.typicode.com/users",{

    // method: "POST",
    // headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    // },
    // body:JSON.stringify(valudata)
    // }).then((results)=>{
    //     // console.warn("results",results)
    //     results.json().then((res)=>{
    //         console.warn("res",res)
    //     })
    // })
    
    



    return (<React.Fragment>


        <Button variant="outlined" onClick={buttonFetch}>Fetch Data</Button>


        <Typography variant="h4">Add Data</Typography>
        
        <Typography variant="h6">Tittle</Typography>
        <Input type="text" placeholder="Enter the Tittle" onChange={(e)=>setName(e.target.value)} />

 <Typography variant="h6">Body</Typography>
 <Input type="text" placeholder="Enter the Body" onChange={(e)=>setUsername(e.target.value)}/>

 <Button onClick={saveUser}>Add</Button>
        {
            user.map((us) => {

                return (
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Word of the Day
                            </Typography>
                            <Typography variant="h5" component="div">
                                {us.title}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {us.body}
                            </Typography>

                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                )
            })
        }


    </React.Fragment>
    )
}
