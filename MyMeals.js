import { AiFillEdit } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";

export const MyMeals = ({ text, updatingInInput, deleteMeal }) => {
    return(
        <div>
            <p>{text}</p>
            <AiFillEdit onClick={updatingInInput}></AiFillEdit>
            <MdDeleteForever onClick={deleteMeal}></MdDeleteForever>
        </div>
    )

}