
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios'
import { useState } from 'react';
export default function Fetchdata() {

    const [user, setUser] = useState([]);
    const buttonFetch = () => {

        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) =>
                setUser(response.data)
            )
    }




    return (<React.Fragment>

        <Button variant="outlined" onClick={buttonFetch}>Fetch Data</Button>

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
