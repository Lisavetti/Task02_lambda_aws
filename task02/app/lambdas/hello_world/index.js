exports.handler = async (event) => {

    let path = event.rawPath || event.path || "/";
    const method = event.requestContext?.http?.method || "UNKNOWN";

    if (path.startsWith("/cmtr-1c7e15d3")) {
        path = `/cmtr-1c7e15d3`;
    }

    let response;

    if (path === "/hello" && method === "GET") {
        response = {
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                statusCode: 200,
                message: "Hello from Lambda"
            })
        };
    } else {
        response = {
            statusCode: 400,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                statusCode: 400,
                message: `Bad request syntax or unsupported method. Request path: ${path}. HTTP method: ${method}`
            })
        };
    }

    return response;
};
