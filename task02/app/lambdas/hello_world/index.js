exports.handler = async (event) => {
    console.log("Received request:", event);

    const path = event.rawPath || event.path || "/";
    const method = event.requestContext?.http?.method || "UNKNOWN";

    let response;
    if (path === "/hello" && method === "GET") {
        response = {
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: "Hello from Lambda" })
        };
    } else {
        response = {
            statusCode: 400,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                error: "Bad request syntax or unsupported method",
                requestPath: path,
                httpMethod: method
            })
        };
    }

    return response;
};
