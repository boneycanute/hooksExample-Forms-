import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import UseStateExample from "./Components/UseStateExample.jsx";
import ComponentLifeCycleMethods from "./Components/ComponentLifeCycleMethods.jsx";
import UseEffectExample from "./Components/useEffectExample.jsx";
import ContextAPI_parent from "./Components/ContextAPI_parent.jsx";
import UseReducerExample from "./UseReducerExample.jsx";
import UseCallbackExample from "./UseCallbackExample.jsx";
import UseMemoExample from "./UseMemoExample.jsx";
import UseRefExample from "./UseRefExample.jsx";
import ReactFormsExample from "./ReactFormsExample.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* <App /> */}
    {/* <UseCallbackExample /> */}
    {/* <UseRefExample /> */}
    {/* <UseMemoExample /> */}
    {/* <UseEffectExample /> */}
    {/* <UseStateExample /> */}
    {/* <ComponentLifeCycleMethods /> */}
    {/* <ContextAPI_parent /> */}
    {/* <UseReducerExample /> */}
    <ReactFormsExample />
  </>
);
