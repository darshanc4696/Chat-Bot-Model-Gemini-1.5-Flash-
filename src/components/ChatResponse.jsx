const ChatResponse = ({ response }) => {
    if (!response) {
      return null;
    }
  
    const { candidates, usageMetadata } = response;
  
    return (
      <div className="mt-4">
        <h4 className="text-primary">Response</h4>
        {candidates.map((candidate, index) => (
          <div className="card mb-3 shadow-sm" key={index}>
            <div className="card-body">
              <p className="card-text">{candidate.content.parts[0].text}</p>
              <h6 className="text-secondary mt-3">Citations:</h6>
              <ul className="list-unstyled">
                {candidate?.citationMetadata?.citationSources.map(
                  (source, idx) => (
                    <li key={idx}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary"
                      >
                        {source.url}
                      </a>{" "}
                      (Indexes: {source.startIndex} - {source.endIndex})
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        ))}
  
        <div className="mt-4">
          <h5>Usage Metadata</h5>
          <p>Prompt Tokens: {usageMetadata.promptTokenCount}</p>
          <p>Candidates Token Count: {usageMetadata.candidatesTokenCount}</p>
          <p>Total Token Count: {usageMetadata.totalTokenCount}</p>
        </div>
      </div>
    );
  };
  
  export default ChatResponse;
  