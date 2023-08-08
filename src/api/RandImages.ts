
import axios from "axios"

export async function RandImages(site:string, itterations:number,urlInData:boolean){

          let arrUrl:string[]=[]
          for (let i=1; i<=itterations; i++){
            try {
                let result = await axios.get(
                    site)

                if (urlInData==true){
                    while (result.data.url.includes(".mp4")){
                    //Rerolls mp4, as it doesn't work with img type
                    result = await axios.get(
                        site)
                    }
                    arrUrl.push(result.data.url)
              }

                else{
                    arrUrl=[...result.data]}
    
            } catch (error) {
                console.error(error);
            } 
          }
          console.log(arrUrl)
          return(arrUrl)

}

