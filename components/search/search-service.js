import { Logger } from '../../lib/logger/logger.js';
import * as searchModel from './search-model.js';

const logger = Logger(import.meta.url);

export const multi = async params => {
  const multiDTO = params;
  const { searchResult, msearchIndices } = await searchModel.multi(multiDTO);

  let total = 0;
  const body = {};
  searchResult.body.responses.forEach((result, i) => {
    body[msearchIndices[i]] = result.hits.hits.map(item => ({
      ...item._source,
      highlight: item.highlight,
    }));
    total += result.hits.total.value;
  });

  const response = {
    meta: {
      index: msearchIndices.join(','),
      took: searchResult.body.took,
      total,
    },
    body,
  };
  logger.info(JSON.stringify(response.meta));
  return response;
};

export const total = async params => {
  const TotalDTO = params;
  const {searchResult, index} = await searchModel.multi(TotalDTO)

  const body = searchResult.body.hits.hits.map(item => ({
    ...item._source,
    highlight: item.highlight,
  }));

  const response = {
    meta: {
      index,
      took: searchResult.body.took,
      total: searchResult.body.hits.total.value,
    },
    body,
  };
  logger.info(JSON.stringify(response.meta));
  return response;
}

export const period = async params => {
  const dateDTO = params
  const {searchResult, index} = await searchModel.period(dateDTO)

  const body = searchResult.body.hits.hits.map(item => ({
    ...item._source,
    highlight: item.highlight,
  }))

  const response = {
    meta: {
      index,
      took: searchResult.body.took,
      total: searchResult.body.hits.total.value,
    },
    body,
  }
  logger.info(JSON.stringify(response.meta));
  return response;
}

export const range = async params => {
  const rangeDTO = params
  const {searchResult, index} = await searchModel.range(rangeDTO)

  const body = searchResult.body.hits.hits.map(item => ({
    ...item._source,
    highlight: item.highlight,
  }))

  const response = {
    meta: {
      index,
      took: searchResult.body.took,
      total: searchResult.body.hits.total.value,
    },
    body,
  }
  logger.info(JSON.stringify(response.meta));
  return response;
}

export const thesisTotal = async params => {
  const thesisTotalDTO = params
  const {searchResult, index} = await searchModel.thesisTotal(thesisTotalDTO)

  const body = searchResult.body.hits.hits.map(item => ({
    ...item._source,
    highlight: item.highlight,
  }))

  const response = {
    meta: {
      index,
      took: searchResult.body.took,
      total: searchResult.body.hits.total.value,
    },
    body,
  }
  logger.info(JSON.stringify(response.meta));
  return response;
}

export const thesis = async params => {
  const thesisDTO = params
  const {searchResult, index} = await searchModel.thesis(thesisDTO)

  const body = searchResult.body.hits.hits.map(item => ({
    ...item._source,
    highlight: item.highlight,
  }))

  const response = {
    meta: {
      index,
      took: searchResult.body.took,
      total: searchResult.body.hits.total.value,
    },
    body,
  }
  logger.info(JSON.stringify(response.meta));
  return response;
}

export const stockTotal = async params => {
  const stockTotalDTO = params
  const {searchResult, index} = await searchModel.stockTotal(stockTotalDTO)
  const body = searchResult.body.hits.hits.map(item => ({
    ...item._source,
    highlight: item.highlight,
  }))

  const response = {
    meta: {
      index,
      took: searchResult.body.took,
      total: searchResult.body.hits.total.value,
    },
    body,
  }
  logger.info(JSON.stringify(response.meta));
  return response;
}

export const stock = async params => {
  const stockDTO = params
  const {searchResult, index} = await searchModel.stock(stockDTO)

  const body = searchResult.body.hits.hits.map(item => ({
    ...item._source,
    highlight: item.highlight,
  }))

  const response = {
    meta: {
      index,
      took: searchResult.body.took,
      total: searchResult.body.hits.total.value,
    },
    body,
  }

  logger.info(JSON.stringify(response.meta));
  return response;
}

export const companyTotal = async params => {
  const companyTotalDTO = params
  const {searchResult, index} = await searchModel.companyTotal(companyTotalDTO)

  const body = searchResult.body.hits.hits.map(item => ({
    ...item._source,
    highlight: item.highlight,
  }))

  const response = {
    meta: {
      index,
      took: searchResult.body.took,
      total: searchResult.body.hits.total.value,
    },
    body,
  }
  logger.info(JSON.stringify(response.meta));
  return response;
}

export const company = async params => {
  const companyDTO = params
  const {searchResult, index} = await searchModel.company(companyDTO)

  const body = searchResult.body.hits.hits.map(item => ({
    ...item._source,
    highlight: item.highlight,
  }))

  const response = {
    meta: {
      index,
      took: searchResult.body.took,
      total: searchResult.body.hits.total.value,
    },
    body,
  }
  logger.info(JSON.stringify(response.meta));
  return response;
}