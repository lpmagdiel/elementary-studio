import Editor from '@monaco-editor/react';
import React from 'react';
export interface EditorBaseInterface {
	open?: boolean;
	onChange?: (value: string | undefined) => void;
	language: string;
	value?: string;
}

export const EditorBase: React.FC<EditorBaseInterface> = ({ language, onChange = (val) => { }, open, value='' }) => {

	return <div>
		{
			open ?
				<Editor
					height="90vh"
					defaultLanguage={language}
					onChange={onChange}
					defaultValue={value}
					theme="vs-dark"
					options={{ fontLigatures: true, fontSize: 18, minimap: { enabled: false }, wordWrap: "on" }}
				/> : null
		}
	</div>;
};
