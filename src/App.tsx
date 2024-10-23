import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./redux/features/counterSlice";

function App() {
  const count = useSelector((state ) => state.counter.count)
  const dispatch = useDispatch();
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
     <div className="border bg-green-50 rounded-lg p-10 flex gap-6">
      <button className="text-xl py-2 px-4 bg-green-500 hover:bg-green-700 text-white rounded-md"
      onClick={() => dispatch(increment())}
      >Increment</button>
      <h1 className="text-3xl">{count}</h1>
      <button className="text-xl py-2 px-4 bg-red-500 hover:bg-red-700 text-white rounded-md"
      onClick={() => dispatch(decrement())}
      >Decrement</button>
     </div>
    </div>
  )
}

export default App
