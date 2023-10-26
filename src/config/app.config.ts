interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Medical Staff'],
  customerRoles: [],
  tenantRoles: ['Hospital Administrator', 'Medical Staff'],
  tenantName: 'Hospital',
  applicationName: 'Hospital Management Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage patient records',
    'Manage appointments',
    'View doctor information',
    'View hospital information',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/3e561f74-2e8c-41ef-a9f6-565f1f443dc4',
};
