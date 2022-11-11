import React from 'react';
import { useEditorStore } from '../../Services';
import { EditorBase } from '../EditorBase';
export interface JsEditorInterface {
	open?: boolean;
}

export const JsEditor : React.FC<JsEditorInterface> = ({open=true}) => {
	const { updateJS, js } = useEditorStore();
	const onJSEditorChanged = (value: string | undefined) => {
		updateJS(value ? value : "");
	}
	return <EditorBase language="typescript" onChange={onJSEditorChanged} open={open} value={js}/>
};