


export default function Bodd({name,content,children}){


    const MYa={
        width:"40%",
        height:"100px",
        backgroundColor:"white",
        border: "2px solid chartreuse",
        margin:"20px",
        paddingLeft:"190px",
        position: "relative",
        bottom:"801px",
        
    };
    const MS={
        position: "relative",
        top:"-1px",
        right:"105px"
    }
    const MB={
        
        position: "relative",
        top:"20px",
    }
    const MD={
        position: "relative",
        bottom:"20px",
    }
    return(
     <div style={MYa}>
        <div style={MS}>
            <p>  {children} </p>
            <h3  style={MB}> {name} </h3>
            <hr/>
            <h5 style={MD}> {content}</h5>
        </div>



     </div>

    );
}