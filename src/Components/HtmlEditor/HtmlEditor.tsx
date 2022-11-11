import React from 'react';
import { useEditorStore } from '../../Services';
import { EditorBase } from '../EditorBase';
export interface HtmlEditorInterface {
	open?: boolean;
}

export const HtmlEditor : React.FC<HtmlEditorInterface> = ({open}) => {
	const { updateHTML, html } = useEditorStore();
	const onHTMLEditorChanged = (value: string | undefined) => {
		updateHTML(value ? value : "");
	}
	return <EditorBase language={'html'} open={open} onChange={onHTMLEditorChanged} value={html}/>
};