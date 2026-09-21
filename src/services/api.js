const API_BASE_URL = "http://127.0.0.1:8000";

async function request(endpoint, options = {}) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || `API Error: ${response.status}`);
  }

  return response.json();
}

export const api = {
  // Innovations
  getInnovations: () =>
    request("/api/innovations"),

  getInnovation: (id) =>
    request(`/api/innovations/${id}`),

  createInnovation: (data) =>
    request("/api/innovations", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  updateInnovation: (id, data) =>
    request(`/api/innovations/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),

  deleteInnovation: (id) =>
    request(`/api/innovations/${id}`, {
      method: "DELETE",
    }),

  analyzeInnovation: (id) =>
    request(`/api/innovations/${id}/analyze`, {
      method: "POST",
    }),

  // Dashboard
  getDashboardSummary: () =>
    request("/api/dashboard/summary"),

  // Backend health
  health: () =>
    request("/"),
};

export default api;