import React from 'react'

export default function Alert(props) {
  const capitalize=(word)=>{
    var lowWord=word.toLowerCase();
    return lowWord.charAt(0).toUpperCase()+lowWord.slice(1);
  }
  return (
    props.alert && <div>
     <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)} : </strong>{props.alert.msg}
      </div>
    </div>
  )
}
