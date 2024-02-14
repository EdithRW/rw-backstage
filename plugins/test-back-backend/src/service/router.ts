import { errorHandler } from '@backstage/backend-common';
import express from 'express';
import Router from 'express-promise-router';
import { Logger } from 'winston';

export interface RouterOptions {
  logger: Logger;
}

export async function createRouter(
  options: RouterOptions,
): Promise<express.Router> {
  const { logger } = options;

  const router = Router();
  router.use(express.json());

  router.get('/health', (_, response) => {
    logger.info('PONG!');
    response.json({ status: 'ok' });
  });

  router.get('/pega-cases', async (req, res) => {
    const username = 'edith.saldana';
    const password = 'rulesrw24!';
  
    const response = await fetch('http://localhost:8000/api/pega', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64'),
      },
    });
  
    if (!response.ok) {
      return res.status(response.status).send({ error: 'Failed to fetch data from api' });
    }
  
    const data = await response.json();
    console.log(data);
    res.send(data);
  });

  router.get('/pega-compliance', async (req, res) => {
    const username = 'edith.saldana';
    const password = 'rulesrw24!';
  
    const response = await fetch('http://localhost:8000/api/pega/compliance', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64'),
      },
    });
  
    if (!response.ok) {
      return res.status(response.status).send({ error: 'Failed to fetch data from api' });
    }
  
    const data = await response.json();
    console.log(data);
    res.send(data);
  });

  router.use(errorHandler());
  return router;
}
