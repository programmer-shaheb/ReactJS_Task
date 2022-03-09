import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Successful from "./components/Successful/Successful";

const App = () => {
  const [confirm, setConfirm] = useState(false);

  const handleSubmit = () => {
    setConfirm((prev) => !prev);
  };

  return (
    <div className="layout">
      {!confirm ? (
        <>
          <Header />
          <Form onSubmit={handleSubmit} />
        </>
      ) : (
        <Successful />
      )}
    </div>
  );
};

export default App;
