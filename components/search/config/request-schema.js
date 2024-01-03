/* eslint-disable camelcase */
import * as yup from 'yup';

export const total = {
  query: yup.object({
    keyword: yup.string().trim().required(),
    size: yup.number().positive().integer().default(10),
    from: yup.number().integer().min(0).default(0),
  }),
};

export const period = {
  body: yup.object({
    date: yup.date().required(),
    size: yup.number().positive().integer().default(10),
    from: yup.number().integer().min(0).default(0),
  }),
};

export const thesis = {
  query: yup.object({
    keyword: yup.string().trim().required(),
    category: yup.string().trim().required(),
    size: yup.number().positive().integer().default(10),
    from: yup.number().integer().min(0).default(0),
  })
}

export const thesistotal = {
  query: yup.object({
    keyword: yup.string().trim().required(),
    size: yup.number().positive().integer().default(10),
    from: yup.number().integer().min(0).default(0),
  }),
};

export const stockTotal = {
  query: yup.object({
    keyword: yup.string().trim().required(),
    size: yup.number().positive().integer().default(10),
    from: yup.number().integer().min(0).default(0),
  }),
};

export const stock = {
  query: yup.object({
    keyword: yup.string().trim().required(),
    category: yup.string().trim().required(),
    size: yup.number().positive().integer().default(10),
    from: yup.number().integer().min(0).default(0),
  })
}

export const companyTotal = {
  query: yup.object({
    keyword: yup.string().trim().required(),
    size: yup.number().positive().integer().default(10),
    from: yup.number().integer().min(0).default(0),
  }),
};

export const company = {
  query: yup.object({
    keyword: yup.string().trim().required(),
    category: yup.string().trim().required(),
    size: yup.number().positive().integer().default(10),
    from: yup.number().integer().min(0).default(0),
  })
}