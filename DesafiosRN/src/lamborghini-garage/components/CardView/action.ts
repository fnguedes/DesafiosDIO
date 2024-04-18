import { fetchGetCarsData } from "../../api/getCars"
import { CarModel } from "./props"

export const loadCarData = async (
  id:number, 
  setCarData:React.Dispatch<React.SetStateAction<CarModel|null>>) => {
    const response = await fetchGetCarsData(id)
  try{
    if(response)
      setCarData(response)
    
  }catch(error){
    
    setCarData(null)
  }
}

export const handlePreviousItem = async(
  carData:CarModel|null,
  setCarData:React.Dispatch<React.SetStateAction<CarModel|null>>
)=>{
  try{
    let response = null
    if(carData && carData?.id>1){
      response = await fetchGetCarsData(carData.id-1)
    }

    if(response)
      setCarData(response)
  }catch(error){
    console.log('erro ao chamar a api', error)
    setCarData(null)
  }
}

export const handleNextItem = async (
  carData:CarModel|null,
  setCarData:React.Dispatch<React.SetStateAction<CarModel|null>>
) =>{
  try{
    let response = null
    if(carData && carData?.id<10){
      response = await fetchGetCarsData(carData.id+1)

    }

    if(response)
      setCarData(response)
  }catch(error){
    console.log('erro ao chamar a api', error)
    setCarData(null)
  }
}