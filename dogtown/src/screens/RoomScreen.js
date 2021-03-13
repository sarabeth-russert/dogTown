import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Rooms from '../components/Rooms'
import CardDeck from 'react-bootstrap/CardDeck'


const RoomScreen = () => {
  const [dogs, setDogs] = useState({
    Baxter: {name: 'Baxter', breed: 'Lab', keyCareInfo: 'Loves pets!'}, 
    Mario: {name: 'Mario', breed: 'Boston', keyCareInfo: 'Plays with slippers'}, Indiana: {name: 'Indiana', breed: 'Bouvier', keyCareInfo: 'Loves Cookies'}, 
    Mj: {name: 'Mj', breed: 'Schnauzer', keyCareInfo: 'Loves Cookies'}})
  const [rooms, setRooms] = useState([
    {name: 'Big Dogs', occupancy: 10, dogs: [], image: './bigDog.jpg'},
    {name: 'Small Dogs', occupancy: 15, dogs: [dogs.Mj], image: './smallDog.jpg'},
    {name: 'Kennel', occupancy: 20, dogs: [dogs.Indiana], image: './kennel.jpg'},
    {name: 'Walks', occupancy: 3, dogs: [dogs.Mario, dogs.Baxter], image: './walk.jpg'}]);

    const addDog = (dog, room) => {
      // for (let i = 0; i < rooms.length; i++) {
      //   How can we remove the dog from the dog array? Do we create a map of current dogs, remove the dog we dont want from the map and then replace the dog array with a new array created from the map? Not sure... How do we add dogs?
      // }
      // for (let i = 0; i < rooms.length; i++) {
      //   if (rooms[i].name === room) {
      //     rooms[i].dogs.push(dogs[dog]);
      //   }
      // }
    }

  


  


  return (
    <>
      <Container>
        <h2>Rooms</h2>
        <Row>
          <CardDeck>
            {rooms.map(room => (
                <Rooms addDog={addDog} dogs={dogs} room={room}/>
            ))}
          </CardDeck>
        </Row>
      </Container>
    </>  
  )        
}

export default RoomScreen
