import React, { useState } from 'react';
import styles from './tabs.module.scss';

interface Props {
  children: React.ReactNode[];
  tabNames: string[] | string;
};

const Tabs = ({ children, tabNames }: Props) => {
  const [activeTab, setActiveTab] = useState(0);
  
  return <div>
    <ul role="tablist" className={styles.tabSwitcher}>
      {(Array.isArray(tabNames) ? tabNames : tabNames.split(' ')).map((tabName, i) => <li key={tabName} role="presentation"> 
        <a href="#" role="tab" aria-selected={activeTab === i} onClick={
          e => {
            e.preventDefault();
            setActiveTab(i);
          }
        }>
          {tabNames[i]}
        </a>
      </li>)}
    </ul>

    {children.map((tab, i) => i === activeTab && 
      <div key={i} role="tabpanel" className={styles.tab}>
        {tab}
      </div>
    )}
  </div>;
};

export default Tabs;
