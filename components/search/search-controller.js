/* eslint-disable no-console */
import axios from 'axios';
import config from 'config';
import * as searchService from './search-service.js';
import { asyncWrapper } from '../../lib/middleware/async-wrapper.js';
import { Logger } from '../../lib/logger/logger.js';

const appConfig = config.get('app');
const logger = Logger(import.meta.url);

export const totalSearch = asyncWrapper(async(req, res) => {
  const params = req.validated.query;
  const response = await searchService.multi(params)

  axios
  .post(`http://${appConfig.host}:${appConfig.port}/gateway/querylog`, {
    query: params.keyword,
    ...response.meta,
  })
  .then(() => {
    // logger.debug('querylog success');
  })
  .catch(err => {
    logger.error(err);
    logger.error('querylog failed');
  });

res.send(response);
})

export const periodDate = asyncWrapper(async(req, res) => {
  const params = req.validated.body;
  const response = await searchService.period(params)

  axios
  .post(`http://${appConfig.host}:${appConfig.port}/gateway/querylog`, {
    query: params.date,
    ...response.meta,
  })
  .then(() => {
    // logger.debug('querylog success');
  })
  .catch(err => {
    logger.error(err);
    logger.error('querylog failed');
  });

res.send(response);
})

export const rangeDate = asyncWrapper(async(req, res) => {
  const params = req.validated.body;
  const response = await searchService.range(params)

  axios
  .post(`http://${appConfig.host}:${appConfig.port}/gateway/querylog`, {
    query: params.keyword,
    ...response.meta,
  })
  .then(() => {
    // logger.debug('querylog success');
  })
  .catch(err => {
    logger.error(err);
    logger.error('querylog failed');
  });

res.send(response);
})

export const thesisTotalSearch = asyncWrapper(async(req, res) => {
  const params = req.validated.query;
  const response = await searchService.thesisTotal(params)

  axios
  .post(`http://${appConfig.host}:${appConfig.port}/gateway/querylog`, {
    query: params.keyword,
    ...response.meta,
  })
  .then(() => {
    // logger.debug('querylog success');
  })
  .catch(err => {
    logger.error(err);
    logger.error('querylog failed');
  });

res.send(response);
})

export const thesisSearch = asyncWrapper(async(req, res) => {
  const params = req.validated.query;
  const response = await searchService.thesis(params)

  axios
  .post(`http://${appConfig.host}:${appConfig.port}/gateway/querylog`, {
    query: params.keyword,
    ...response.meta,
  })
  .then(() => {
    // logger.debug('querylog success');
  })
  .catch(err => {
    logger.error(err);
    logger.error('querylog failed');
  });

res.send(response);
})

export const stockTotalSearch = asyncWrapper(async(req, res) => {
  const params = req.validated.query;
  const response = await searchService.stockTotal(params)

  axios
  .post(`http://${appConfig.host}:${appConfig.port}/gateway/querylog`, {
    query: params.keyword,
    ...response.meta,
  })
  .then(() => {
    // logger.debug('querylog success');
  })
  .catch(err => {
    logger.error(err);
    logger.error('querylog failed');
  });

res.send(response);
})

export const stockSearch = asyncWrapper(async(req, res) => {
  const params = req.validated.query;
  const response = await searchService.stock(params)
  console.log("keyword: ",params.keyword)
  axios
  .post(`http://${appConfig.host}:${appConfig.port}/gateway/querylog`, {
    query: params.keyword,
    ...response.meta,
  })
  .then(() => {
    // logger.debug('querylog success');
  })
  .catch(err => {
    logger.error(err);
    logger.error('querylog failed');
  });

res.send(response);
})

export const companyTotalSearch = asyncWrapper(async(req, res) => {
  const params = req.validated.query;
  const response = await searchService.companyTotal(params)

  axios
  .post(`http://${appConfig.host}:${appConfig.port}/gateway/querylog`, {
    query: params.keyword,
    ...response.meta,
  })
  .then(() => {
    // logger.debug('querylog success');
  })
  .catch(err => {
    logger.error(err);
    logger.error('querylog failed');
  });

res.send(response);
})

export const companySearch = asyncWrapper(async(req, res) => {
  const params = req.validated.query;
  const response = await searchService.company(params)

  axios
  .post(`http://${appConfig.host}:${appConfig.port}/gateway/querylog`, {
    query: params.keyword,
    ...response.meta,
  })
  .then(() => {
    // logger.debug('querylog success');
  })
  .catch(err => {
    logger.error(err);
    logger.error('querylog failed');
  });

res.send(response);
})