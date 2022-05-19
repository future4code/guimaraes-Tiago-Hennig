import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToCharacterDetails } from "../../Routes/coordinator";
import CardPerson from "../../components/CardPerson/CardPerson";
import { CardsDiv } from "./style";



const CharacterListPage = () => {
    const navigate = useNavigate()

    const [people, setPeople] = useState([])
    const [detail, setDetail] = useState()


    useEffect(() => {
        getPeople()
        // eachPeopleHomeworld()

    }, [])

    const getPeople = () => {
        axios.get("https://swapi.dev/api/people/")
        .then((response) => {
            setPeople(response.data.results)
            console.log(response.data.results)
        })
    }

    // const eachPeopleHomeworld = () => {
    //         people.forEach(element => {
    //             const url = element.homeworld
    //             getDetails(url)
            
    //     });
    // }

    const getDetails = (url) => {
        axios.get(url)
        .then((response) => {
            console.log(response.data.name)
            setDetail(response.data.name)

        }).catch((error) => {
            console.log(error.message)
        })
    }



    return (
        <div>
            <h1>STAR WARS</h1>

            <CardsDiv>
                {people.map((p, i) => {
                    return(
                        <div>
                        <CardPerson key={p.name} p={p} getDetails={getDetails} src={`https://starwars-visualguide.com/assets/img/characters/${i+1}.jpg`}></CardPerson>
                        </div>
                        )
                })}
            </CardsDiv>
        </div>
    )
}

export default CharacterListPage