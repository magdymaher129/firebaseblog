import React from 'react'
const styles={
    default:{
       color:'red',
       fontSize:'28px',
       textTransform: 'capitalize',
       borderBottom:'1px solid grey',
       width:'40%',
       position:'relative',
       left:'30%',
       display: 'flex',
       flexDiretion: 'column',
       paddingLeft: "300px",
     

    },
    dark:{
        color:'black'
    }

}

const Kemo=( props)=>{
    let mystyle={}
    if(props.color==='dark'){
 mystyle=styles.dark
    }else{
        mystyle=styles.default
    }
    return(
        <div style={mystyle}>
            kemo {props.greeting}
        </div>
    )
}

const Mezo = () => {
  return (
   [
    <Kemo  greeting="hi"  key="1" color='default'/>,
    <Kemo key="2" color='default'/>,
        <Kemo greeting="hi" key="3" color='default'/>,
        <Kemo key="4" color='default'/>,
   ]
  )
}

export default Mezo
