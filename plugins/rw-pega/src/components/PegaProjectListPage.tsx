import { Button, LinearProgress, Tooltip, Typography } from '@material-ui/core';
import React from 'react';

import {
  Content,
  ContentHeader,
  Header,
  HeaderLabel,
  Page,
  SupportButton
} from '@backstage/core-components';


import { Link as RouterLink } from 'react-router-dom';

const labels = (
    <>
      <HeaderLabel label="Owner" value="Spotify" />
      <HeaderLabel label="Lifecycle" value="Production" />
    </>
  );


export const PegaProjectListPage = () => (
    <Page themeId="service">
      <Header title="GCP Projects" type="tool">
        {labels}
      </Header>
      <Content>
        <ContentHeader title="">
          <Button
            component={RouterLink}
            variant="contained"
            color="primary"
            to="project"
          >
            New Project
          </Button>
          <SupportButton>All your software catalog entities</SupportButton>
        </ContentHeader>
        <RouterLink to={'new'} >test link</RouterLink>
 
      </Content>
    </Page>
  );