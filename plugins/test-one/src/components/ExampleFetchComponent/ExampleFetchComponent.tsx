import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableColumn, Progress, ResponseErrorPanel } from '@backstage/core-components';
import useAsync from 'react-use/lib/useAsync';
import axios from 'axios';

export const exampleUsers = {
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Carolyn",
        "last": "Moore"
      },
      "email": "carolyn.moore@example.com",
      "picture": "https://api.dicebear.com/6.x/open-peeps/svg?seed=Carolyn",
      "nat": "GB"
    },
    {
      "gender": "female",
      "name": {
        "title": "Ms",
        "first": "Esma",
        "last": "Berberoğlu"
      },
      "email": "esma.berberoglu@example.com",
      "picture": "https://api.dicebear.com/6.x/open-peeps/svg?seed=Esma",
      "nat": "TR"
    },
    {
      "gender": "female",
      "name": {
        "title": "Ms",
        "first": "Isabella",
        "last": "Rhodes"
      },
      "email": "isabella.rhodes@example.com",
      "picture": "https://api.dicebear.com/6.x/open-peeps/svg?seed=Isabella",
      "nat": "GB"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Derrick",
        "last": "Carter"
      },
      "email": "derrick.carter@example.com",
      "picture": "https://api.dicebear.com/6.x/open-peeps/svg?seed=Derrick",
      "nat": "IE"
    },
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Mattie",
        "last": "Lambert"
      },
      "email": "mattie.lambert@example.com",
      "picture": "https://api.dicebear.com/6.x/open-peeps/svg?seed=Mattie",
      "nat": "AU"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Mijat",
        "last": "Rakić"
      },
      "email": "mijat.rakic@example.com",
      "picture": "https://api.dicebear.com/6.x/open-peeps/svg?seed=Mijat",
      "nat": "RS"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Javier",
        "last": "Reid"
      },
      "email": "javier.reid@example.com",
      "picture": "https://api.dicebear.com/6.x/open-peeps/svg?seed=Javier",
      "nat": "US"
    },
    {
      "gender": "female",
      "name": {
        "title": "Ms",
        "first": "Isabella",
        "last": "Li"
      },
      "email": "isabella.li@example.com",
      "picture": "https://api.dicebear.com/6.x/open-peeps/svg?seed=Isabella",
      "nat": "CA"
    },
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Stephanie",
        "last": "Garrett"
      },
      "email": "stephanie.garrett@example.com",
      "picture": "https://api.dicebear.com/6.x/open-peeps/svg?seed=Stephanie",
      "nat": "AU"
    },
    {
      "gender": "female",
      "name": {
        "title": "Ms",
        "first": "Antonia",
        "last": "Núñez"
      },
      "email": "antonia.nunez@example.com",
      "picture": "https://api.dicebear.com/6.x/open-peeps/svg?seed=Antonia",
      "nat": "ES"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Donald",
        "last": "Young"
      },
      "email": "donald.young@example.com",
      "picture": "https://api.dicebear.com/6.x/open-peeps/svg?seed=Donald",
      "nat": "US"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Iegor",
        "last": "Holodovskiy"
      },
      "email": "iegor.holodovskiy@example.com",
      "picture": "https://api.dicebear.com/6.x/open-peeps/svg?seed=Iegor",
      "nat": "UA"
    },
    {
      "gender": "female",
      "name": {
        "title": "Madame",
        "first": "Jessica",
        "last": "David"
      },
      "email": "jessica.david@example.com",
      "picture": "https://api.dicebear.com/6.x/open-peeps/svg?seed=Jessica",
      "nat": "CH"
    },
    {
      "gender": "female",
      "name": {
        "title": "Ms",
        "first": "Eve",
        "last": "Martinez"
      },
      "email": "eve.martinez@example.com",
      "picture": "https://api.dicebear.com/6.x/open-peeps/svg?seed=Eve",
      "nat": "FR"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Caleb",
        "last": "Silva"
      },
      "email": "caleb.silva@example.com",
      "picture": "https://api.dicebear.com/6.x/open-peeps/svg?seed=Caleb",
      "nat": "US"
    },
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Marcia",
        "last": "Jenkins"
      },
      "email": "marcia.jenkins@example.com",
      "picture": "https://api.dicebear.com/6.x/open-peeps/svg?seed=Marcia",
      "nat": "US"
    },
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Mackenzie",
        "last": "Jones"
      },
      "email": "mackenzie.jones@example.com",
      "picture": "https://api.dicebear.com/6.x/open-peeps/svg?seed=Mackenzie",
      "nat": "NZ"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Jeremiah",
        "last": "Gutierrez"
      },
      "email": "jeremiah.gutierrez@example.com",
      "picture": "https://api.dicebear.com/6.x/open-peeps/svg?seed=Jeremiah",
      "nat": "AU"
    },
    {
      "gender": "female",
      "name": {
        "title": "Ms",
        "first": "Luciara",
        "last": "Souza"
      },
      "email": "luciara.souza@example.com",
      "picture": "https://api.dicebear.com/6.x/open-peeps/svg?seed=Luciara",
      "nat": "BR"
    },
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Valgi",
        "last": "da Cunha"
      },
      "email": "valgi.dacunha@example.com",
      "picture": "https://api.dicebear.com/6.x/open-peeps/svg?seed=Valgi",
      "nat": "BR"
    }
  ]
}

const useStyles = makeStyles({
  avatar: {
    height: 32,
    width: 32,
    borderRadius: '50%',
  },
});

type App = {
  name: string; // "male"
  description: string; // "duane.reed@example.com"
  ID: string; // "https://api.dicebear.com/6.x/open-peeps/svg?seed=Duane"
  version: string; // "AU"
};

type DenseTableProps = {
  users: App[];
};

export const DenseTable = ({ users }: DenseTableProps) => {
  const classes = useStyles();

  const columns: TableColumn[] = [
    { title: 'Name', field: 'name' },
    { title: 'ID', field: 'ID' },
    { title: 'Version', field: 'version' },
  ];

  const data = users.map(user => {
    return {
      name: user.name,
      ID: user.ID,
      version: user.version,
    };
  });

  return (
    <Table
      title="Example App List"
      options={{ search: false, paging: false }}
      columns={columns}
      data={data}
    />
  );
};

export const ExampleFetchComponent = () => {

  const { value, loading, error } = useAsync(async (): Promise<App[]> => {

    const username = 'edith.saldana';
    const password = 'Zandunga23!';
    // Base64 encode the username and password
    const base64Credentials = btoa(`${username}:${password}`);
    // Replace 'your_api_url' with the actual API endpoint you want to call
    const apiUrl = 'https://dev-rfs-02.rulesware.com:443/prweb/api/v1/applications';
    // Make the Fetch API call with basic authentication using Axios
    
    const response = await axios.get(apiUrl, {
      headers: {
        'Authorization': `Basic ${base64Credentials}`,
        'Content-Type': 'application/json', // Set your content type if required
      },
    });


    //return await response.json() as App[];
    // Would use fetch in a real world example
    return response.data.applications;
    
  }, []);

  

  if (loading) {
    return <Progress />;
  } else if (error) {
    return <ResponseErrorPanel error={error} />;
  }

  return <DenseTable users={value || []} />;
};
