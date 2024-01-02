export const multi = () => [
  {
    index: 'stock-0001',
    field: {
      search: ["reporter_kskn.ngram", "content_kskc", "category_k", "title_ko"],
      highlight: ["reporter_kskn.ngram", "content_kskc", "category_k", "title_ko"],
      result: ["id_k","reporter_kskn", "content_kskc", "category_k", "title_ko", "start_dt", "update_dt"],
    },
    body: {
      from: 0,
      size: 0,
      query: {
        bool: {
          must: [],
          filter: [],
          should: [],
        },
      },
      highlight: {
        fields: {},
      },
      _source: [],
    },
  },
  {
    index: 'tb_ked-0001',
    field: {
      search: [
        "company_kskn.ngram",
        "company_eng",
        "road_ADD_kskn.ngram"
      ],
      highlight: [
        "company_kskn.ngram",
        "company_eng",
        "road_ADD_kskn.ngram"
      ],
      result: [
        "id_k",
        "company_kskn",
        "company_eng",
        "fond_dt",
        "info_dt",
        "road_ADD_kskn"
      ]
    },
    body: {
      from: 0,
      size: 0,
      query: {
        bool: {
          must: [],
          filter: [],
          should: [],
        },
      },
      highlight: {
        fields: {},
      },
      _source: [],
    },
  },
  {
    index: 'thesis-0001',
    field: {
      search: [
        "category_k",
        "title_ksk",
        "author_kskn.ngram",
        "author_eng",
        "publisher_ko",
        "ministry_ko",
        "location_ko",
        "subject_k",
        "abstract_ko",
        "reference_kske"
      ],
      highlight: [
        "category_k",
        "title_ksk",
        "author_kskn.ngram",
        "author_eng",
        "publisher_ko",
        "ministry_ko",
        "location_ko",
        "subject_k",
        "abstract_ko"
      ],
      result: [
        "id_k",
        "datestamp_dt",
        "category_k",
        "title_ksk",
        "author_kskn",
        "author_eng",
        "publish_date_dt",
        "publisher_ko",
        "ministry_ko",
        "period_start_dt",
        "period_end_dt",
        "location_ko",
        "subject_k",
        "abstract_ko",
        "reference_kske"
      ]
    },
    body: {
      from: 0,
      size: 0,
      query: {
        bool: {
          must: [],
          filter: [],
          should: [],
        },
      },
      highlight: {
        fields: {},
      },
      _source: [],
    },
  },
];

export const stock = () => ({
  index: "stock-0001",
  field: {
    search: ["reporter_kskn.ngram", "content_kskc", "category_k", "title_ko"],
    highlight: ["reporter_kskn.ngram", "content_kskc", "category_k", "title_ko"],
    result: ["id_k","reporter_kskn", "content_kskc", "category_k", "title_ko", "start_dt", "update_dt"],
  },
  body: {
    from: 0,
    size: 0,
    query: {
      bool: {
        must: [],
        filter: [],
        should: [],
      },
    },
    highlight: {
      fields: {},
    },
    _source: [],
  },
});

export const thesis = () => ({
  index: 'thesis-0001',
  field: {
    search: [
      "category_k",
      "title_ksk",
      "author_kskn.ngram",
      "author_eng",
      "publisher_ko",
      "ministry_ko",
      "location_ko",
      "subject_k",
      "abstract_ko",
      "reference_kske"
    ],
    highlight: [
      "category_k",
      "title_ksk",
      "author_kskn.ngram",
      "author_eng",
      "publisher_ko",
      "ministry_ko",
      "location_ko",
      "subject_k",
      "abstract_ko"
    ],
    result: [
      "id_k",
      "datestamp_dt",
      "category_k",
      "title_ksk",
      "author_kskn",
      "author_eng",
      "publish_date_dt",
      "publisher_ko",
      "ministry_ko",
      "period_start_dt",
      "period_end_dt",
      "location_ko",
      "subject_k",
      "abstract_ko",
      "reference_kske"
    ]
  },
  body: {
    from: 0,
    size: 0,
    query: {
      bool: {
        must: [],
        filter: [],
        should: [],
      },
    },
    highlight: {
      fields: {},
    },
    _source: [],
  }
})

export const company = () => (
  {
    index: 'tb_ked-0001',
    field: {
      search: [
        "company_kskn.ngram",
        "company_eng",
        "road_ADD_kskn.ngram"
      ],
      highlight: [
        "company_kskn.ngram",
        "company_eng",
        "road_ADD_kskn.ngram"
      ],
      result: [
        "id_k",
        "company_kskn",
        "company_eng",
        "fond_dt",
        "info_dt",
        "road_ADD_kskn"
      ]
    },
    body: {
      from: 0,
      size: 0,
      query: {
        bool: {
          must: [],
          filter: [],
          should: [],
        },
      },
      highlight: {
        fields: {},
      },
      _source: [],
    },

  });