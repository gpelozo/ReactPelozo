import React from 'react'
import "./flexwrapper.css"

function FlexWrapper(props) {
  return (
    <div>
        <h1> listado de nuestras colecciones</h1>
        <div className="flex">
        {props.children}
        </div>
    </div>
  );
}

export default FlexWrapper