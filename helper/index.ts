import { v4  } from 'uuid';
interface parameter {
    prompt:string ,
    date?:Date
}
const BaseURL=process.env.NEXT_PUBLIC_BASE_URL ;
export const fetchdata= async ({prompt , date}:parameter)=>{
        try {
          const response = await fetch(`${BaseURL}/api/chat`,{
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
  
  export async function Subscribe(license_key:string) {
        try {
          const response = await fetch(`${BaseURL}/api/payment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                license_key:license_key.trim(),
            })
        })
        } catch (error) {
          
        }
  }