import { v4  } from 'uuid';
interface parameter {
    prompt:string ,
    date?:Date
}
export const fetchdata= async ({prompt , date}:parameter)=>{
        try {
          const response = await fetch('https://treandsniper.vercel.app/api/chat',{
            cache:'no-store',
            method:'POST' ,
            headers:{
              'Content-Type':'application/json'
            } ,
            body:JSON.stringify({prompt , date})
          })
          const data = await response.json()
          return data.object
        } catch (error) {
          
        }
  }
  
  export  function generateId() {
     const id = v4()
     return id
  }
  