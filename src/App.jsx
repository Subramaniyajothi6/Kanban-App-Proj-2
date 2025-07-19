import Board from './Board'
import { TaskProvider } from './context/TaskContext'

const App = () => {
  return (
    <TaskProvider> 
      <Board />
    </TaskProvider>
  )
}

export default App