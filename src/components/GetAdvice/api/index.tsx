import axios from "axios"
import { AdviceType } from "../type"

export const GetAdvice = async (setAdviceData: (adviceData: AdviceType) => void) => {
    try {
        const res = await axios.get("https://api.adviceslip.com/advice");
        setAdviceData(res.data.slip)
    } catch (error) {
        console.log('Error: ', error)
    }
}