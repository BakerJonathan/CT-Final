
import axios from "axios"

export async function RandImages(site:string, iterable:number, websiteDataFormat:number ){
            // extraIdentifier is EITHER iterations needed if the site is 'dirty' and needs filtering OR the array index at which the url is kept
        let arrUrl:string[]=[]
        console.log("Cat")

        //Function for... delays, to help with loading issues (api are promises, and react loads everything before it's recieved usually)
            //Thanks stackoverflow, https://stackoverflow.com/questions/14226803/wait-5-seconds-before-executing-next-line
        const delay = async (ms: number) => new Promise(res => setTimeout(res, ms));



        for (let i=1; i<=iterable; i++){
        try {
            
            let result = await axios.get(
                site)

                
            if (websiteDataFormat===1){  //For dog
                while (result.data.url.includes(".mp4")||result.data.url.includes(".webm")){
                result = await axios.get(
                    site)
                }
                arrUrl.push(result.data.url)
            }
            
            else if (websiteDataFormat === 2){
                //Good example of using arrays of dictionaries, used for cat
                delay(1000)
                console.log(result)
                if (Array.isArray(result.data)){
                    for (let i=1; i<= result.data.length; i++){
                        arrUrl.push(result.data[i].url)
                        }
                }
            }


            else if (websiteDataFormat == 3){
                delay(1000)
                console.log(result)
                //Model for cases where a 2d array is returned, and we need to get the nth element of each baby array (n=2 atm)
                    //Not used atm
                if (Array.isArray(result)){
                    for (let i=0; i<= result.length; i++){
                        
                        arrUrl.push(result[i][2])
                        }
                    }
                }

            
            else if (websiteDataFormat==4){//for fox, similar to dog, but with dupes clause instead of filtering.
                //Dupes was why this didn't make the cut initally, as I recall (and the smaller quantity of a picture that it meant)
                while (arrUrl.includes(result.data.image) ){
                    console.log("REROLL")
                    result = await axios.get(//reroll
                        site)
                }
                arrUrl.push(result.data.image)
            }
            


            // rip shibe.online -- the reason for this case
            else if (websiteDataFormat==5){
                arrUrl=[...result.data]}

            

        } catch (error) {
            console.error(error);
        } 
        }
        console.log(arrUrl)
        return(arrUrl)

}

