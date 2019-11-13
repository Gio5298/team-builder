import React, {useState} from 'react';

const AddForm = props => {
    return(
        <Card>
            <Title>{props.info.name}</Title>
            <CardContent>
                <CardImage src={props.info.image}/>
                <div>
                    <div>
                        ID: {props.info.id}
                    </div>
                    <div>
                        Position: {props.info.role}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
export default AddForm;