import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';

function UserCard({ persons }) {
    return (
        persons.map((person) => (
            <Card style={{ width: '18rem' }} className="me-5">
                <Card.Img style={{ height: '19rem', width: '17rem' }} variant="top" src={person.image} />
                <Card.Body>
                    <Card.Title>{(person.id) + "- " + person.name + " " + person.surname}</Card.Title>
                    <Card.Text>
                        {person.explanation}
                    </Card.Text>
                    <Button variant="primary">Profili Gör</Button>
                </Card.Body>
            </Card>
        )))
}

export default UserCard;

UserCard.defaultProps = {
    surname: '',
}
