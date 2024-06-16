// /* eslint-disable react/prop-types */
// const Memos = props => {
//   return (
//     <ul>
//       {props.memos.map(memo => {
//         return <li key="memo">{memo}</li>
//       })}
//     </ul>
//   )
// }

// export default Memos

import useMemosStore from "../stores/memos"

const Memos = () => {
  const { memos } = useMemosStore()

  return (
    <ul>
      {memos.map(memo => {
        return <li key="memo">{memo}</li>
      })}
    </ul>
  )
}

export default Memos
