import { useState,useContext } from "react";
import { DicContext } from "../App"


const DicSearch = () => {
    const {onSearch} = useContext(DicContext);

    const [searchInput, setSearChInput] = useState();
    const inputTxt = (e) => {
        setSearChInput(e.target.value)
    }
    const searchFunc=()=>{
        console.log(searchInput)
        onSearch(searchInput)
       }
    return (
        <div className="dicserch">
            <div>
                <input type="text" value={searchInput} placeholder="검색어입력" onChange={inputTxt} />

            </div>
            <div>
                <button onClick={searchFunc}>검색</button>
            </div>
        </div>
    );
}

export default DicSearch;
