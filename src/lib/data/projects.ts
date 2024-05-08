import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'slick-portfolio-1',
		color: '#5e95e3',
		description: 'a web-based Modified Online Transaction Integrated Bookkeeping System that helps these said processes of the company. The system is able to get data from their existing (Xendit) to collect the company’s financial data, have features of journalizing the company’s financial records for bookkeeping, and have an automated filing of BIR reports and generating the reports through PDF and excel fIles with BIR formats (such as annual tax etc.).',
		shortDescription: 'MOTIBS, based on the client’s needs, aims to provide ease to the process of bookkeeping',
		links: [{ to: 'https://github.com/PapayaVi', label: 'GitHub' }],
		logo: Assets.Sociov,
		name: 'Modified Online Transaction Integrated Bookkeeping System',
		period: {
			from: new Date(2022, 1, 1), to: new Date(2022, 4, 1)
		},
		skills: getSkills('angular', 'ts', 'tailwind'),
		type: 'Web-app',
		screenshots: [
			{
				label: '1',
				src: 'https://raw.githubusercontent.com/PapayaVi/portfolio/main/static/screenshots/AIS_login.png'
			},
			{
				label: '2',
				src: 'https://raw.githubusercontent.com/PapayaVi/portfolio/main/static/screenshots/AIS_home.png'
			},
			{
				label: '3',
				src: 'https://raw.githubusercontent.com/PapayaVi/portfolio/main/static/screenshots/AIS_gl.png'
			},
			{
				label: '4',
				src: 'https://raw.githubusercontent.com/PapayaVi/portfolio/main/static/screenshots/AIS_tax.png'
			},
			{
				label: '5',
				src: 'https://raw.githubusercontent.com/PapayaVi/portfolio/main/static/screenshots/AIS_bst.png'
			},
			{
				label: '6',
				src: 'https://raw.githubusercontent.com/PapayaVi/portfolio/main/static/screenshots/AIS_coa.png'
			},
			{
				label: '7',
				src: 'https://raw.githubusercontent.com/PapayaVi/portfolio/main/static/screenshots/AIS_cfs.png'
			}
		]
	},
	{
		slug: 'slick-portfolio-2',
		color: '#ff3e00',
		description:
			'',
		shortDescription:
			'',
		links: [{ to: 'https://github.com/PapayaVi', label: 'GitHub' }],
		logo: Assets.SimlinEnterprise,
		name: 'Microtex Inventory System',
		period: {
			from: new Date(2022, 1, 31), to: new Date(2022, 12, 1)
		},
		skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
		type: 'Web-app, Dashboard',
		screenshots: [
			{
				label: 'screen 1',
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '2',
				src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '3',
				src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '4',
				src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '5',
				src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '6',
				src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			}
		]
	},
	{
		slug: 'slick-portfolio-3',
		color: '#5e95e3',
		description: 'The company requested a stock monitoring system to improve its monitoring process. This is due to their current means of monitoring their inventory which is only through encoding in Google Sheets which has been proven to be prone to inaccuracies and errors. The system could not only be an auxiliary to improve monitoring stocks but also could stand as decision support for the decision-makers of the company by also being a means to display the results of the analysis through a dashboarding feature',
		shortDescription: '',
		links: [{ to: 'https://github.com/PapayaVi', label: 'GitHub' }],
		logo: Assets.CyberQ,
		name: 'Sales Web-based Report Management System',
		period: {
			from: new Date(2020, 11, 30), to: new Date(2021, 4, 1)
		},
		skills: getSkills('angular', 'ts', 'tailwind'),
		type: 'Web-app, Dashboard',
		screenshots: [
			{
				label: '1',
				src: 'https://raw.githubusercontent.com/PapayaVi/portfolio/main/static/screenshots/se_login.png'
			},
			{
				label: '2',
				src: 'https://raw.githubusercontent.com/PapayaVi/portfolio/main/static/screenshots/se_inv.png'
			},
			{
				label: '3',
				src: 'https://raw.githubusercontent.com/PapayaVi/portfolio/main/static/screenshots/se_prod.png'
			},
			{
				label: '4',
				src: 'https://raw.githubusercontent.com/PapayaVi/portfolio/main/static/screenshots/se_prod_edit.png'
			},
			{
				label: '5',
				src: 'https://raw.githubusercontent.com/PapayaVi/portfolio/main/static/screenshots/se_prod_stock.png'
			},
			{
				label: '6',
				src: 'https://raw.githubusercontent.com/PapayaVi/portfolio/main/static/screenshots/se_db_desc.png'
			},
			{
				label: '7',
				src: 'https://raw.githubusercontent.com/PapayaVi/portfolio/main/static/screenshots/se_db_forecast.png'
			}
		]
	},
];

export const title = 'Projects';
