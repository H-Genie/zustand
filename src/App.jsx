// import { useState } from "react"
// import Form from "./components/Form"
// import Memos from "./components/Memos"

// export default function App() {
//   const [memo, setMemo] = useState("")
//   const [memos, setMemos] = useState([])

//   const handleWriteMemo = e => {
//     setMemo(e.target.value)
//   }

//   const handleAddMemo = e => {
//     e.preventDefault()
//     setMemos(prevMemos => [...prevMemos, memo])
//     setMemo("")
//   }

//   return (
//     <div>
//       <h1>메모 작성하기</h1>
//       <Form onAdd={handleWriteMemo} onSubmit={handleAddMemo} memo={memo} />
//       <Memos memos={memos} />
//     </div>
//   )
// }

import Form from "./components/Form"
import Memos from "./components/Memos"

export default function App() {
  return (
    <div>
      <h1>메모 작성하기</h1>
      <Form />
      <Memos />
    </div>
  )
}
