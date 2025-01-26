import { Cursor } from 'mongoose';
import './App.css';

const users=[

    {         avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWllSpAjI2KkhjYjXqXtkUs8nfGch7JZ3LLw&s',
              name:'samuwel montana' ,
             daestination:'java deleoper' ,
             salary:'20000',
             code:1
            },
    {
             avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR8dLgzLqdKzC5FSP50AkxE4UTHOKalCoG_A&s',
             name:'jarabaj montana' ,
             daestination:'react deleoper' ,
             salary:'30000',
             code:2
    },
    {        avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqnY7BxK6XfMkZPyD1K2bKjoIaqxemFKkThQ&s', 
             name:'dywyan montana',
             daestination:'c deleoper' ,
            salary:'40000',
            code:3
      }
]

const customerNames =['nimal','kamaal','jagath'];

// const name=customerNames.map((name)=>{

//   return <h1>{name}</h1>
// })

    function UserManager(){
        //const {avatar,name,daestination,salary, code}= selectedUser;

      return (
        <div className='wrapper' >
          <SearchForm/>
          <hr/>
          {users.map((user)=>{
return <User {...user} key={user.code}/>;
})}
        </div>
      );
    }



    const SearchForm=()=>{

      const manageChangeEvent=(e)=>{
        console.log(e.target.value);
      }
      const manageClickEvent=()=>{
        console.log('mangeClickEvent');
      }
      const manageSubmitEvent=(e)=>{
        e.preventDefault();
        console.log('managesubmite vent')
      }
      return (<div className='search-outer'>
                 <form onSubmitEvent>
                  <input type="search" onChange={manageChangeEvent}/>
                  <button type='button' OnClick={manageClickEvent}>Search now</button>

                 </form>
      </div>);
    }
    const User=(props)=>{
      console.log(props) 
       const {avatar, name, daestination, salary}=props;
      return (
       
        <div className='user-outer'>
         
          <Avatar avatar={avatar}/>
         <UserData name={name} daestination={daestination} salary={salary}/>
      
        </div>
        
      )
    }

    const UserData=(props)=>{
return (

  <div className='userdata'>
     <Username name={props.name}/>
          <Daestination daestination={props.daestination}/>
          <Salary salary={props.salary}/>
  </div>

)
    }
const Avatar=(props)=>{
  const printdata=(e)=>{
    console.log(e);
  }

  
  return(
    <div className='avatar-outer'>   
       < img src={props.avatar}
       alt=""/>
       
       <button style={{Cursor:'pointer'}} onClick={printdata}> printdata</button>
       </div>

  )
}
const Username=(props)=>{
  const inlineStyle={
    color:'#2980b9'
   

  }
  return(
    <h1 style={inlineStyle}>{props.name}</h1>
  )
}
const Daestination=(props)=>{
  return(
    <h2 style={{fontStyle:'italic'}}>{props.daestination}</h2>
  )
}
const Salary=(props)=>{
  return(
    <h2 style={{fontStyle:'italic'}}>{props.salary}</h2>
  )
}

export default UserManager;
