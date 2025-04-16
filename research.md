Research Questions


1. What is a Cloudflare Worker?

Cloudflare Worker is a serverless function that runs at the edge (closer to the user) and handles HTTP requests without needing a traditional server.



2. How does a Worker handle HTTP requests and return responses?

Workers use the `fetch` API to receive requests and return `Response` objects, allowing them to intercept, modify, or create responses.



3. What is Cloudflare D1? What are some pros and cons of using it?

D1 is Cloudflare’s SQLite-based serverless database.  
Pros: Fast, scalable, simple to use, no server maintenance.  
Cons: Still in beta, limited SQL feature set compared to full DB engines.



4. How does client-side JavaScript call an external API?

Using `fetch()` or `XMLHttpRequest`, JavaScript sends HTTP requests (GET/POST) to an API endpoint and handles the response asynchronously.



5. What is the benefit of deploying APIs to the edge instead of traditional servers?

Edge deployment reduces latency and increases speed by running code closer to the user. It also improves scalability and eliminates the need for backend infrastructure.


