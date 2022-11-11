import React, { useState } from 'react';
import styles from './styles/Tabs.module.css';


export interface TabsInterface {
	tabs: string[];
	onTabClick: (tab: string) => void;
	activeBackground?: string;
	background?: string;
	textColor?: string;
}

export const Tabs: React.FC<TabsInterface> = ({ tabs, onTabClick, activeBackground = '#1E1E1E', background = 'transparent', textColor = '#f0f0f0' }) => {
	const [activeTab, setActiveTab] = useState(tabs[0]);
	const clickTabHandle = (tab: string) => {
		onTabClick(tab);
		setActiveTab(tab);
	};
	return <div className={styles.tabs}>
		<ul style={{ color: textColor }}>
			{
				tabs.map((tab, i) => (
					<li key={`tab-item-${i}`}
						className={`${(activeTab === tab) ? 'active-tab' : ''}`}
						style={{ backgroundColor: (activeTab === tab) ? activeBackground : background }}
						onClick={(e) => clickTabHandle(e.currentTarget.innerText)}>
						{tab}
					</li>
				)
				)
			}
		</ul>
	</div >;
};
