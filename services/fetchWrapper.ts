// lib/api.ts

export async function apiFetch(input: RequestInfo | URL, init?: RequestInit) {
  let response = await fetch(input, {
    ...init,
    credentials: "include",
  });

  if (response.status !== 401) {
    return response;
  }

  // Try to refresh the access token
  const refreshResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`,
    {
      method: "POST",
      credentials: "include",
    },
  );

  if (!refreshResponse.ok) {
    throw new Error("Session expired");
  }

  // Retry original request
  response = await fetch(input, {
    ...init,
    credentials: "include",
  });

  return response;
}
