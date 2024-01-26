import React, { FC, PropsWithChildren } from 'react';

// styles
import styles from './styles.module.scss';

const Main: FC<PropsWithChildren<unknown>> = ({
  children,
}: PropsWithChildren<unknown>) => (
  <main className={styles.main}>{children}</main>
);

export default Main;
