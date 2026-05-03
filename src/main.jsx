import App from './App.jsx'
import './index.css'

const DATA = [
  { id: "todo-0", name: "Проверить Домашки", completed: true },
  { id: "todo-1", name: "Поставить 4", completed: false },
  { id: "todo-2", name: "Поставить 5", completed: false },
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>,
)
