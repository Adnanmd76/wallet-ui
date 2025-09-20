const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || '';

interface LoginResponse {
  token: string;
  user: Record<string, any>;
}

const getAuthHeaders = (): Record<string, string> => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const login = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) throw new Error('Login failed');
  return await res.json();
};

export const fetchUserProfile = async (): Promise<Record<string, any>> => {
  const res = await fetch(`${API_BASE}/user/profile`, {
    headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
  });
  if (!res.ok) throw new Error('Fetching user profile failed');
  return await res.json();
};

export const logout = async (): Promise<void> => {
  await fetch(`${API_BASE}/auth/logout`, {
    method: 'POST',
    headers: getAuthHeaders(),
  });
  if (typeof window !== 'undefined') {
    localStorage.removeItem('token');
  }
};
