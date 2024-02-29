import React, { useState } from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import { Content, ContentHeader, Header, HeaderLabel, HeaderTabs, Link, Page, SupportButton, Table, TableColumn } from '@backstage/core-components';
import { useParams } from 'react-router-dom';
import { ApplicationLanding } from '../Pages/ApplicationLanding/ApplicationLanding';
import ApplicationsTable from '../ApplicationsTable/ApplicationsTable';

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(2),
  },
  empty: {
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
  },
}));

const tabMapping : any = {
  Applications: ApplicationsTable,
  Cases: ApplicationsTable,
  Data: ApplicationsTable,
  Integration: ApplicationsTable,
  Resources: ApplicationsTable,
  Systems: ApplicationsTable
};


const tabs = [
  { label: 'Applications'},
  { label: 'Cases' },
  { label: 'Data' },
  { label: 'Integrations' },
  { label: 'Resources' },
  { label: 'Systems' },
];

const HomeHeader = () => (
  <Header title="Pega Console" subtitle="See the status of all your systems">
    <HeaderLabel label="Owner" value="Rulesware" />
    <HeaderLabel label="Lifecycle" value="Development" />
  </Header>
);

const HomeContentHeader = ({ selectedTab }: { selectedTab?: number }) => (
  <ContentHeader
    title={selectedTab !== undefined ? tabs[selectedTab].label : 'Header'}
  >
    <SupportButton>
      This Plugin is an example. This text could provide useful information for
      the user.
    </SupportButton>
  </ContentHeader>


);

const generateTestData = (rows = 10) => {
  const data = [];
  for (let i = 0; i < rows; i++) {
    data.push({
      id: i.toString(),
      name: `Application ${i}`,
      description: `This is Application ${i}`,
    });
  }
  return data;
};



export const HomePage = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const renderTabContent = (label: string) => {
    const Component = tabMapping[label];
    return <Component />;
  };

  return  (
    <div style={{ border: '0px solid #ddd' }}>
      <Page themeId="tool">
        <HomeHeader />

        <HeaderTabs
          selectedIndex={selectedTab}
          onChange={index => setSelectedTab(index)}
          tabs={tabs.map(({ label }, index) => ({
           
            id: index.toString(),
            label,
            
          }))}
        />
        <Content>
          <HomeContentHeader selectedTab={selectedTab} />
          {renderTabContent(tabs[selectedTab].label)}
          
        </Content>
      </Page> 
    </div>
  );
};

export default HomePage;