import React from "react";
import Card from "../Card/Card";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import "./itemlistcontainer.css";



//Componente
function ItemListContainer(props) {
    let miEstilos = {backgroundColor: "lightblue"};
    return (
        <>
        <h1>{props.greeting}</h1>
        <FlexWrapper>
            <Card
            img=""
            title=""
            detail=""
            price="100"
            />
            <Card
            img=""
            title=""
            detail=""
            price="100"
            />
        </FlexWrapper>
        </>
    );
}
ItemListContainer.defaultProps ={
    greeting:'Bienvenidos a la tienda argentina de Pokemon TCG!'
}

export default ItemListContainer;