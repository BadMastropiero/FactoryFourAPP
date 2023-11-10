export const endpoints = {
  service: (name: string) => `https://api.factoryfour.com/${name}/health/status`,
};

export const SERVICES_LIST = [
  'accounts',
  'assets',
  'customers',
  'datapoints',
  'devices',
  'documents',
  'forms',
  'invites',
  'media',
  'messages',
  'namespaces',
  'orders',
  'patients',
  'relationships',
  'rules',
  'templates',
  'users',
  'workflows',
];

export const SERVICE_STATUS_REFRESH_INTERVAL = 15000;
