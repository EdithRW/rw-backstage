/* 
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { CardTab, Content, ContentHeader, GaugeCard, Header, HeaderLabel, HeaderTabs, InfoCard, Link, LogViewer, Page, StructuredMetadataTable, SupportButton, Tab, TabbedCard, TrendLine } from '@backstage/core-components';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React, { PropsWithChildren,  useState } from 'react';

const metadata = {
  description:
    'This is a long description of what this is doing (and some additional info too). \n It has new lines and extra text to make it especially annoying to render. But it just ignores them.',
  something: 'Yes',
  'true value': true,
  'false value': false,
  owner: 'squad',
  'longer key name': ['v1', 'v2', 'v3'],
  rules: {
    'permit missing partitions': 'No',
    'max partition finish time': '19 hours',
    Support: {
      'office hours': 'Contact goalie',
      'after hours': 'trigger PD alert',
    },
  },
};



const Overview = () => {

  return (
    <Grid item sm container>
      <Grid item xs={6}>
        <InfoCard title="Trend">
          <TrendLine data={[0.1, 0.5, 0.9, 1.0]} title="Trend over time" />
        </InfoCard>
      </Grid>
      <Grid item xs={6}>
        <InfoCard title="Structured Metadata Table" subheader="Wrapped in InfoCard">
        <div style={cardContentStyle}>
          <StructuredMetadataTable metadata={metadata} />
        </div>
      </InfoCard>
      </Grid>
    </Grid>
)
  
}

const CICD = () => {

  return (
    <Grid
        item
        sm={12}
        container
        spacing={0}
        justifyContent="space-between"
        direction="row"
      >
        <Grid item>
      <GaugeCard title="Progress" progress={0.3} />
    </Grid>
    <Grid item>
      <GaugeCard title="Progress" progress={0.57} />
    </Grid>
    <Grid item>
      <GaugeCard title="Progress" progress={0.89} />
    </Grid>
    <Grid item>
      <GaugeCard title="Progress" inverse progress={0.2} />
    </Grid>
      </Grid>
  )
}

const exampleLog = `Starting up task with 3 steps
Beginning step Fetch Skeleton + Template
[32minfo [39m: Fetching template content from remote URL: https://github.com/backstage/software-templates/tree/main/scaffolder-templates/react-ssr-template/skeleton {"timestamp":"2021-12-03T15:47:11.625Z"}
[32minfo[39m: Listing files and directories in template {"timestamp":"2021-12-03T15:47:12.797Z"}
Finished step Fetch Skeleton + Template
Beginning step Publish
HttpError: Not Found
    at /Users/patriko/dev/backstage/node_modules/@octokit/request/dist-node/index.js:86:21
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (internal/process/task_queues.js:95:5)
    at async Object.handler (webpack-internal:///../../plugins/scaffolder-backend/src/scaffolder/actions/builtin/publish/github.ts:156:20)
    at async HandlebarsWorkflowRunner.execute (webpack-internal:///../../plugins/scaffolder-backend/src/scaffolder/tasks/HandlebarsWorkflowRunner.ts:254:11)
    at async TaskWorker.runOneTask (webpack-internal:///../../plugins/scaffolder-backend/src/scaffolder/tasks/TaskWorker.ts:110:13)
    at async eval (webpack-internal:///../../plugins/scaffolder-backend/src/scaffolder/tasks/TaskWorker.ts:100:9)
Run completed with status: failed`;


const CostTest = () => {

  return (
    <div style={{ height: 300 }}>
    <LogViewer text={exampleLog} />
  </div>
  )
}


const tabMapping : any = {
  Overview: Overview,
  Compliance: CICD,
  Logs: CostTest,


};


const tabs = [
  { label: 'Overview'},
  { label: 'Compliance' },
  { label: 'Logs' },

];

const DataGrid = () => (
  <Grid container>
    <Grid item xs container>
      <Grid item xs={12}>
        <InfoCard title="Trend">
          <TrendLine data={[0.1, 0.5, 0.9, 1.0]} title="Trend over time" />
        </InfoCard>
      </Grid>
      <Grid
        item
        xs={12}
        container
        spacing={2}
        justifyContent="space-between"
        direction="row"
      >
        <Grid item xs={12} md={6}>
          <GaugeCard
            title="GKE Usage Score"
            subheader="This should be above 75%"
            progress={0.87}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <GaugeCard
            title="Deployment Score"
            subheader="This should be above 40%"
            progress={0.58}
          />
        </Grid>
      </Grid>
    </Grid>
    <Grid item xs>
      <InfoCard
        title="Additional Information"
        deepLink={{ title: 'Learn more about GKE', link: '' }}
      >
        <Typography variant="h6">Rightsize GKE deployment</Typography>
        <Typography paragraph>
          Services are considered underutilized in GKE when the average usage of
          requested cores is less than 80%.
        </Typography>
        <Typography variant="h6">What can I do?</Typography>
        <Typography paragraph>
          Review requested core and limit settings. Check HPA target scaling
          settings in <code>hpa.yaml</code>. The recommended value for&nbsp;
          <code>targetCPUUtilizationPercentage</code> is <code>80</code>.
        </Typography>
        <Typography paragraph>
          For single pods, there is of course no HPA. But it can also be useful
          to think about a single pod out of a larger deployment, then modify
          based on HPA requirements. Within a pod, each container has its own
          CPU and memory requests and limits.
        </Typography>
        <Typography variant="h6">Definitions</Typography>
        <Typography paragraph>
          A request is a minimum reserved value; a container will never have
          less than this amount allocated to it, even if it doesn't actually use
          it. Requests are used for determining what nodes to schedule pods on
          (bin-packing). The tension here is between not allocating resources we
          don't need, and having easy-enough access to enough resources to be
          able to function.
        </Typography>
        <Typography paragraph>
          Contact <Link to="#cost-awareness">#cost-awareness</Link> for
          information and support.
        </Typography>
      </InfoCard>
    </Grid>
  </Grid>
);


const ExampleHeader = () => (
  <Header title="LaunchPoint" subtitle="Test launchpoint Landing Page">
    <HeaderLabel label="Owner" value="Rulesware" />
    <HeaderLabel label="Lifecycle" value="Development" />
  </Header>
);

const ExampleContentHeader = ({ selectedTab }: { selectedTab?: number }) => (
  <ContentHeader
    title={selectedTab !== undefined ? tabs[selectedTab].label : 'Header'}
  >
    <SupportButton>
      This Plugin is an example. This text could provide useful information for
      the user.
    </SupportButton>
  </ContentHeader>


);

export const ExampleComponent = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const renderTabContent = (label: string) => {
    const Component = tabMapping[label];
    return <Component />;
  };

  return  (
    <div style={{ border: '0px solid #ddd' }}>
      <Page themeId="tool">
        <ExampleHeader />

        <HeaderTabs
          selectedIndex={selectedTab}
          onChange={index => setSelectedTab(index)}
          tabs={tabs.map(({ label }, index) => ({
           
            id: index.toString(),
            label,
            
          }))}
        />
        <Content>
          <ExampleContentHeader selectedTab={selectedTab} />
          {renderTabContent(tabs[selectedTab].label)}
          
        </Content>
      </Page>
    </div>
  );
};



const cardContentStyle = { height: 200, width: 500 };

const WithControlledTabValue = () => {
  const [selectedTab, setSelectedTab] = useState<string | number>('one');

  const handleChange = (_ev: any, newSelectedTab: string | number) =>
    setSelectedTab(newSelectedTab);

  return (
<>
      <Typography component="span">Selected tab is {selectedTab}</Typography>

      <TabbedCard
        value={selectedTab}
        onChange={handleChange}
        title="Controlled Value Example"
      >
        <CardTab value="one" label="Option 1">
          <div style={cardContentStyle}>Some content</div>
        </CardTab>
        <CardTab value="two" label="Option 2">
          <div style={cardContentStyle}>Some content 2</div>
        </CardTab>
        <CardTab value="three" label="Option 3">
          <div style={cardContentStyle}>Some content 3</div>
        </CardTab>
        <CardTab value="four" label="Option 4">
          <div style={cardContentStyle}>Some content 4</div>
        </CardTab>
      </TabbedCard>
</>
  );
};




