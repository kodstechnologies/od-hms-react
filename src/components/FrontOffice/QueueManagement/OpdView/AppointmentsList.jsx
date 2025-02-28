import React from 'react'
import Card from '../../../ui_elements/card/Card'
import CardBody from '../../../ui_elements/card/CardBody'
import { Info } from 'feather-icons-react/build/IconComponents'

const AppointmentsList = ({ date, mode, status }) => {
    let color = 'grey';
    if (status == 'Pending') {
        color = 'orange';
    } else if(status == 'Completed') {
        color = 'lightgreen'
    }
    return (
        <Card >
            <CardBody>
                <div className="card-header d-flex">
                    <p className="p-2 text-red">
                        {mode}
                    </p>
                    <p className="p-2" >
                        /
                    </p>
                    <p className="p-2" style={{ borderRight: '1px solid grey', color: color }}>
                        {status}
                    </p>
                    <p className='p-2'>{new Date(date).toISOString()?.split('T')[0]}</p>
                    <p className='p-2'><Info></Info></p>
                </div>
                <div className='text-center'>
                    <p>Sorry, There are no chart summary available at the moment</p>
                </div>
            </CardBody>
        </Card >
    )
}

export default AppointmentsList
