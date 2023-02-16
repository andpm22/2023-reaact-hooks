import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter,
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import './index.css'
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { CustomHookForm } from './02-useEffect/CustomHookForm';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { CounterApp } from './01-useState/CounterApp';
// import { HooksApp } from './HooksApp';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { LayOut } from './05-useLayoutEffect/LayOut';
// import { Memorized } from './06-Memos/Memorized';
// import { MemoHook } from './06-Memos/MemorHook';
// import { CallbackHook } from './06-Memos/CallbackHook';
// import { Padre } from './07-tarea-memo/07-tarea-memo/Padre';
// import { Padre } from './07-tarea-memo/07-tarea-memo/Padre';
// import './08-useReducer/intro-reducer'
// import { TodoApp } from './08-useReducer/TodoApp';
import { MainApp } from './09-useContext/MainApp';

ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>
        <MainApp/>
    </BrowserRouter>

)
