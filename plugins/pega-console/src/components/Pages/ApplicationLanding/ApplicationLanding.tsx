import React from 'react';
import { useParams } from 'react-router-dom';

interface Props {
  id: string;
}

export const ApplicationLanding = () => {
  // Get the applicationId parameter from the URL
  const { applicationId } = useParams();

  // Example application data
  const applications = [
    { id: '1', name: 'Application 1', description: 'This is Application 1' },
    { id: '2', name: 'Application 2', description: 'This is Application 2' },
    { id: '3', name: 'Application 3', description: 'This is Application 3' },
  ];

  // Find the application with the given id
  const application = applications.find((app) => app.id === applicationId);

  // Display the application data
  if (application) {
    return (
      <div>
        <h1>Application Landing Page</h1>
        <p>Application ID: {application.id}</p>
        <p>Name: {application.name}</p>
        <p>Description: {application.description}</p>
      </div>
    );
  } else {
    return <div>Application not found</div>;
  }
};