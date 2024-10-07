// import logo from './logo.svg';
import './App.css';
import Heder from './heder';
import Bodd from './bodye';
// import BBB from './botom';
import Tiv from './nav';
function App() {

//metode 1    tab de object 
 const tab=[ 
  {id:1,
   name:"youcef",
   content:"this is best frender"},

  { id:2 ,
    name:"ayman",
    content:"this ayman hello word" }, 
  { id:3 ,
    name:"Ali",
   content:"this is ali"} ,
 ];
const obbb=tab.map((task)=>{

return <Bodd key={task.id}  name={task.name}  content={task.content} /> 
});

 
  return (
    <div className="App">
        <Heder />
       
   <div>
      <div>
        <div>
            <Tiv />
           
        </div>
        
            <div>

             {obbb}      

              {/* methode 2 */}
                   {/* {/* <Bodd name="youcef" content="this is best frender"  nb="20" >  
                  <h2> 20 </h2>  
                  </Bodd>





            <Bodd  name="ayman"  content=" this ayman hello word">
              <h2 style={{color:"red"}}> 30 </h2>
              
               </Bodd> 
            <Bodd  name="Ali" content="this is ali  "/>  */}
            
            </div>
    </div>
  </div>
       
         
    </div>  
     )
  
};

export default App;


