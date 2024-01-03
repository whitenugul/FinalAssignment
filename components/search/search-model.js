/* eslint-disable no-console */
/* eslint-disable no-const-assign */
/* eslint-disable camelcase */
/* eslint-disable prefer-destructuring */
import { search, msearch } from '../../lib/elasticsearch/client.js';
import * as indexConfig from './config/index-config.js';
import { Logger } from '../../lib/logger/logger.js';

const logger = Logger(import.meta.url);

export const multi = async params => {
  const multiConfig = indexConfig.multi();
  const msearchBody = [];
  const msearchIndices = [];

  multiConfig.forEach(config => {
    const { index, field, body } = config;

    body.query.bool.must.push({
      multi_match: {
        fields: field.search,
        query: params.keyword,
      },
    });

    field.highlight.forEach(item => {
      body.highlight.fields[item] = {};
    });

    body._source = field.result;
    body.size = params.size;
    body.from = params.from;

    msearchIndices.push(index);
    msearchBody.push({ index }, body);
  });

  logger.debug(JSON.stringify(msearchBody));

  const searchResult = await msearch({
    body: msearchBody,
  });

  return { searchResult, msearchIndices };
};

export const period = async params => {
  const simpleConfig = indexConfig.thesis()
  const {index, body} = simpleConfig

  body.query.bool = {
    must: [
      { 
        range: {
        period_start_dt: {
          lte: params.date
        }
      }
      },
      {
        range: {
          period_end_dt: {
            gte: params.date
          }
        }
      }
    ]
  }

  body.size = params.size;
  body.from = params.from;

  // JSON  형태로 만들어서 search 함수에 넣어준다.
  logger.debug(
    JSON.stringify({
      index,
      body,
    }),
  );

  const searchResult = await search({
    index,
    body,
  });
  return { searchResult, index };
}

export const range = async params => {
  const simpleConfig = indexConfig.simple()
  const index = params.category + '-0001'
  const dateField = params.datefield
  const {body} = simpleConfig
  const start_date = params.start_date
  const end_date = params.end_date

  body.query = {
    range: {
      [dateField]: { // dateField 변수를 대괄호로 감싸 동적 필드 이름으로 설정
        gt: start_date,
        lt: end_date,
      }
    }
  };

  body.size = params.size;
  body.from = params.from;

  // JSON  형태로 만들어서 search 함수에 넣어준다.
  logger.debug(
    JSON.stringify({
      index,
      body,
    }),
  );

  const searchResult = await search({
    index,
    body,
  });
  return { searchResult, index };
}

export const thesisTotal = async params => {
  const thesisConfig = indexConfig.thesis()
  const keyword = params.keyword

  const {index, field, body} = thesisConfig

  body.query = {
    multi_match: {
      query: keyword,
      fields: field.search
    }
  }

  field.highlight.forEach(item => {
    body.highlight.fields[item] = {"pre_tags": ["<strong>"], "post_tags": ["</strong>"]};
  });

  body._source = field.result;
  body.size = params.size;
  body.from = params.from;

  // JSON  형태로 만들어서 search 함수에 넣어준다.
  logger.debug(
    JSON.stringify({
      index,
      body,
    }),
  );

  const searchResult = await search({
    index,
    body,
  });
  // console.log(searchResult)
  return { searchResult, index };
}

export const thesis = async params => {
  const thesisConfig = indexConfig.thesis()
  const keyword = params.keyword
  let category = params.category
  const {index, field, body} = thesisConfig

  category = (category === "author_kskn") ? "author_kskn.ngram" : category;

  body.query = {
    match: {
      [category]: keyword
    }
  }

  body.highlight.fields[category] = {"pre_tags": ["<strong>"], "post_tags": ["</strong>"]};

  body._source = field.result;
  body.size = params.size;
  body.from = params.from;

  // JSON  형태로 만들어서 search 함수에 넣어준다.
  logger.debug(
    JSON.stringify({
      index,
      body,
    }),
  );

  const searchResult = await search({
    index,
    body,
  });
  // console.log(searchResult)
  return { searchResult, index };
}

export const stockTotal = async params => {
  const stockConfig = indexConfig.stock()
  const keyword = params.keyword

  const {index, field, body} = stockConfig

  body.query = {
    multi_match: {
      query: keyword,
      fields: field.search
    }
  }

  field.highlight.forEach(item => {
    body.highlight.fields[item] = {"pre_tags": ["<strong>"], "post_tags": ["</strong>"]};
  });

  body._source = field.result;
  body.size = params.size;
  body.from = params.from;

  // JSON  형태로 만들어서 search 함수에 넣어준다.
  logger.debug(
    JSON.stringify({
      index,
      body,
    }),
  );

  const searchResult = await search({
    index,
    body,
  });

  return { searchResult, index };
}


export const stock = async params => {
  const stockConfig = indexConfig.stock()
  const keyword = params.keyword
  let category = params.category

  
  const {index, field, body} = stockConfig

  category = (category === "reporter_kskn") ? "reporter_kskn.ngram" : category

  body.query = {
    match: {
      [category]: keyword
    }
  }

  field.highlight.forEach(item => {
    body.highlight.fields[item] = {"pre_tags": ["<strong>"], "post_tags": ["</strong>"]};
  });

  body._source = field.result;
  body.size = params.size;
  body.from = params.from;

  // JSON  형태로 만들어서 search 함수에 넣어준다.
  logger.debug(
    JSON.stringify({
      index,
      body,
    }),
  );

  const searchResult = await search({
    index,
    body,
  });

  return { searchResult, index };
}

export const companyTotal = async params => {
  const companyConfig = indexConfig.company()
  const keyword = params.keyword

  const {index, field, body} = companyConfig

  body.query = {
    multi_match: {
      query: keyword,
      fields: field.search
    }
  }

  field.highlight.forEach(item => {
    body.highlight.fields[item] = {"pre_tags": ["<strong>"], "post_tags": ["</strong>"]};
  });

  body._source = field.result;
  body.size = params.size;
  body.from = params.from;

  // JSON  형태로 만들어서 search 함수에 넣어준다.
  logger.debug(
    JSON.stringify({
      index,
      body,
    }),
  );

  const searchResult = await search({
    index,
    body,
  });

  return { searchResult, index };
}

export const company = async params => {
  const companyConfig = indexConfig.company()
  const keyword = params.keyword
  let category = params.category

  const {index, field, body} = companyConfig

  category = (category === "company_kskn") ? "company_kskn.ngram" :
  (category === "road_ADD_kskn") ? "road_ADD_kskn.ngram" :
  category;


  body.query = {
    match: {
      [category]: keyword
    }
  }

  body.highlight.fields[category] = {"pre_tags": ["<strong>"], "post_tags": ["</strong>"]};
  body._source = field.result;
  body.size = params.size;
  body.from = params.from;

  // JSON  형태로 만들어서 search 함수에 넣어준다.
  logger.debug(
    JSON.stringify({
      index,
      body,
    }),
  );

  const searchResult = await search({
    index,
    body,
  });

  return { searchResult, index };
}