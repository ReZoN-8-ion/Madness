define(['object-utils'], function(utils) {
	'use strict';

	return utils.constants([
		'USER',
		'APPLICATION',
		'PARTNER',
		'PARTNER_READ',
		'COMPANY',
		'CLIENT',

		// Membership-level roles
		'BILLING_ADMIN',
		'SYS_ADMIN',
		'DEVELOPER',
		'CHANNEL_PRODUCT_SUPPORT',
		'CHANNEL_SUPPORT',
		'CHANNEL_ADMIN',
		'REPORTS_CHANNEL_ADMIN',
		'CORPORATE_ADMIN',
		'RESELLER',
		'REFERRAL',
		'SALES_SUPPORT',
		'RESELLER_MANAGER',
		'INTERNAL_REPORTS_USER',

		// @Deprecated
		'RESTRICTED_SALES_SUPPORT',

		// User-level roles
		'SUPERUSER',
		'SUPER_SUPPORT',
		'ANALYTICS_ADMIN',
		'LAYOUT_DESIGNER',

		// Migration
		'MIGRATION_COMPANY_ACCESS',
		'MIGRATION_CHANNEL_ACCESS',

		'CUSTOM_ATTRIBUTES_MANAGEMENT_ACCESS',
		'MANAGE_EVENTS',
		'API_KEY_GENERATION_ACCESS',
		'BULK_OPERATIONS_ACCESS',
		'CREATE_CUSTOMER_COMPANIES',
		'USE_INVOICE_BUILDER',
		'INVOICE_SETTINGS',
		'ACCESS_DOCUMENT_BUILDER',

		// Quote
		'QUOTE_REQUEST_WHOLESALE_PRICE',
		'SHOW_WHOLESALE_PRICE_IN_OPPORTUNITIES',
		'CREATE_QUOTE',

		// Network
		'NETWORK_CATALOG_MANAGER',

		// Legal
		'SET_LEGAL_TERMS'
	]);
});
