import { useState, useRef, useContext } from "react";
import { DicContext } from "../App";


const DicItem = ({ id, word, content, createDate, category }) => {
    const { onRemove, onEdit } = useContext(DicContext)
    const textEdit = useRef();
    const [isEdit, setEdit] = useState(false);
    const [editExplain, setEditExplain] = useState(content);

    const editFunc = () => {
        setEdit(!isEdit);
    }
    const changeFunc = (e) => {
        setEditExplain(e.target.value)
    }
    const removeFunc = () => {
        if (window.confirm(`${word}를 삭제 하시겠습니까?`)) {
            onRemove(id)
        }
    }


    const saveFunc = () => {
        if (editExplain.length < 5) {
            alert('설명글을 자세히 작성하세요');
            textEdit.current.focus();
        }
        onEdit(id, editExplain);
        editFunc();
    }

    const cancelFunc = () => {
        if (window.confirm('작성을 취소 하시겠습니까?')) {
            editFunc();
            setEditExplain(content);
        }
    }



    return (
        <div className="dicList">
            {/* <h2>Item</h2> */}
            <div>
                <dl>
                    <div className="dt_name">
                        <dt>* {word} 는(은)</dt>
                        <dt className="dt_name_1">[ {category} ] 에 해당합니다 :)</dt>
                    </div>
                    <dd>{isEdit ?
                        <textarea ref={textEdit} value={editExplain} onChange={changeFunc} />
                        : content
                    }

                        <span>{createDate}</span></dd>
                </dl>
                {isEdit ?

                    (<div>
                        <button onClick={saveFunc}>저장</button>
                        <button onClick={cancelFunc}>취소</button>
                    </div>
                    ) : (
                        <div>
                            <button onClick={editFunc}>수정</button>
                            <button onClick={removeFunc}>삭제</button>
                        </div>)
                }


            </div>
        </div>
    );
}

export default DicItem;