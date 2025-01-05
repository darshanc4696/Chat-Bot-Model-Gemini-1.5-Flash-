import { useState } from "react";
import "./App.css";
import ChatInput from "./components/ChatInput";
import ChatResponse from "./components/ChatResponse";
import { fetchChatResponse } from "./services/api";

function App() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleQuestionSubmit = async (question) => {
    setLoading(true);
    setResponse(null);
    try {
      const apiResponse = await fetchChatResponse(question);
      setResponse(apiResponse);
    } catch (error) {
      alert("Failed to generate a response. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App bg-light">
      <header className="bg-primary text-white text-center py-4 shadow-sm">
        <h1>Q&A Bot</h1>
        <p>Your AI-powered assistant</p>
      </header>
      <div className="container my-5">
        <ChatInput onSubmit={handleQuestionSubmit} loading={loading} />
        {loading ? (
          <div className="text-center mt-5">
            <div className="spinner-border text-primary" role="status"></div>
            <p className="mt-3">Generating response...</p>
          </div>
        ) : (
          <ChatResponse response={response} />
        )}
      </div>
    </div>
  );
}

export default App;
