// /* eslint-disable react/prop-types */
// const Form = props => {
//   return (
//     <>
//       <form onSubmit={props.onSubmit}>
//         <input type="text" onChange={props.onAdd} value={props.memo} />
//         <button type="submit">작성완료</button>
//       </form>
//     </>
//   )
// }

// export default Form

import useMemosStore from "../stores/memos"

const Form = () => {
  const { memo, setMemo, setMemos } = useMemosStore()

  const handleWriteMemo = e => {
    setMemo(e.target.value)
  }

  const handleAddMemo = e => {
    e.preventDefault()
    setMemos(memo)
    setMemo("")
  }

  return (
    <>
      <form onSubmit={handleAddMemo}>
        <input type="text" onChange={handleWriteMemo} value={memo} />
        <button type="submit">작성완료</button>
      </form>
    </>
  )
}

export default Form
