import React,{useContext } from "react";
import { DicContext } from "../App";
import useInput from "../hook/useinput";


const DicWrite = () =>{
    const[{word,content,category},onChange,reset] = useInput({
        word:'',
        content:'',
        category:''
    })
    const {onCreate} = useContext(DicContext);
    const onCreateBTN=()=>{
        onCreate(word,content,category)
        reset()
    }

    return (
        <div className="dicwrie">
            <div>
                <input type="text" placeholder="단어" name="word" value={word} onChange={onChange} />
            </div>

            <div>
                <textarea placeholder="설명글" name="content" value={content} onChange={onChange} />
            </div>
            <div>
                <select name="category" value={category} onChange={onChange}>
                    <option value={'html'}>HTML</option>
                    <option value={'css'}>CSS</option>
                    <option value={'js'}>JavaScript</option>
                    <option value={'node'}>Node</option>
                    <option value={'react'}>React</option>
                </select>
            </div>
            <div>
                <button onClick={onCreateBTN}>저장</button>
            </div>

        </div>
    );
}

export default React.memo(DicWrite);

