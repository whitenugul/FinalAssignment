/* eslint-disable no-const-assign */
/* eslint-disable camelcase */
/* eslint-disable prefer-destructuring */
import { search, msearch } from '../../lib/elasticsearch/client.js';
import * as indexConfig from './config/index-config.js';
import { Logger } from '../../lib/logger/logger.js';
import * as categoryConfig from './config/category.js'

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

export const categorySearch = async params => {
  const simpleConfig = indexConfig.simple();
  const index = params.category + '-0001';
  const { body } = simpleConfig;

  const categoryConfigs = {
    stock: categoryConfig.stock(),
    tb_ked: categoryConfig.tb_ked(),
    thesis: categoryConfig.thesis(),
  };

  const catConfig = categoryConfigs[params.category]

  body.query = {
    multi_match: {
      fields: catConfig.field.search,
      query: params.keyword,
    },
  };

  const { field } = catConfig;

  field.highlight.forEach(item => {
    body.highlight.fields[item] = {};
  });

  body._source = field.result;
  body.size = params.size;
  body.from = params.from;

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
};


export const period = async params => {
  const simpleConfig = indexConfig.simple()
  const date = params.date
  const {body} = simpleConfig
  const index = "thesis-0001"

  body.query.bool = {
    must: [
      {
        range: {
          period_start_dt: {
            lte: date
          }
        }
      },
      {
        range: {
          period_end_dt: {
            gte: date
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
  const category = params.category
  const {index, field, body} = thesisConfig

  if (category === "author_kskn") {
    category = "author_kskn.ngram"
  }

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
  if (category === "reporter_kskn") {
    category = "reporter_kskn.ngram"
  }

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
  const category = params.category

  const {index, field, body} = companyConfig

  if (category === "company_kskn") {
    category = "company_kskn.ngram"
  } else if(category === "road_ADD_kskn") {
    category = "road_ADD_kskn.ngram"
  }

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