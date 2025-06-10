interface parameter {
    prompt:string
}
export const fetchdata= async ({prompt}:parameter)=>{
        try {
          const response = await fetch('https://treandsniper.vercel.app/api/chat',{
            method:'POST' ,
            headers:{
              'Content-Type':'application/json'
            } ,
            body:JSON.stringify({prompt})
          })
          const data = await response.json()
          return data.object
        } catch (error) {
          
        }
  }