import React, { useState } from 'react';
import { ActionsBar, JsEditor, NavBar, CssEditor, HtmlEditor, EditorViewer } from '../../Components';
import { Tabs } from '../../Components/Tabs';
export interface HomeInterface { }

export const Home: React.FC<HomeInterface> = () => {
	
	const totalTabs = ['HTML', 'CSS', 'JS', 'PREVIEW'];
	const [activeTabIndex, setActiveTabIndex] = useState(0);
	const onChangeTab = (tab: string) => {
		setActiveTabIndex(totalTabs.indexOf(tab));
	}
	return <div>
		<NavBar />
		<div className="box-app">
			<div className="">
				<ActionsBar />
			</div>
			<div className="mt-3">
				<Tabs tabs={totalTabs} onTabClick={onChangeTab} />
				<HtmlEditor open={activeTabIndex === 0} />
				<CssEditor open={activeTabIndex === 1} />
				<JsEditor open={activeTabIndex === 2} />
				<EditorViewer open={activeTabIndex === 3} />
			</div>
		</div>
	</div>;
};
