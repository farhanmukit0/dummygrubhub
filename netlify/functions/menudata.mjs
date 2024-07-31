// netlify/functions/sample-function.mjs

export default async (req, context) => {
    const data = {
      message: "Hello, Netlify!",
      timestamp: new Date().toISOString(),
      environment: Netlify.env.get("ENVIRONMENT") || "development"
    };
  
    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" }
    });
  };
  