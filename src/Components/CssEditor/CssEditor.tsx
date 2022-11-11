import React from 'react';
import { useEditorStore } from '../../Services';
import { EditorBase } from '../EditorBase';
export interface CssEditorInterface {
	open?: boolean;
}

export const CssEditor : React.FC<CssEditorInterface> = ({open}) => {
	const { updateCSS, css } = useEditorStore();
	const onCSSEditorChanged = (value: string | undefined) => {
		updateCSS(value ? value : "");
	}
	return <EditorBase language={'css'} open={open} onChange={onCSSEditorChanged} value={css}/>
};
