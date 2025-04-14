import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const formFields = Object.fromEntries(data.entries());
  const formData = new FormData();
  formData.append("data", JSON.stringify(formFields));

  const backendUrl = import.meta.env.PUBLIC_BACKEND_URL || "http://localhost:3000";

  const res = await fetch(`${backendUrl}/api/v1/@apostrophecms/form/submit`, {
    method: "POST",
    body: data,
    headers: {
      "cookie": "hybridsite.csrf=csrf;"
    }
  });

  const text = await res.text();

  return new Response(text, {
    status: res.status,
    headers: { "Content-Type": "text/plain" }
  });
};
