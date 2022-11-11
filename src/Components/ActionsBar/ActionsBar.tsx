import React from 'react';
import { Boxes, CloudDownloadFill, CodeSlash, PeopleFill } from 'react-bootstrap-icons';

import styles from './styles/ActionsBar.module.css';
export interface ActionsBarInterface { }

export const ActionsBar: React.FC<ActionsBarInterface> = () => {
	return <div className={styles.actionsbar}>
		<CodeSlash />
		<Boxes/>
		<CloudDownloadFill/>
		<PeopleFill/>
	</div >;
};
