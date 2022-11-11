import React, { useEffect, useState } from 'react';
import { useEditorStore } from '../../Services';
import styles from './styles/EditorViewer.module.css';
export interface EditorViewerInterface {
	open: boolean;
}

export const EditorViewer : React.FC<EditorViewerInterface> = ({open}) => {
	const [doc, setDoc] = useState("");
	const { html, css, js } = useEditorStore();
	useEffect(()=>{
		setDoc(`<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta http-equiv="X-UA-Compatible" content="IE=edge">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Document</title>
			<style>${css}</style>
		</head>
		<body>
		${html}
			<script>${js}</script>
		</body>
		</html>`);
	},[html, css, js]);
	return open ? <iframe className={styles.editorviewer} srcDoc={doc}></iframe > : null;
};
