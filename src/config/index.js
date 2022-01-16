const urls = new Map();

urls.set('localhost', 'http://localhost:5000');

user.set('test-app-expert', 'https://test-app-expert.vercel.app/');

user.set('prod-app-expert', 'https://prod-app-expert.vercel.app/');

export const baseUrl = urls.get(window.location.hostname);
