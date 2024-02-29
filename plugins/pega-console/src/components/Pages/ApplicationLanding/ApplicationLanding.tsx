import { Content, ContentHeader, Header, HeaderLabel, HeaderTabs, Page, SupportButton } from '@backstage/core-components';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { OverviewPage } from '../../Applications/OverviewPage';
import { BranchesPage } from '../../Applications/BranchesPage';
import { CasesPage } from '../../Applications/CasesPage';
import { DataPage } from '../../Applications/DataPage';
import { IntegrationsPage } from '../../Applications/IntegrationsPage';
import { useRouteRef } from '@backstage/core-plugin-api';
import { rootRouteRef } from '../../../routes';



const tabMapping : any = {
    Overview: OverviewPage,
    Branches: BranchesPage,
    Cases: CasesPage,
    Data: DataPage,
    Integrations: IntegrationsPage,
  };
  
  
  const tabs = [
    { label: 'Overview'},
    { label: 'Branches' },
    { label: 'Cases' },
    { label: 'Data' },
    { label: 'Integrations' },
  ];

  interface AppHeaderProps {
    appID: string; // Define the type of ID parameter
  }
  
  const AppHeader: React.FC<AppHeaderProps> = ({ appID }) => {
    const docsRootLink = useRouteRef(rootRouteRef)();

    return (

    <Header title={`Application ${appID}`} subtitle="See the status of all your systems" type="Home" typeLink={docsRootLink}>
      <HeaderLabel label="Owner" value="Rulesware" />
      <HeaderLabel label="Lifecycle" value="Development" />
    </Header>
    
    )
  };

  const AppContentHeader = ({ selectedTab }: { selectedTab?: number }) => (
    <ContentHeader
      title={selectedTab !== undefined ? tabs[selectedTab].label : 'Header'}
    >
      <SupportButton>
        This Plugin is an example. This text could provide useful information for
        the user.
      </SupportButton>
    </ContentHeader>
  
  );


interface Props {
    match?: {
      params: {
        applicationId: string;
      };
    };
  }


export const ApplicationLanding: React.FC<Props> = ({ match }) => {


    const { applicationId } = useParams<{ applicationId: string }>();
  // Example application data
  const applications = [
    { id: '1', name: 'Application 1', description: 'This is Application 1' },
    { id: '2', name: 'Application 2', description: 'This is Application 2' },
    { id: '3', name: 'Application 3', description: 'This is Application 3' },
  ];

  // Find the application with the given id
  const application = applications.find((app) => app.id === applicationId);

  const [selectedTab, setSelectedTab] = useState<number>(0);
  
    const renderTabContent = (label: string) => {
      const Component = tabMapping[label];
      return <Component />;
    };


  // Display the application data
  if (application) {
    return (
        <div style={{ border: '0px solid #ddd' }}>
        <Page themeId="website">
          <AppHeader appID={`${applicationId}`} />
          {applicationId}
  
          <HeaderTabs
            selectedIndex={selectedTab}
            onChange={index => setSelectedTab(index)}
            tabs={tabs.map(({ label }, index) => ({
             
              id: index.toString(),
              label,
              
            }))}
          />
          <Content>
            <AppContentHeader selectedTab={selectedTab} />
            {renderTabContent(tabs[selectedTab].label)}
            
          </Content>
        </Page> 
      </div>
    );
  } else {
    return <div>Application not found</div>;
  }
};

