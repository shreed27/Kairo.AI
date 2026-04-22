export const API_BASE = "http://localhost:8000";

export const checkTrigger = async (day: number, hours: number, minutes: number) => {
  const resp = await fetch(`${API_BASE}/trigger?day=${day}&hours=${hours}&minutes=${minutes}`);
  const data = await resp.json();
  return data;
};

export const sendFeedback = async (id: string, action: string) => {
  await fetch(`${API_BASE}/feedback?id=${id}&action=${action}`, { method: 'POST' });
};
