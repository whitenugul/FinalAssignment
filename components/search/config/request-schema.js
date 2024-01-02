import * as yup from 'yup';

export const simple = {
  query: yup.object({
    keyword: yup.string().trim().required(),
    size: yup.number().positive().integer().default(10),
    from: yup.number().integer().min(0).default(0),
  })
};

export const multi = {
  query: yup.object({
    keyword: yup.string().trim().required(),
    size: yup.number().positive().integer().default(10),
    from: yup.number().integer().min(0).default(0),
  }),
};

export const category = {
  query: yup.object({
    category: yup.string().trim().required(),
    keyword: yup.string().trim().required(),
    size: yup.number().positive().integer().default(10),
    from: yup.number().integer().min(0).default(0),
  }),
};

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

export const category_date = {
  body: yup.object({
    start_date: yup.date().required(),
    category: yup.string().trim().required(),
    datefield: yup.string().trim().required(),
    end_date: yup.date().required(),
    size: yup.number().positive().integer().default(10),
    from: yup.number().integer().min(0).default(0),
  }),
};

// export const publish = {
//   query: yup.object({
//     keyword: yup.string().trim().required(),
//     size: yup.number().positive().integer().default(10),
//     from: yup.number().integer().min(0).default(0),
//   }),
// };

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