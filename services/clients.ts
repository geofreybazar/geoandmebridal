import { ClientUser } from "@/types/client";
import { ClientSignupType } from "@/zodSchemas/signupForm";

const service_route = process.env.NEXT_PUBLIC_CLIENT_ROUTE;
const API_URL =
  process.env.NODE_ENV === "production"
    ? `https://geoandmebridalbackend.onrender.com/${service_route}`
    : `http://localhost:3005/${service_route}`;

export const ClientUserLogin = async (
  email: string,
  provider: string | undefined,
) => {
  const data = {
    email,
    provider,
  };
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorBody = await response.json();
      const errorMessage =
        errorBody?.error || response.statusText || "Unknown server error";

      console.error("API fetch failed:", response.status, response.statusText);
      throw new Error(errorMessage);
    }

    return response.json();
  } catch (error: unknown) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export const ClientUserSignup = async (userData: ClientSignupType) => {
  try {
    const response = await fetch(`${API_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorBody = await response.json();
      const errorMessage =
        errorBody?.error || response.statusText || "Unknown server error";

      console.error("API fetch failed:", response.status, response.statusText);
      throw new Error(errorMessage);
    }

    return response.json();
  } catch (error: unknown) {
    console.error("Error creating user profile:", error);
    throw error;
  }
};

export const GetClientUserProfile = async (
  clientId: string,
): Promise<ClientUser> => {
  try {
    const response = await fetch(`${API_URL}/getclient/${clientId}`, {
      method: "GET",
      next: {
        tags: ["ClientProfile"],
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorBody = await response.json();
      const errorMessage =
        errorBody?.error || response.statusText || "Unknown server error";

      console.error("API fetch failed:", response.status, response.statusText);
      throw new Error(errorMessage);
    }

    return response.json();
  } catch (error: unknown) {
    console.error("Error fetching user profiles:", error);
    throw error;
  }
};

export const UpdateClientProfile = async (
  clientId: string,
  userData: Partial<ClientUser>,
): Promise<ClientUser> => {
  try {
    const response = await fetch(`${API_URL}/updateclientprofile/${clientId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorBody = await response.json();
      const errorMessage =
        errorBody?.error || response.statusText || "Unknown server error";

      console.error("API fetch failed:", response.status, response.statusText);
      throw new Error(errorMessage);
    }

    return response.json();
  } catch (error: unknown) {
    console.error("Error updating client profile:", error);
    throw error;
  }
};

export const DeactivateAccount = async (
  clientId: string,
): Promise<ClientUser> => {
  try {
    const response = await fetch(`${API_URL}/deactivateaccount/${clientId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorBody = await response.json();
      const errorMessage =
        errorBody?.error || response.statusText || "Unknown server error";

      console.error("API fetch failed:", response.status, response.statusText);
      throw new Error(errorMessage);
    }

    return response.json();
  } catch (error) {
    console.error("Error updating client profile:", error);
    throw error;
  }
};
