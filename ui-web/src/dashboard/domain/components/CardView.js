import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const CardView = ({speedometer}) => {
    return (
        <Card
            raised={true}
            sx={{
                maxWidth: 345,
                boxShadow: '10px 10px 10px -3px rgb(0 0 0 / 20%)'
            }}
        >
            <CardContent>
                {speedometer}
            </CardContent>
        </Card>
    )
}

export default CardView;
