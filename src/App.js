import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './component/header';
import Main from './page/main';
import Write from './page/write';
import Edit from './page/Edit';
import { useReducer, createContext, useRef, useCallback, useMemo } from 'react';

export const DicStateContext = createContext(null);
export const DicContext = createContext(null);



const initState = {
  inputs: {
    word: "",
    content: "",
    category: ""
  },
  dics: [
    {
      id: 1,
      word: "teg ",
      content: "html에 사용하는 약속된 용어들로 요소를 만들 때 사용",
      category: "html",
      createDate: "2023-09-14"
    },

    {
      id: 2,
      word: "background-color ",
      content: "요소의 배경을 설정합니다",
      category: "css",
      createDate: "2023-09-14"
    },
    {
      id: 3,
      word: "getTime ",
      content: "인스턴스 메서드는 UTC 1970년 1월 1일 초 자정으로 정의되는 epochDate 이후 해당 날짜의 밀리초 수를 반환합니다.",
      category: "js",
      createDate: "2023-09-14"
    },
    {
      id: 4,
      word: "React ",
      content: "JSX(JavaScript 및 XML)라는 HTML-in-JavaScript  구분을 사용합니다. HTML과 JavaScript 모두에 익숙하면      JSX를 배우고 애플리케이션의 버그가 JavaScript와 관련이 있는지 또는 React의 보다 구체적인 모데인과 관련이 있는지 더 잘 식별하는데 도움이 됩니다.",
      category: "react",
      createDate: "2023-09-14"
    },
    {
      id: 5,
      word: "padding ",
      content: "정의된 테두리 내부에서 요소 콘텐츠 주위에 공간을 생성하는 데 사용됩니다. CSS를 이용해서 패딩을 완전히 제어할 수 있습니다. 요소의 각 측면(상단, 오른쪽, 하단 및 왼쪽)에 대한 패딩을 설정하는 속성이 있습니다.",
      category: "css",
      createDate: "2023-09-14"
    },


    {
      id: 6,
      word: "class ",
      content: " HTML 요소의 클래스를 지정하는 데 사용되며 여러 HTML 요소가 동일한 클래스를 공유할 수 있습니다. 또한 특정 클래스 이름을 가진 요소에 액세스하고 조작하기 위해 JavaScript에서 사용할 수도 있습니다.",
      category: "html",
      createDate: "2023-09-14"
    },
    {
      id: 7,
      word: "const ",
      content: "재할당이 금지되며 const 키워드로 선어한 변수는 반드시 선언과 동시에 초기화 해야합니다. 또한 상수배열을 정의하지 않고 배열에 대한      상수 참조를 정의합니다. 이때문에 우리는 여전히 상수 배열의 요소를 변경할 수 있습니다. 상수를 선언만 했을 경우 SyntaxError 에러가 발생하며,      상수를 재할당할 경우 TypeError 에러가 나타납니다.",
      category: "js",
      createDate: "2023-09-14"
    },
    {
      id: 8,
      word: "Modules ",
      content: "모듈은 JavaScript 라이브러리와 동일하고 애플리케이션에 포함하려는 기능과 세트입니다.Node.js에는 추가 설치 없이 사용할 수 있는 내장 모듈 세트가 있습니다.전체 모듈 목록을 보려면 내장 모듈 참조를 살펴보세요 .",
      category: "node",
      createDate: "2023-09-14"
    },
    {
      id: 9,
      word: "Router ",
      content: " 웹 프런트엔드를 개발하다 보면 항상 document를 활용해 페이지를 넘겨주는 작업이 귀찮고, 사이트가 방대해질수록 점점 복잡한 구조 때문에 어려움을 겪기 일상입니다. 우리는 이러한 문제점을 보다 쉽게 해결하기 위해서 React에서 제공하는 Router를 사용하면 이러한 어려움을 해결할 수 있게 됩니다.React에는 이러한 페이지 이동을 보다 쉽게 해주는 많은 라이브러리가 있지만, 대중적으로 가장 많이 사용하는 라이브러리가 바로 React Router입니다. 이러한 router는 클라이언트에서 일을 처리함으로 서버의 자원을 절약할 수 있는 장점이 있자만, 브라우저에서 js가 동작하지 않으면 인터페이스를 볼 수 없다는 단점이 있습니다.",
      category: "react",
      createDate: "2023-09-14"
    },
    {
      id: 10,
      word: "position ",
      content: "속성은 요소의 위치를 배치하는데 사용되는 속성입니다. position 속성을 이용하면 텍스트나 이미지와 같은 특정 html 요소를 나란히 배치할 수도 있고 가로나 세로로 원하는 위치에 배치할 수도 있으며 경우에 따라서는 스크롤을 따라다니거나 화면 한 곳에 고정도 시킬 수 있습니다.",
      category: "css",
      createDate: "2023-09-14"
    },




  ]
}

const reducer = (state, action) => {
  switch (action.type) {
    case "change":
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value
        }
      }
    case "create":
      return {
        inputs: initState.inputs,
        dics: state.dics.concat(action.dic)
      }
    case "edit":
      return {
        ...state,
        dics: state.dics.map((item) => item.id === action.id ? { ...item, content: action.content } : item)
      }
    case "remove":
      return {
        ...state,
        dics: state.dics.filter((item) => item.id !== action.id)
      }

    case "search":
      return {
        ...state,
        dics: state.dics.filter((item) => (
            item.word.toLowerCase().includes(action.text.toLowerCase()) ||
            item.content.toLowerCase().includes(action.text.toLowerCase())
        ))

      }
    default:
      return state;
  }
}



function App() {
  const [state, dispatch] = useReducer(reducer, initState)
  const { dics } = state;

  const { word, content, category } = state.inputs;
  const userId = useRef(5);
  
  const onCreate = useCallback((word, content, category) => {
    const createDate = new Date().toLocaleDateString(); //toISOString().slice(0, 10); //new Date().
    dispatch({
      type: "create",
      dic: {
        word, content, category, createDate,
        id: userId.current
      }
    })
    userId.current += 1
  }, [word, content, category])


  const onEdit = (id, content) => {
    dispatch({
      type: "edit",
      id, content
    })

  }


  const onRemove = (id) => {

    dispatch({
      type: "remove",
      id
    })
  }

  const onSearch =(text) =>{
    dispatch({
      type: "search",
      text
    })

  }

  



  const memoizedDic = useMemo(() => {
    return { onCreate, onEdit, onRemove,onSearch }
  },[])

  

  return (

    <div className="App">
      
      <Header />
      <DicStateContext.Provider value={dics}>
        <DicContext.Provider value={memoizedDic}>
          {/* onCreate,onEdit,onRemove = memoizedDic*/}
          {/* <DicWriteContext.Provider value={DicWriteContext}> */}
          <Routes>
            <Route path='/' element={<Main />}></Route>
            <Route path='/write' element={<Write />}></Route>
            <Route path='/Edit' element={<Edit />}></Route>
          </Routes>
          {/* </DicWriteContext.Provider> */}
        </DicContext.Provider>
      </DicStateContext.Provider>

    </div>
  );
}

export default App;
