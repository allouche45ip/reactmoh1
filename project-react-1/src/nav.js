

import BBB from './botom'; 
import './navc.css';
export default function Tiv(){


    // metode 1


    const tab2=[

        {
            id:1,
            name:"bonjour",
            c:(
                <div>
           <img 
           style={{
            width:"90px",
           }}
            src="https://th.bing.com/th/id/OIP.avb9nDfw3kq7NOoP0grM4wHaEK?rs=1&pid=ImgDetMain">
             
            </img>
        </div>
            ),
        },
        {
            id:2,
            name:"bonsoir",
            c:(
                <div>
           <img 
           style={{
            width:"90px",
           }}
            src="https://th.bing.com/th/id/OIP.avb9nDfw3kq7NOoP0grM4wHaEK?rs=1&pid=ImgDetMain">
             
            </img>
        </div>
            ),
        },
        {
            id:3,
            name:"daccord",
            c:(
                <div>
           <img 
           style={{
            width:"90px",
           }}
            src="https://th.bing.com/th/id/OIP.avb9nDfw3kq7NOoP0grM4wHaEK?rs=1&pid=ImgDetMain">
             
            </img>
        </div>
            ),
        }
    ];

    const botomk=tab2.map((bot)=> {
    return <BBB key={bot.id} name={bot.name}>
       { bot.c}
    </BBB>
    });
    return(
     <div className={"ahamed"}>

        {botomk};
       
        {/* <BBB  name="bonjour">  {botomk}
        <div>
           <img 
           style={{
            width:"90px",
           }}
            src="https://th.bing.com/th/id/OIP.avb9nDfw3kq7NOoP0grM4wHaEK?rs=1&pid=ImgDetMain">
             
            </img>
        </div>
       </BBB >
         */}
        
        
        
          {/* <BBB  name="bonsoir">
          <div>
          <p>$$$$$$</p>
        </div>
             </BBB>  */}
    
       {/* <BBB name="d accord"> 
       <div>
           <p> &&&&&^%</p>
         
        </div>
        
         </BBB> */}
       
     </div>


    );

};